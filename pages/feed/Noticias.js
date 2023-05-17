import { useState, useEffect } from 'react';
import NoticiasCard from '@/pages/feed/NoticiasCard';
import { getAllNewsClassifieds } from '@/api/feed/controller'
import Input from '@mui/joy/Input';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const Noticias = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [news, setNews] = useState([]);
    const [newsInterval, setNewsInterval] = useState([0, 5])
    const [newsPerPage, setNewsPerPage] = useState(5)
    const [newsToShow, setNewsToShow] = useState([])
    const [date, setDate] = useState({
        start: new Date().toLocaleDateString('pt-BR'), 
        end: new Date().toLocaleDateString('pt-BR'),
    })
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        handleDate()
        const getNews = async () =>  {
            setIsLoading(true);
            try {
                const response = await getAllNewsClassifieds(date.start, date.end)
                setNews(response)
                setNewsToShow(response.slice(newsInterval[0], newsInterval[1]))
            } finally {
                setIsLoading(false);    
            }
        }
        getNews()
    }, [selected])

    useEffect(() => {
        setNewsToShow(news.slice(newsInterval[0], newsInterval[1]))
    }, [newsInterval])

    useEffect(() => {
        if (newsPerPage > newsInterval[1]){
            setNewsInterval([newsInterval[0], newsPerPage])
        } else if (newsPerPage < newsInterval[1]) {
            if (newsPerPage <= 5 || newsInterval[1] - newsPerPage === 5){
                setNewsInterval([0, 5])    
            } else {
                setNewsInterval([newsInterval[0], newsInterval[1] - newsPerPage])
            }
        }
    }, [newsPerPage])

    function handleDate() {
        switch (selected) {
            case 0:
                setDate({
                    start: new Date().toLocaleDateString('pt-BR'),
                    end: new Date().toLocaleDateString('pt-BR')
                })
                break
            case 1:
                const dateToGetWeekOld = new Date()
                dateToGetWeekOld.setDate(dateToGetWeekOld.getDate() - 7)
                setDate({
                    start: dateToGetWeekOld.toLocaleDateString('pt-BR'),
                    end: new Date().toLocaleDateString('pt-BR')
                })
                break
            case 2:
                const dateToGetMoth = new Date()
                dateToGetMoth.setMonth(dateToGetMoth.getMonth() - 1)
                setDate({
                    start: dateToGetMoth.toLocaleDateString('pt-BR'),
                    end: new Date().toLocaleDateString('pt-BR')
                })
                break
        }
    }

    function handleValuePerPage(e) {
        const value = parseInt(e.target.value)
        if (value < 0)
            setNewsPerPage(0)
        else if (value > news.length)
            setNewsPerPage(news.length)
        else
            setNewsPerPage(value)
    }

    function backNews() {
        let start = newsInterval[0] - newsPerPage
        let end = newsInterval[1] - newsPerPage

        if (start < 5) {
            start = 0
        } 

        if (end < 5) {
            end = 5
        }
        setNewsInterval([start, end])
        const section = document.querySelector('#news' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    function nextNews() {
        let start = newsInterval[0] + newsPerPage
        let end = newsInterval[1] + newsPerPage

        if (start > news.length - 5) {
            if (news.length - 5 < 5)
                start = 0
            else
                start = news.length - 5
        } 

        if (end > news.length - 5) {
            if (news.length - 5 < 5){
                end = 5
            }
            else
                end = news.length
        } 
        setNewsInterval([start, end])
        const section = document.querySelector('#news' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    }

    return (
        <section id={'news'} className={'w-full bg-primary flex flex-col items-center p-10'}>
            <div className={'flex items-center text-center p-20 w-[80%]'}>
                <span className={'text-white text-6xl m-auto font-bold'}>{date.start !== date.end? `${date.start} - ${date.end}` : 'Hoje'}</span>
                <div className={'flex text-white text-3xl font-bold items-center ml-10'}>
                    <div className={'mr-3'}>Período: </div>
                    <FormControl style={{ minWidth: '20%' }}>
                        <InputLabel></InputLabel>
                        <Select
                            sx={{
                                color: "white",
                                '.MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'rgba(228, 219, 233, 0.25)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'rgba(228, 219, 233, 0.25)',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'rgba(228, 219, 233, 0.25)',
                                },
                                '.MuiSvgIcon-root ': {
                                    fill: "white !important",
                                    color: 'white'
                                }
                            }}
                            value={selected}
                            label=""
                            onChange={(e) => setSelected(e.target.value)}
                        >
                            <MenuItem value={0}>Hoje</MenuItem>
                            <MenuItem value={1}>7 dias atrás</MenuItem>
                            <MenuItem value={2}>1 mês atrás</MenuItem>
                        </Select>
                    </FormControl>

                </div>
            </div>
            {
                isLoading && <div className={'text-6xl text-white font-bold h-[60vh] pt-[30vh]'}>Carregando notícias...</div>
            }
            {
                news?.length === 0 && !isLoading &&
                        <div className={'flex justify-center items-center my-10 py-32'}>
                            <div className={'text-white text-6xl m-auto font-bold'}>Nenhuma notícia encontrada</div>
                        </div> 
            }
            {
                newsToShow?.length > 0 && !isLoading && (
                    <>
                        {newsToShow.map((news, index) => <NoticiasCard key={index} news={news} />)}
                        <div className={'mt-5 w-full flex justify-around items-center'}>
                            <div onClick={() => backNews()} className={'text-3xl text-white font-bold cursor-pointer'} >{'< '} Anterior</div>
                            <div>
                                <div className={'text-2xl text-white font-bold mb-3'}>Notícias por página:</div>
                                <Input type={'number'} value={newsPerPage} onChange={(e) => handleValuePerPage(e)} />
                            </div>
                            <div onClick={() => nextNews()} className={'text-3xl text-white font-bold cursor-pointer'}>Próxima {' >'}</div>
                        </div>
                    </>
                )
            }
        </section>
    )
}

export default Noticias
