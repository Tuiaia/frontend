import { AplicacaoText } from '@/data/text/classificador';

const Aplicacao = () => {
    return (
        <section className={'w-full bg-[url("../public/aplicacao-classificador.svg")] bg-no-repeat bg-cover pb-601 flex'}>
            <div className={'flex justify-end items-center p-20'}>
                <div className={'flex-1 max-w-5xl bg-p-bold h-full p-10 rounded-3xl pb-31'}>
                    <div className={'text-secondary text-5xl font-bold mb-10'}>{AplicacaoText.title}</div>
                    <div className={'text-white text-2xl text-justify'}>
                        {AplicacaoText.paragraph_one}<br/><br/>
                        {AplicacaoText.paragraph_two}<br/><br/>
                        {AplicacaoText.paragraph_three}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aplicacao