import ClassifyService from './ClassifyService'

export async function getNoticeClassification(notice){
    return await ClassifyService(notice)
}
