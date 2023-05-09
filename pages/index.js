import Header from '@/components/Header'
import NossoTime from '@/pages/nosso-projeto/NossoTime';
import NossoMentor from '@/pages/nosso-projeto/NossoMentor';
import Agradecimentos from '@/pages/nosso-projeto/Agradecimentos';

export default function Home() {

  return (
      <>
        <Header>
          <title>Tuiaia</title>
          <meta name="description" content="A melhor IA para classificar sentimento de notícias" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        </Header>
        <main>
          <NossoTime />
          <NossoMentor />
          <Agradecimentos />
        </main>
      </>
  )
}
