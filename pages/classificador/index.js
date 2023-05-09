import Header from '@/components/Header'
import ClassificadorNoticias from '@/pages/classificador/ClassificadorNoticias';
import Definicao from '@/pages/classificador/Definicao';
import Aplicacao from '@/pages/classificador/Aplicacao';
import Multilingual from '@/pages/classificador/Multilingual';
import PolaridadeEmocional from "./PolaridadeEmocional";

const classificador = () => {
    return (
        <>
            <Header>
                <title>Tuiaia</title>
                <meta name="description" content="A melhor IA para classificar sentimento de notícias" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Header>
            <main>
                <ClassificadorNoticias />
                <Definicao />
                <PolaridadeEmocional />
                <Multilingual />
                <Aplicacao />
            </main>
        </>
    )
}

export default classificador;
