const url = 'http://tuiaiabackend.g5csendagrgfgrek.brazilsouth.azurecontainer.io:15400/newsletter'

export default async function getNews() {
    try{
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        return await response.json()
    } catch (error) {
        alert('Ocorreu um erro ao classificar a notícia')
        console.log(error)
    }
}
