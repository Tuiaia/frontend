import Chart from "react-google-charts"
import { useEffect, useState } from "react"
import { findCotationsByName } from "@/api/dashboard/controller";
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';

const LineGraphics = ({ news }) => {
    const [filters, setFilters] = useState([false, false, false, false])
    const [inputData, setInputData] = useState({text: '', status: 'initial'})
    const today = new Date()
    const possibleDates = getPossibleDates()
    const styleButtonByActivation = ['bg-third text-white', 'bg-white text-primary']
    const filtersButton = [
        { text: 'Longo prazo', click: handleFilter() },
        { text: 'Curto prazo' },
        { text: 'Alto impacto' },
        { text: 'Baixo impacto' }
    ]
    const sentimentOptions = {
        title: 'Notícias Classificadas nos últimos 7 dias',
        curveType: 'function',
        legend: { position: 'bottom' },
    };
    const [data, setData] = useState([
        ['Dias', 'Positivos', 'Negativos'],
        ['1', 0, 0],
        ['2', 0, 0],
        ['3', 0, 0],
        ['4', 0, 0],
        ['5', 0, 0],
        ['6', 0, 0],
        ['7', 0, 0],
    ]);

    useEffect(() => {
        if (news) {
            const newsFiltered = handleFilter()
            formatNewsToDataGraphic(news)
            console.log(news.length, data)
        }
    }, [news])

    function getPossibleDates() {
        const dates = []
        let possibleDate = new Date()
        for (let day = 7; day >= 1; day--) {
            possibleDate.setDate(today.getDate() - day)
            dates.push(possibleDate.toLocaleDateString('pt-BR'))
        }
        return dates
    }

    function formatNewsToDataGraphic(newsFiltered) {
        newsFiltered.map((item) => {
            const classification = parseInt(item.classification.sentiment)
            if (classification !== 1) {
                const day = possibleDates.findIndex((possibleDate) => possibleDate === item.date) + 1
                if (day !== 0) {
                    const classificationPosition = classification === 0? classification + 2 : classification - 1
                    data[day][classificationPosition]++
                }
            }
        })
    }

    function handleFilter() {
        const newsFilteredByterm = filterNewsToShowByTerm()
        return filterNewsToShowByIntensity(newsFilteredByterm)
    }

    function filterNewsToShowByTerm() {
        if (!filters[0] && !filters[1]) {
            return news
        }

        if (filters[0] && !filters[1]) {
            return news?.filter((data) => data.classification.term === 2)
        }

        if (!filters[0] && filters[1]) {
            return news?.filter((data) => data.classification.term === 0)
        }

        if (filters[0] && filters[1]) {
            return news?.filter((data) => data.classification.term === 2 || data.classification.term === 0)
        }
    }

    function filterNewsToShowByIntensity(newsFilteredByterm) {
        if (!filters[0] && !filters[1]) {
            return newsFilteredByterm
        }

        if (filters[0] && !filters[1]) {
            return newsFilteredByterm?.filter((data) => data.classification.intensity === 2)
        }

        if (!filters[0] && filters[1]) {
            return newsFilteredByterm?.filter((data) => data.classification.intensity === 0)
        }

        if (filters[0] && filters[1]) {
            return newsFilteredByterm?.filter((data) => data.classification.intensity === 2 || data.classification.intensity === 0)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setInputData((current) => ({ ...current, status: 'loading' }));
        try {
            console.log(inputData.text, possibleDates[0], possibleDates[possibleDates.length-1])
            const response = await findCotationsByName(inputData.text, possibleDates[0], possibleDates[possibleDates.length-1])
            console.log(response);
            setTimeout(() => {
                setInputData({ text: inputData.text, status: 'sent' });
            }, 1500);
        } catch (error) {
            setInputData((current) => ({ ...current, status: 'failure' }));
        }
    };

    return <section className={'bg-primary p-20 w-full min-h-screen'}>
        <div className={'max-w-5xl text-5xl m-auto text-center w-full text-secondary font-bold'}>
            Compare as notícias do mercado financeiro com a sua carteira de ações
        </div>
        <div className={'flex justify-center mt-32'}>
            <div className={'flex justify-center flex-col flex-1'}>
                <div className={'flex'}>
                    {filtersButton.map((filterButton, index) => {
                        return <button key={index}
                            className={filters[index]? styleButtonByActivation[0] : styleButtonByActivation[1] + ' font-bold rounded-full p-2 px-4 text-2xl hover:bg-p-bold hover:shadow-[0px_8px_15px_rgba(0,0,0,0.25)] hover:-translate-y-1 active:shadow-none active:translate-y-0'}
                            onClick={() => {filters[index] = !filters[index]}}
                        >{filterButton.text}</button>
                    })}
                </div>
                <Chart 
                    width={'500px'}
                    height={'500px'}
                    chartType={'LineChart'}
                    data={data}
                    options={sentimentOptions}
                />
            </div>
            
            <div className={'flex justify-center flex-col flex-1'}>
                <div className={'flex justify-center'}>
                    <form onSubmit={handleSubmit} id="demo">
                        <FormControl>
                            <Input
                                sx={{ '--Input-decoratorChildHeight': '45px' }}
                                placeholder={'Empresa ou código da ação'}
                                value={inputData.text}
                                onChange={(event) => setInputData({ text: event.target.value, status: 'initial' })}
                                error={inputData.status === 'failure'}
                                endDecorator={
                                    <Button
                                        variant="solid"
                                        color="primary"
                                        loading={inputData.status === 'loading'}
                                        type="submit"
                                        sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                                    >
                                        Buscar Cotações
                                    </Button>
                                }
                            />
                            {inputData.status === 'failure' && (
                            <FormHelperText
                                sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                            >
                                Oops! Algo de errado aconteceu, tente novamente.
                            </FormHelperText>
                            )}

                            {inputData.status === 'sent' && (
                            <FormHelperText
                                sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                            >
                                Cotação encontrada!
                            </FormHelperText>
                            )}
                        </FormControl>
                    </form>
                </div>
            </div>
        </div>
    </section>
}

export default LineGraphics