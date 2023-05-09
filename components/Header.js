import Image from 'next/image'
import Link from 'next/link'


const itensHeader = [
    {
        title: 'Classificador',
        route: '/classificador'
    },
    {
        title: 'Feed',
        route: '/feed'
    },
    {
        title: 'Dashboard',
        route: '/dashboard'
    },
    {
        title: 'Nosso projeto',
        route: '/nosso-projeto'
    },
]

const Header = () => {

    return (
        <header className={'bg-primary w-full flex items-center justify-center'}>
            <nav>
                <ul className={'flex justify-between items-center gap-8 h-fit'}>
                    <li className={'mr-6'}>
                        <Link href={'/'}>
                            <Image src={'/logo.svg'} alt={'Logo Tuiaia'} width={150} height={120} />
                        </Link>
                    </li>
                    {itensHeader?.map((item, index) => {
                        return (
                            <li key={index} className={'flex justify-center items-center hover:bg-p-hover'}>
                                <Link href={item.route} className={'text-white text-base font-bold p-8'}>
                                    {item.title}
                                </Link>
                            </li>
                            )
                        })
                    }
                    <li>
                        <a href={'https://pantanal.dev'} target={'_blank'}>
                            <Image src={'/pantanal.png'} alt={'pantanal dev'} width={100} height={160} />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
