import Axios from 'axios'

const Client = Axios.create({baseURL:'http://dataservice.accuweather.com'})

export default Client