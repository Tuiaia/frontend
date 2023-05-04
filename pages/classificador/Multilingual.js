import { MultilingualText } from '@/data/text/classificador';

const Multilingual = () => {
    return (
        <section className={'w-full bg-[url("../public/multilingual-classificador.svg")] bg-no-repeat bg-cover flex justify-center items-center'}>
            <div className={'flex p-20'}>
                <div className={'w-full bg-[url("../public/arara-multilingual-classificador.svg")] bg-no-repeat'}></div>
                <div className={'flex-1 max-w-5xl h-full p-10 rounded-3xl pb-31'}>
                    <div className={'text-secondary text-5xl font-bold mb-10'}>{MultilingualText.title}</div>
                    <div className={'text-white text-2xl text-justify'}>
                        {MultilingualText.paragraph_one}<br/><br/>
                        {MultilingualText.paragraph_two}
                    </div>
                </div>
                <div className={'w-full bg-[url("../public/bandeiras-multilingual-classificador.svg")] bg-no-repeat justify-end'}></div>
            </div>
        </section>
    )
}

export default Multilingual