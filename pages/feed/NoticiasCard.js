import Image from 'next/image';

const NoticiasCard = ({ noticia }) => {
    return (
        <div className={'relative bg-white rounded-3xl p-4 py-10 flex gap-10 mb-12'}>
            <div className={'ml-6 w-full'}>
                <div className={'text-primary text-3xl font-bold mb-6'}>Fazenda lança pacote com 13 medidas para estimular crédito e destravar PPPs</div>
                <div className={'text-2xl'}>
                    <span className={'text-secondary font-bold inline-block mr-4'}>InfoMoney</span>
                    <span>(20/04/2023)</span>
                    <Image className={'inline-block'} src={'share.svg'} alt={''} width={40} height={40} />
                </div>
            </div>
            <div>
                <div className={'flex justify-center items-center mr-4'}>
                    <Image src={'positive_icon.svg'} alt={''} width={100} height={100}/>
                </div>
            </div>
            <div className={'absolute bg-white rounded-full -left-6 top-16'}>
                <Image src={'/pantanal.png'} width={60} height={60}  alt={''}/>
            </div>
        </div>
    )
}



export default NoticiasCard
