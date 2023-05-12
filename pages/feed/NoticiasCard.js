import Image from 'next/image';

const bgColorByClassification = ['bg-classify-negative', 'bg-classify-neutral', 'bg-classify-positive']
const iconLinkByClassification = ['negative_icon.svg', 'neutral_icon.svg', 'positive_icon.svg']

const NoticiasCard = ({ news }) => {
    return (
        <>
            {news && (
                <div className={'flex justify-between bg-white rounded-3xl gap-10 mb-12'}>
                    <div className={'relative p-4 py-10'}>
                    <div className={'ml-6 w-full'}>
                        <div className={'text-primary text-3xl font-bold mb-6'}>{news.title}</div>
                        <div className={'text-2xl'}>
                            <span className={'text-secondary font-bold inline-block mr-4'}>{news.font}</span>
                            <span>({news.date})</span>
                            <Image className={'inline-block'} src={'share.svg'} alt={''} width={40} height={40} />
                        </div>
                    </div>
                    <div className={'absolute bg-white rounded-full -left-6 top-16'}>
                        <img src={news.image} width={60} height={60}  alt={''}/>
                    </div>
                </div>
                    <div className={'flex items-center justify-center px-20 rounded-r-3xl ' + bgColorByClassification[parseInt(news.prediction_index)]}>
                        <div className={'flex justify-center items-center mx-auto my-auto'}>
                            <Image 
                                className={'white-image'}
                                src={iconLinkByClassification[parseInt(news.prediction_index)]}
                                alt={''}
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}



export default NoticiasCard
