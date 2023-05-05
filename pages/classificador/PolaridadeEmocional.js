import { PolaridadeEmocionalText } from '@/data/text/classificador';
import Image from 'next/image'

const PolaridadeEmocional = () => {
    return (
        <section
            style={{
                height: '980px',
            }}>
            <div className={'flex p-20 flex-col'}>
                <div className={'flex-1 h-full p-10 rounded-3xl pb-31'}>
                    <div className={'text-secondary text-6xl font-bold mb-10'}>{PolaridadeEmocionalText.title}</div>
                    <div className={'text-p-bold text-3xl font-bold mb-10 max-w-none'}>{PolaridadeEmocionalText.description}</div>
                    <div className={'text-white text-3xl text-center justify-center items-center flex'}>
                        <div className={'grid grid-cols-3 gap-10'}>
                            <div className={'text-p-bold text-2xl font-bold mb-10'}>
                                <div className={'text-3xl'}>
                                    <Image className={'inline-block ml-2 positive-icon'} src={'/positive_icon.svg'} alt={''} width={300} height={300}/>
                                </div>
                                <div className={'text-classify-positive text-5xl'}>
                                    {PolaridadeEmocionalText.positive_title}<br/>
                                </div>
                                <div>
                                    {PolaridadeEmocionalText.positive_description}
                                </div>
                            </div>
                            <div className={'text-p-bold text-2xl font-bold mb-10'}>
                                <div className={'text-3xl'}>
                                    <Image className={'inline-block ml-2 neutral-icon'} src={'/neutral_icon.svg'} alt={''} width={300} height={300}/>
                                </div>
                                <div className={'text-classify-neutral text-5xl'}>
                                    {PolaridadeEmocionalText.neutral_title}<br/>
                                </div>
                                <div>
                                    {PolaridadeEmocionalText.neutral_description}
                                </div>
                            </div>
                            <div className={'text-p-bold text-2xl font-bold mb-10'}>
                                <div className={'text-3xl'}>
                                    <Image className={'inline-block ml-2 negative-icon'} src={'/negative_icon.svg'} alt={''} width={300} height={300}/>
                                </div>
                                <div className={'text-classify-negative text-5xl'}>
                                    {PolaridadeEmocionalText.negative_title}<br/>
                                </div>
                                <div>
                                    {PolaridadeEmocionalText.negative_description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PolaridadeEmocional;
