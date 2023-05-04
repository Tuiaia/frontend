import ClassificadorNoticias from '@/pages/classificador/ClassificadorNoticias';
import Definicao from '@/pages/classificador/Definicao';
import Aplicacao from '@/pages/classificador/Aplicacao';
import Multilingual from '@/pages/classificador/Multilingual';
import PolaridadeEmocional from "./PolaridadeEmocional";

const classificador = () => {
    return (
        <>
            <ClassificadorNoticias />
            <Definicao />
            <PolaridadeEmocional />
            <Multilingual />
            <Aplicacao />
        </>
    )
}

export default classificador;
