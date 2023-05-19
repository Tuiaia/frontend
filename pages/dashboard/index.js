import { useState, useEffect } from 'react'
import Head from 'next/head'
import Introducao from './Introducao'
import PieCharts from './PieCharts'
import { getAllNewsClassifieds } from '@/api/feed/controller'
import LineGraphics from './LineGraphics'


const Dashboard = () => {
    const [news, setNews] = useState([])
    const [error, setError] = useState(true)
    
    useEffect(() => {
        const getNews = async () =>  {
            try {
                const today = new Date()
                let start_date = new Date()
                start_date.setDate(today.getDate() - 7)
                const response = await getAllNewsClassifieds(start_date.toLocaleDateString('pt-BR'), today.toLocaleDateString('pt-BR'))
                if(response === 'DOMException: The user aborted a request.')
                    throw new Error('DOMException: The user aborted a request.')
                setNews(response)
                setError(null)
            } catch (e) {
                setError(e)
            }
        }
        getNews()
        if (!error)
            setInterval(getNews, 15000)
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
                <Introducao news={news} />
                {news?.length > 0 && (
                    <>
                        <PieCharts news={news} />
                        <LineGraphics news={news}/>
                    </>
                )}
            </main>
        </>
    )
}

export default Dashboard
