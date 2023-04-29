import {TextareaAutosize} from '@mui/material';
import {useState} from 'react';
import Image from 'next/image';

const ClassificadorNoticias = () => {
    const [text, setText] = useState('');

    return (
        <section className={'flex flex-col justify-center items-center max-w-4xl m-auto py-28 text-primary'}>
            <h1 className={'text-7xl font-bold mb-12'}>Classificador de notícias</h1>
            <div className={'w-full relative'}>
                <div className={'text-2xl'}>
                    Digite ou cole o texto da notícia sobre o mercado financeiro no campo abaixo:
                </div>
                <div className={'w-full mt-4 border-solid border-4 border-primary p-2 pb-0 rounded-xl hover:outline-p-lighter'}>
                    <TextareaAutosize
                        color={'primary'}
                        maxRows={20}
                        variant={'outlined'}
                        minRows={10}
                        className={'w-full max-h-[60vh] text-primary text-2xl focus:outline-none'}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onFocus={(e) => e.target.parentElement.classList.add('border-p-lighter')}
                        onBlur={(e) => e.target.parentElement.classList.remove('border-p-lighter')}
                    />
                </div>
                <Image src={'folhas_direita.svg'} alt={''} width={300} height={300} className={'absolute right-0 top-8'} ></Image>
                <Image src={'folhas_esquerda.svg'} alt={''} width={300} height={300} className={'absolute left-0 top-8'}></Image>
            </div>
            <div className={'w-full text-end text-2xl mt-2 mr-2'}>Caracteres: {text.length}</div>
            <div className={'w-full flex justify-center'}>
                <button className={'bg-primary text-white font-bold rounded-full p-2 px-8 text-3xl hover:bg-p-bold hover:shadow-[0px_8px_15px_rgba(0,0,0,0.25)] hover:-translate-y-1 active:shadow-none active:translate-y-0'}>Classificar</button>
            </div>

        </section>
    )
}

export default ClassificadorNoticias
