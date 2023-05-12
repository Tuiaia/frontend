import findAllNews from '@/api/feed/find-all-news'

export async function getAllNewsClassifieds(){
    return await findAllNews()
}