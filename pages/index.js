import Header from '@/components/Header'
import NossoTime from '@/pages/NossoProjeto/NossoTime';
import NossoMentor from '@/pages/NossoProjeto/NossoMentor';
import Agradecimentos from '@/pages/NossoProjeto/Agradecimentos';

export default function Home() {

  return (
      <>
        <Header>
          <title>Tuiaia</title>
          <meta name="description" content="A melhor IA para classificar sentimento de notícias" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Header>
        <main>
          <Header/>
          <NossoTime />
          <NossoMentor />
          <Agradecimentos />
        </main>
      </>
  )
}
