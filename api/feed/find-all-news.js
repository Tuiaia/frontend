let url = 'http://35.199.123.76/feed'

export default async function findAllNews(start_date, end_date) {
    try{
        if (start_date && end_date) {
            url = `${url}?startdate=${start_date}&enddate=${end_date}`
        }
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
        location.reload()
    }
}
