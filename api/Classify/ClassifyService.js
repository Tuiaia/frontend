const url = 'https://e5f7-2804-14c-7582-6577-9098-daf-d68a-d48a.ngrok-free.app/'

export default async function classifyNews(news) {
    try{
        const response = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({news: news})
        })
        return await response.json();
    } catch (error) {
        alert('Ocorreu um erro ao classificar a notícia')
        console.log(error)
    }
}
