import Image from 'next/image';

const Noticias = () => {
    const date = new Date().toLocaleDateString('pt-BR');

    const mockNews = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
            fonte: 'Infomoney',
            date: '20/04/2023',
            image: '/arara_vermelha_feed.svg',
            link: 'https://www.infomoney.com.br/mercados/ibovespa-tem-leve-alta-com-exterior-positivo-e-antes-de-decisao-do-copom-veja-os-destaques/'
        },
    ]

    return (
        <section className={'w-full bg-primary flex flex-col items-center p-10 min-h-screen'}>
            <div className={'flex items-center text-center p-20 w-full'}>
                <span className={'text-white flex-1 text-6xl m-auto font-bold'}>{date}</span>
                <Image src={'icone_filtro.svg'} alt={''} width={100} height={100}/>
            </div>
            <div className={'bg-white rounded-3xl p-4 py-10 flex gap-10'}>
                <div className={'ml-6 w-full'}>
                    <div className={'text-primary text-3xl font-bold mb-8'}>Fazenda lança pacote com 13 medidas para estimular crédito e destravar PPPs</div>
                    <div className={'text-2xl'}>
                        <span className={'text-secondary font-bold inline-block mr-4'}>InfoMoney</span>
                        <span>(20/04/2023)</span>
                        <Image className={'inline-block'} src={'share.svg'} alt={''} width={40} height={40} />
                    </div>
                </div>
                <div>
                    <div className={'flex justify-center items-center'}>
                        <Image src={'positive_icon.svg'} alt={''} width={60} height={60} />
                        <span>Positivo</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Noticias
