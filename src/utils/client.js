import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://q11.jvmhost.net',
  timeout: 1000
})
