import axios from 'axios';

export const aqiClient = axios.create({
  baseURL: 'http://api.airvisual.com/v2',
  params: {
    key: "680f6a59-7dfd-4908-aa70-9f8cda98cb13"
  }
})