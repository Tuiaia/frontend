import FlipNumbers from 'react-flip-numbers';

const Introducao = ({ newsLength }) => {
    return <section className={'bg-white text-primary flex flex-col items-center w-full p-10'}>
        <div className={'text-7xl font-bold'}>
            Dashboard
        </div>
        <div className={'text-5xl flex items-center justify-center flex-col'}>
            <div className={'my-10'}>Notícias classificadas</div>
            <div id={'flipBox'} className={'mb-10'}>
                <FlipNumbers height={100} width={100} color='white' background='#043475' numberStyle={{ fontSize: 50 }} play numbers={newsLength + ''} />
            </div>
        </div>
    </section>
}

export default Introducao