import Image from 'next/image';
import { DesenvolvimentoText } from '@/data/text/nossoProjeto';

const Desenvolvimento = () => {
    return (
        <section className={'bg-[url("/background_desenvolvimento.svg")] overflow-hidden w-full bg-no-repeat bg-cover flex'}>
            <div>
                <div>
                    {DesenvolvimentoText.title}
                </div>
                <div>
                    {DesenvolvimentoText.paragraph_one}<br/><br/>

                </div>
            </div>
            <div>
                <Image src="onca_desenvolvimento_nosso_projeto" alt={''}></Image>
            </div>
        </section>
    );
};

export default Desenvolvimento;