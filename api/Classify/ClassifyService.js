const url = 'http://tuiaiabackend.g5csendagrgfgrek.brazilsouth.azurecontainer.io:15400/newsletter'

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
