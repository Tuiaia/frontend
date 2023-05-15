import { useState, useEffect } from 'react'
import Head from 'next/head'
import Introducao from './Introducao'
import PieCharts from './PieCharts'
import { getAllNewsClassifieds } from '@/api/feed/controller'


const Dashboard = () => {
    const [news, setNews] = useState([])
    
    useEffect(() => {
        const getNews = async () =>  {
            const response = await getAllNewsClassifieds('12/04/2023', '14/05/2023')
            setNews(response)
        }
        getNews()
        setInterval(getNews, 5000)
    }, [])
    
    return (
        <>
            <Head>
                <title>Tuiaia - Dashboard</title>
                <meta name="description" content="A melhor IA para classificar sentimento de notícias" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo-tuiuiu.ico" />
            </Head>
            <main className={'overflow-hidden pt-[104px]'}>
                <Introducao newsLength={news? news.length : 0} />
                {news?.length > 0 && <PieCharts news={news} />}
            </main>
        </>
    )
}

export default Dashboard
