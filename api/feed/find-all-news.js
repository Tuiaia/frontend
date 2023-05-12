const url = 'http://35.199.123.76/feed'

export default async function findAllNews() {
    try{
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        
        const json = await response.json()
        
        if (json.detail) {
            throw new Error(json.detail)
        } else {
            return json
        }
    } catch (error) {
        alert('Ocorreu um erro ao buscar as notícias')
        console.log(error)
    }
}
