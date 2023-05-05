import Head from 'next/head'
import Header from '@/components/Header'
import NossoProjeto from '@/pages/nosso-projeto';
import Classificador from '@/pages/classificador';

export default function Home() {

  return (
      <>
        <Head>
          <title>Tuiaia</title>
          <meta name="description" content="A melhor IA para classificar sentimento de notícias" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo-tuiaia.ico" />
        </Head>
        <main>
          <Header />
          <Classificador />
          <NossoProjeto />
        </main>
      </>
  )
}
