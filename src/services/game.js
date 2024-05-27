import { allWordsEndpoint } from '../utils/api'
import { client } from '../utils/client'

export const requestAllWords = async (params) => {
  const { data } = await client.get(allWordsEndpoint, { params })
  return data
}
