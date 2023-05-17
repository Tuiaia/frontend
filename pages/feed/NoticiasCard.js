import Image from 'next/image';
import Link from 'next/link';

const NoticiasCard = ({ news }) => {
    const bgColorByClassification = ['bg-classify-negative', 'bg-classify-neutral', 'bg-classify-positive']
    const iconLinkByClassification = ['negative_icon.svg', 'neutral_icon.svg', 'positive_icon.svg']

    return (
        <>
            {news && (
                <div className={'flex justify-between bg-white rounded-3xl gap-10 mb-12 w-[80%]'}>
                    <div className={'relative p-4 py-10 w-[80%]'}>
                        <div className={'ml-6 w-full'}>
                            <div className={'text-primary text-3xl font-bold mb-6'}>{news.title}</div>
                            <div className={'text-2xl'}>
                                <span className={'text-secondary font-bold inline-block mr-4'}>{news.font}</span>
                                <span>({news.date})</span>
                                <Link href={news.url} target={'_blank'}>
                                    <Image className={'inline-block'} src={'share.svg'} alt={''} width={40} height={40} />
                                </Link>
                            </div>
                        </div>
                        <div className={'absolute bg-white rounded-2xl -left-8 top-16 p-2'}>
                            <Image src={news.image} width={40} height={40}  alt={''}/>
                        </div>
                    </div>
                    <div className={'flex items-center justify-center px-20 rounded-r-3xl ' + bgColorByClassification[parseInt(news.classification.sentiment)]}>
                        <div className={'flex justify-center items-center mx-auto my-auto'}>
                            <Image 
                                className={'white-image'}
                                src={iconLinkByClassification[parseInt(news.classification.sentiment)]}
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
