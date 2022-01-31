import Client from './api'
import key from './key.json'
require('dotenv').config()

const API_KEY = process.env.REACT_APP_API_KEY || '22gm6FmZQVtWQw52yKj08wLNnsPyxPtt'

export const getForecast5 =async(locationKey)=>{
    try {

        const location = locationKey || key.Dallas
        const res = await Client.get(`/forecasts/v1/daily/5day/${location}?apikey=${API_KEY}&details=true&metric=true`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getLocationKeyPS = async(PS)=>{
    try {
        const res = await Client.get(`/locations/v1/postalcodes/search?apikey=${API_KEY}&q=${PS}4&details=true`)
        return res.data[0]
    } catch (error) {
        console.log(error)
    }
}

export const getCurrentConditions = async(locationKey)=>{
    try {

        const location = locationKey || key.Dallas
        const res = await Client.get(`/currentconditions/v1/${location}?apikey=${API_KEY}&details=true`)
        return res.data
    } catch (error) {
        
    }
}