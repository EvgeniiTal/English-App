import { letterGameEndpoint } from "../utils/api"
import { client } from "../utils/client"

export const requestWordsLetterGame = async (params) => {
  const { data } = await client.get(letterGameEndpoint, { params })
  return data
}
