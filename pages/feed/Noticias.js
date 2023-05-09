import Image from 'next/image';
import NoticiasCard from '@/pages/feed/NoticiasCard';

const Noticias = () => {
    const date = new Date().toLocaleDateString('pt-BR');

    const mockNews = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            fonte: 'Infomoney',
            date: '20/04/2023',
            image: '/arara_vermelha_feed.svg',
            link: 'https://www.infomoney.com.br/mercados/ibovespa-tem-leve-alta-com-exterior-positivo-e-antes-de-decisao-do-copom-veja-os-destaques/',
        },
    ]
    const testes = [0, 1, 2, 3, 4, 5]

    return (
        <section className={'w-full bg-primary flex flex-col items-center p-10 min-h-screen'}>
            <div className={'flex items-center text-center p-20 w-[63%]'}>
                <span className={'text-white text-6xl m-auto font-bold'}>{`${date} - ${date}`}</span>
                <Image className={'ml-16'} src={'icone_filtro.svg'} alt={''} width={50} height={50}/>
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
