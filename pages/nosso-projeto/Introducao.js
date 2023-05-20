import Image from 'next/image';
import { IntroducaoText } from '@/data/text/nossoProjeto';

const Introducao = () => {
    return (
        <section className={'bg-white overflow-hidden w-full flex h-[700px]'}>
            <div className={'flex flex-col text-center justify-center m-auto'}>
                <div className={'mb-5 w-[95vw]'}>
                    <Image className={'mx-auto -mt-36'} src={'tuiaia.svg'} alt={''} width={650} height={650} />
                    <div className={'text-primary text-2xl -mt-28'}>
                        {IntroducaoText.paragraph_one}<br/><br/>
                    </div>
                </div>
                <div className={'text-center'}>
                    <div className={'text-primary text-2xl my-2 -mt-4 -mb-4'}>
                        {IntroducaoText.paragraph_two}<br/><br/>
                    </div>
                    <div className={'text-third font-bold text-4xl my-2 mb-6'}>
                        {IntroducaoText.paragraph_three}
                        <span className={'text-secondary'}>
                            {IntroducaoText.paragraph_three_part_two}
                        </span>
                        {IntroducaoText.paragraph_three_part_three}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introducao;