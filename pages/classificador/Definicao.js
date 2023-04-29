import { DefinicaoText } from '@/data/text/classificador';

const Definicao = () => {
    return (
        <section className={'w-full bg-[url("../public/nosso_time.jpg")] bg-no-repeat bg-cover pb-72 flex justify-end'}>
            <div className={'flex justify-end'}>
                <span className={'text-secondary text-6xl font-bold mt-14'}>{DefinicaoText.title}</span>
                <span className={'text-p-bold text-center text-4xl mb-8'}>
                    {DefinicaoText.paragraph_one}<br/>
                    {DefinicaoText.paragraph_two}<br/>
                    {DefinicaoText.paragraph_three}<br/>
                    {DefinicaoText.paragraph_four}
                </span>
            </div>
        </section>
    )
}

export default Definicao