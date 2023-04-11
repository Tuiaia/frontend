import Head from 'next/head'
import {useState} from 'react'
import { getNoticeClassification } from '@/api/Classify/ClassifyController'

export default function Home() {

  const [response, setResponse] = useState('')
  const [notice, setNotice] = useState('')
  const [noticeClassified, setNoticeClassified] = useState('')

  const classifyNews = async ()=> {
    if (notice) {
      const classification = await getNoticeClassification(notice)
      setNoticeClassified(notice)
      setResponse(classification)
    }
    document.getElementsByTagName('input')[0].value = ''
  }

  return (
      <>
        <Head>
          <title>Tuiaia</title>
          <meta name="description" content="A melhor IA para classificar sentimento de notícias" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>Tuiaia</h1>
          <label>Digite aqui o título da sua notícia: </label>
          <input type="text" placeholder="Digite aqui..." onChange={(e) => setNotice(e.target.value)}/>
          <button onClick={() => classifyNews()}>Classificar</button>
          {response?
              <p>O sentimento da sua notícia: {noticeClassified} <br/> É: {response}</p>
              : null
          }
        </main>
      </>
  )
}
