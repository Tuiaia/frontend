import NossoTime from '@/pages/nosso-projeto/NossoTime';
import NossoMentor from '@/pages/nosso-projeto/NossoMentor';
import Agradecimentos from '@/pages/nosso-projeto/Agradecimentos';
import Head from 'next/head';


export default function NossoProjeto() {

    return (
        <>
            <Head>
                <title>Tuiaia - Nosso Projeto</title>
                <meta name="description" content="A melhor IA para classificar sentimento de notícias" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo-tuiuiu.ico" />
            </Head>
            <main>
                <NossoTime />
                <NossoMentor />
                <Agradecimentos />
            </main>
        </>
    )
}