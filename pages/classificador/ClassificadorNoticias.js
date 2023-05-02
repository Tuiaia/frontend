import {useState} from 'react';
import Image from 'next/image';
import CapivaraLoading from '@/components/CapivaraLoading';

const ClassificadorNoticias = () => {
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const mockResponse = {
        'classificacao': 'negativa',
        'probabilidade': '80%'
    }
    const bgColorClassify = {
        'positiva': 'bg-classify-positive',
        'neutra': 'bg-classify-neutral',
        'negativa': 'bg-classify-negative',
    }

    const classify = () => {
        setIsLoading(!isLoading);
        setResponse(null)
        setTimeout(() => {
            setResponse(mockResponse);
            setIsLoading(false);
        }, 2000);
    }

    return (
        <section className={'flex flex-col justify-center items-center max-w-4xl m-auto py-28 text-primary'}>
            <h1 className={'text-7xl font-bold mb-12'}>Classificador de notícias</h1>
            <div className={'w-full relative'}>
                <div className={'text-2xl'}>
                    Digite ou cole o texto da notícia sobre o mercado financeiro no campo abaixo:
                </div>
                <div className={'w-full bg-white relative mt-4 border-solid border-4 border-primary p-4 pb-0 rounded-3xl hover:outline-p-lighter'}>
                    <textarea
                        style={{overflowY: 'visible'}}
                        color={'primary'}
                        className={'w-full min-h-[350px] max-w-full max-h-[60vh] text-primary text-2xl focus:outline-none'}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onFocus={(e) => e.target.parentElement.classList.add('border-p-lighter')}
                        onBlur={(e) => e.target.parentElement.classList.remove('border-p-lighter')}
                    />
                </div>
                <Image src={'folhas_direita.svg'} alt={''} width={400} height={400} className={'absolute  -right-44 top-0 -z-10'} ></Image>
                <Image src={'folhas_esquerda.svg'} alt={''} width={300} height={300} className={'absolute  -left-44 top-20 -z-10'}></Image>
            </div>
            <div className={'w-full text-end text-2xl mt-2 mr-2'}>Caracteres: {text.length}</div>
            <div className={'w-full flex justify-center'}>
                {!isLoading? (
                    <button
                        className={'bg-primary text-white font-bold rounded-full p-2 px-8 text-3xl hover:bg-p-bold hover:shadow-[0px_8px_15px_rgba(0,0,0,0.25)] hover:-translate-y-1 active:shadow-none active:translate-y-0'}
                        onClick={classify}
                    >
                        Classificar
                    </button>
                ) : <CapivaraLoading />
                }
            </div>
            {response && (
                <>
                    <div className={`w-full mt-16 ${bgColorClassify[mockResponse.classificacao]} p-10 rounded-3xl text-white`}>
                        <div className={'text-4xl font-bold text-center mb-6'}>Análise</div>
                        <div className={'text-3xl'}>
                            <span>Essa notícia é classificada como: <span className={'capitalize text-black font-bold'}>{mockResponse.classificacao}</span></span>
                            <Image className={'inline-block ml-2'} src={'negative_icon.svg'} alt={''} width={40} height={40}/>

                        </div>
                    </div>
                    <div className={`w-full mt-16 ${bgColorClassify['positiva']} p-10 rounded-3xl text-white`}>
                        <div className={'text-4xl font-bold text-center mb-6'}>Análise</div>
                        <div className={'text-3xl'}>
                            <span>Essa notícia é classificada como: <span className={'capitalize text-black font-bold'}>{'positiva'}</span></span>
                            <Image className={'inline-block ml-2'} src={'positive_icon.svg'} alt={''} width={40} height={40}/>
                        </div>
                    </div>
                    <div className={`w-full mt-16 ${bgColorClassify['neutra']} p-10 rounded-3xl text-white`}>
                        <div className={'text-4xl font-bold text-center mb-6'}>Análise</div>
                        <div className={'text-3xl'}>
                            <span>Essa notícia é classificada como: <span className={'capitalize text-black font-bold'}>{'neutra'}</span></span>
                            <Image className={'inline-block ml-2'} src={'neutral_icon.svg'} alt={''} width={40} height={40}/>
                        </div>
                    </div>
                </>
                )
            }
        </section>
    )
}

export default ClassificadorNoticias
