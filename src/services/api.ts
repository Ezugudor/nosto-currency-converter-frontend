import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1'

export interface ApiResponse<T> {
  timestamp: string
  status: number
  data: T
}

export interface ICurrency {
  code: string
  name: string
}

export const convertCurrency = (sourceCurrency: string, targetCurrency: string, amount: number) => {
  return axios.get<ApiResponse<number>>(
    `${API_URL}/convert/${sourceCurrency}/${targetCurrency}?amount=${amount}`
  )
}

export const getSupportedCurrencies = () => {
  return axios.get<ApiResponse<ICurrency[]>>(`${API_URL}/currencies`)
}
