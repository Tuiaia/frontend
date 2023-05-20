import FlipNumbers from 'react-flip-numbers';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import IntroducaoText from '@/data/text/dashboard/IntroducaoText';

const Introducao = ({ news }) => {

    return <section className={'bg-white text-primary flex flex-col items-center w-full p-10'}>
        <div className={'text-6xl mt-12 font-bold items-center text-center'}>
            <div>
                {IntroducaoText.title}
            </div>
            <div className={'text-3xl text-secondary mt-12 font-bold'}>
                {IntroducaoText.subtitle}
            </div>
        </div>
        <div className={'text-5xl flex items-center justify-center flex-col mt-12'}>
            <div className={'my-10 mt-20'}>{IntroducaoText.news_classified}</div>
            <div id={'flipBox'} className={'mb-10'}>
                <FlipNumbers height={70} width={70} color='white' background='#043475' numberStyle={{ fontSize: 40 }} play numbers={(news? news.length : 0) + ''} />
            </div>
        </div>
    </section>
}

export default Introducao