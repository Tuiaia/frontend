const url = 'http://127.0.0.1:8000/'

export default async function classifyNotice(notice) {
    try{
        const response = await fetch(url, {
            body: JSON.stringify({"notice": notice}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        return await response.json()
    } catch (error) {
        alert('Ocorreu um erro ao classificar a notícia')
        console.log(error)
    }
}
