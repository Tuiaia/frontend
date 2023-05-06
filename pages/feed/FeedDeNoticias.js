import Image from 'next/image'
import FeedDeNoticiaText from "@/data/text/feed/FeedDeNoticiaText";

const FeedDeNoticias = () => {
    return (
        <section
            style={{
                height: '800px',
            }}>
            <div className={'relative'}>
                <Image className={'arara-vermelha-feed inline-block ml-2'} src={'/arara_Vermelha_feed.svg'} alt={''} width={500} height={500}/>
                <div className={'flex p-20 flex-col justify-center items-center text-center'}>
                    <div className={'flex-1 h-full p-10 rounded-3xl pb-31'}>
                        <div className={'text-p-bold text-9xl font-bold mb-10'}>{FeedDeNoticiaText.title}</div>
                        <div className={'feed-title text-secondary text-5xl font-bold mb-10 max-w-none'}>{FeedDeNoticiaText.description}</div>
                        <div className={'text-white text-3xl text-center justify-center items-center flex'}>
                            <div className={'grid grid-cols-3 gap-10'}>
                                <div className={'text-p-bold text-4xl font-bold mb-10'}>
                                    <div>
                                        <Image className={'inline-block ml-2'} src={'/calendario_feed.svg'} alt={''} width={500} height={500}/>
                                    </div>
                                    <div className={'feed-icons'}>
                                        {FeedDeNoticiaText.advantage1}
                                    </div>
                                </div>
                                <div className={'text-p-bold text-4xl font-bold mb-10'}>
                                    <div className={'text-3xl'}>
                                        <Image className={'inline-block ml-2'} src={'/livro_feed.svg'} alt={''} width={500} height={500}/>
                                    </div>
                                    <div className={'feed-icons'}>
                                        {FeedDeNoticiaText.advantage2}
                                    </div>
                                </div>
                                <div className={'text-p-bold text-4xl font-bold mb-10'}>
                                    <div>
                                        <Image className={'inline-block ml-2'} src={'/dinheiro_feed.svg'} alt={''} width={500} height={500}/>
                                    </div>
                                    <div className={'feed-icons'}>
                                        {FeedDeNoticiaText.advantage3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image className="arara-azul-feed inline-block ml-2" src="/arara_azul_feed.svg" alt="" width={500} height={500} />
                </div>
            </div>
        </section>
    )
}

export default FeedDeNoticias;
