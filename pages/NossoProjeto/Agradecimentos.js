import AgradecimentosText from '@/data/text/nossoProjeto/AgradecimentosText';

const Agradecimentos = () => {
    return (
        <section className={'p-20 flex flex-col justify-center items-center'}>
            <div className={'font-bold text-6xl text-secondary mb-12'}>{AgradecimentosText.title}</div>
            <div className={'text-2xl max-w-screen-2xl text-primary text-justify'}>
                <span>{AgradecimentosText.paragraph_one}<br/><br/></span>
                <span>
                    {AgradecimentosText.paragraph_two}
                    <a href={'https://github.com'} className={'underline'} target={'_blank'}>GitHub</a>
                    {AgradecimentosText.paragraph_two_continuation}<br/><br/>
                </span>
                <span>{AgradecimentosText.paragraph_three}<br/></span>
                <span>{AgradecimentosText.paragraph_four}</span>
            </div>
        </section>
    )
}

export default Agradecimentos
