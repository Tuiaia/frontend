import Header from '@/components/Header'
import FeedDeNoticias from '@/pages/feed/FeedDeNoticias';

export default function Feed() {
    return (
        <>
            <Header>
                <title>Tuiaia</title>
                <meta name="description" content="A melhor IA para classificar sentimento de notícias" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Header>
            <main>
                <FeedDeNoticias />
            </main>
        </>
    )
}