import { DefinicaoText } from '@/data/text/classificador';

const Definicao = () => {
    return (
        <section className={'w-full bg-[url("../public/cachoeira-definicao-classificador.svg")] bg-no-repeat bg-cover pb-601 flex justify-end'}>
            <div className={'flex justify-end items-center p-20'}>
                <div className={'flex-1 max-w-5xl bg-p-bold h-full p-10 rounded-3xl pb-31'}>
                    <div className={'text-secondary text-5xl font-bold mb-10'}>{DefinicaoText.title}</div>
                    <div className={'text-white text-2xl text-justify'}>
                        {DefinicaoText.paragraph_one}<br/><br/>
                        {DefinicaoText.paragraph_two}<br/><br/>
                        {DefinicaoText.paragraph_three}<br/><br/>
                        {DefinicaoText.paragraph_four}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Definicao