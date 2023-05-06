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
            <div className="w-3/5 ml-[-18%]">
                <Image src="arara-multilingual-classificador.svg" alt="Araras multilingual" width={1000} height={600} />
            </div>
            <div className="w-2/5 ml-[-15%]">
                <div className="text-secondary text-6xl font-bold mb-10 text-center">{MultilingualText.title}</div>
                <div className="text-white text-3xl">
                    {MultilingualText.paragraph_one}<br /><br />
                    {MultilingualText.paragraph_two}
                </div>
            </div>
            <div className="w-3/5 absolute right-[-18%]">
                <Image src="/bandeiras-multilingual-classificador.svg" alt="Bandeiras multilingual" width={1000} height={600} />
            </div>

        </section>
    )
}

export default Multilingual;
