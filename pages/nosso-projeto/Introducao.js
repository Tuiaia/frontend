import Image from 'next/image';
import { IntroducaoText } from '@/data/text/nossoProjeto';

const Introducao = () => {
    return (
        <section className={'bg-[url("/tuiaia_background.svg")] overflow-hidden w-full bg-no-repeat bg-cover flex'}>
            <div className={'flex text-center justify-center items-center h-full m-auto'}>
                <div className={'text-center'}>
                    <div>
                        <Image className={'mx-auto'} src="tuiaia.svg" alt={''} width={700} height={700} />
                    </div>
                    <div className={'text-p-bold text-3xl my-4'}>
                        {IntroducaoText.paragraph_one}<br/><br/>
                    </div>
                    <div className={'text-p-bold text-3xl my-4'}>
                        {IntroducaoText.paragraph_two}<br/><br/>
                    </div>
                    <div className={'text-third text-5xl my-4'}>
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