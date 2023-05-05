import { MultilingualText } from '@/data/text/classificador';
import Image from "next/image";

const Multilingual = () => {
    return (
        <section
            className="section-multilingual w-full flex items-center relative"
            style={{
                backgroundImage: 'url("/multilingual-classificador.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '850px',
            }}
        >
            <div className="w-2/5 ml-[-12%]">
                <Image src="arara-multilingual-classificador.svg" alt="Araras multilingual" width={850} height={600} />
            </div>
            <div className="w-2/5 text-center">
                <div className="text-secondary text-6xl font-bold mb-10">{MultilingualText.title}</div>
                <div className="text-white text-3xl text-justify">
                    {MultilingualText.paragraph_one}<br /><br />
                    {MultilingualText.paragraph_two}
                </div>
            </div>
            <div className="w-2/5 absolute right-[-5%]">
                <Image src="/bandeiras-multilingual-classificador.svg" alt="Bandeiras multilingual" width={850} height={600} />
            </div>

        </section>
    )
}

export default Multilingual;
