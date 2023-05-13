import Image from 'next/image';
import NoticiasCard from '@/pages/feed/NoticiasCard';
import { useEffect } from 'react';

const Noticias = () => {
    const date = new Date().toLocaleDateString('pt-BR');

    useEffect(() => {
        const getNews = async () =>  {
            setIsLoading(true);
            const news = await getAllNewsClassifieds()
            setResponse(news)
            setIsLoading(false)
        }
        getNews()
    }, [])

    return (
        <section className={'w-full bg-primary flex flex-col items-center p-10 min-h-screen'}>
            <div className={'flex items-center text-center p-20 w-[63%]'}>
                <span className={'text-white text-6xl m-auto font-bold'}>{`${date} - ${date}`}</span>
                <Image className={'ml-16 white-image'} src={'icone_filtro.svg'} alt={''} width={50} height={50}/>
            </div>
            {
                testes? testes.map((noticia, index) => <NoticiasCard key={index} noticia={noticia} />) :
                    <div className={'flex justify-center items-center'}>
                        <div className={'text-white text-6xl m-auto font-bold'}>Nenhuma notícia encontrada</div>
                    </div>
            }
        </section>
    )
}

export default Noticias
