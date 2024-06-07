import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://q11.jvmhost.net/english',
  timeout: 1000
})
