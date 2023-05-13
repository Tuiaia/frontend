import Image from 'next/image';
import { useState, useEffect } from 'react';
import NoticiasCard from '@/pages/feed/NoticiasCard';
import CapivaraLoading from '@/components/CapivaraLoading';
import { getAllNewsClassifieds } from '@/api/feed/controller'

const Noticias = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const date = new Date().toLocaleDateString('pt-BR');

    useEffect(() => {
        const getNews = async () =>  {
            setIsLoading(true);
            const news = await getAllNewsClassifieds()
            setResponse(news)
            setIsLoading(false);
        }
        getNews()
    }, [])

    return (
        <section className={'w-full bg-primary flex flex-col items-center p-10'}>
            <div className={'flex items-center text-center p-20 w-[63%]'}>
                <span className={'text-white text-6xl m-auto font-bold'}>{`${date} - ${date}`}</span>
                <Image className={'ml-16 white-image'} src={'icone_filtro.svg'} alt={''} width={50} height={50}/>
            </div>
            {
                isLoading && <CapivaraLoading />
            }
            {
                response && !isLoading? (
                    response.map((news, index) => <NoticiasCard key={index} news={news} />)) :
                    <div className={'flex justify-center items-center my-10'}>
                        <div className={'text-white text-6xl m-auto font-bold'}>Nenhuma notícia encontrada</div>
                    </div>
            }
        </section>
    )
}

export default Noticias
