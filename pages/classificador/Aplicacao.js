import { AplicacaoText } from '@/data/text/classificador';

const Aplicacao = () => {
    return (
        <section
            className={'w-full bg-no-repeat bg-cover pb-700 flex'}
            style={{
                backgroundImage: 'url("/aplicacao-classificador.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '800px',
                backgroundPosition: 'right center',
            }}>
            <div className={'flex justify-end items-center p-20'}>
                <div className={'flex-1 max-w-5xl bg-p-bold h-full p-10 rounded-3xl pb-31'}>
                    <div className={'text-secondary text-6xl font-bold mb-10'}>{AplicacaoText.title}</div>
                    <div className={'text-white text-3xl text-justify'}>
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