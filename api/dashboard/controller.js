import { getSymbolTimeSeries } from './find-cotations-by-name-service'

export async function findCotationsByName(name, start_date, end_date) {
    return await getSymbolTimeSeries(name, start_date, end_date)
}