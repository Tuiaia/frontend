import Image from 'next/image';

const bgColorByClassification = ['bg-classify-negative', 'bg-classify-neutral', 'bg-classify-positive']
const iconLinkByClassification = ['negative_icon.svg', 'neutral_icon.svg', 'positive_icon.svg']

const NoticiasCard = ({ noticia }) => {
    return (
        <div className={'flex justify-between bg-white rounded-3xl gap-10 mb-12'}>
            <div className={'relative p-4 py-10'}>
            <div className={'ml-6 w-full'}>
                <div className={'text-primary text-3xl font-bold mb-6'}>Fazenda lança pacote com 13 medidas para estimular crédito e destravar PPPs</div>
                <div className={'text-2xl'}>
                    <span className={'text-secondary font-bold inline-block mr-4'}>InfoMoney</span>
                    <span>(20/04/2023)</span>
                    <Image className={'inline-block'} src={'share.svg'} alt={''} width={40} height={40} />
                </div>
            </div>
            <div className={'absolute bg-white rounded-full -left-6 top-16'}>
                <Image src={'/pantanal.png'} width={60} height={60}  alt={''}/>
            </div>
        </div>
            <div className={'flex items-center justify-center px-20 rounded-r-3xl ' + bgColorByClassification[noticia.classification]}>
                <div className={'flex justify-center items-center mx-auto my-auto'}>
                    <Image 
                        className={'white-image'}
                        src={iconLinkByClassification[noticia.classification]}
                        alt={''}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    )
}



export default NoticiasCard
