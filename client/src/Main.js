import React, { useEffect, useState } from 'react'
import { getForecast5, getCurrentConditions, getLocationKeyPS } from './services/service'
import WeatherCard from './components/WeatherCard/WeatherCard'
import Icon from './services/get-icon'
import { Form } from 'react-bootstrap'
import { MdLocationOn } from 'react-icons/md'
import resource from './resource.json'
import PopMenu from './components/PopMenu'

const Main =()=>{

    const [fah, setShowFah] = useState(true)
    const [weather, setWeather] = useState(null)
    const [currentCon, setCurrentCon] = useState({})
    const [location, setLocation] = useState('Dallas, Tx')
    const [date, setDate] = useState('')

    const populate = async()=>{
        const res = await getForecast5()
        const current = await getCurrentConditions()
        setCurrentCon(current[0])
        setWeather(res)

        const base = new Date()
        const month = base.getMonth()
        const day = base.getDate()
        const year = base.getFullYear()
        const wkDay = base.getDay()

        let a = resource.Weekdays[wkDay]
        let b = resource.Months[month]

        setDate(`${a}, ${b} ${day}, ${year}`)

    }

    const changeCity=async(zip)=>{
        try {
            const code = await getLocationKeyPS(zip)
            const forec = await getForecast5(code.Details.CanonicalLocationKey)
            const current = await getCurrentConditions(code.Details.CanonicalLocationKey)
    
            setCurrentCon(current[0])
            setWeather(forec)
            setLocation(code.Details.DMA.EnglishName)
        } catch (error) {
            console.log(error)
        }

       
    }


    useEffect(()=>{
        populate()
    },[])



    return (
        <main isdaytime={currentCon.IsDayTime ? 'true' : 'false'} id='root'>
            <section className='city' >
                <div className='conditions'>
                    {fah ? <p isdaytime={currentCon.IsDayTime ? 'true' : 'false'}  className='temp'>{currentCon?.Temperature?.Imperial?.Value}°</p> : <p isdaytime={currentCon.IsDayTime ? 'true' : 'false'}  className='temp'>{currentCon?.Temperature?.Metric?.Value}°</p>}
                    {currentCon?.WeatherIcon ? <Icon isdaytime={currentCon.IsDayTime ? 'true' : 'false'} n={currentCon?.WeatherIcon} current='t' /> : <></>}
                    <section className='details'>
                        <p isdaytime={currentCon.IsDayTime ? 'true' : 'false'}  className='txt'>{currentCon?.WeatherText}</p>
                        {fah ? <p isdaytime={currentCon.IsDayTime ? 'true' : 'false'}  className='txt'>{currentCon?.WindGust?.Speed?.Imperial?.Value} mph</p> : <p isdaytime={currentCon.IsDayTime ? 'true' : 'false'}  className='txt'>{currentCon?.WindGust?.Speed?.Metric?.Value} kmph</p>}
                    </section>
                </div>
                <div>
                    <p isdaytime={currentCon.IsDayTime ? 'true' : 'false'}  className='txt'><MdLocationOn/> {location} <PopMenu changeCity={changeCity} /> </p> 
                    <p isdaytime={currentCon.IsDayTime ? 'true' : 'false'}  className='txt'>{date}</p>
                </div>
                <Form.Check onChange={()=>{setShowFah(!fah)}} id='switch' type="switch" />
            </section>
            <div className='cards'>
                {weather?.DailyForecasts?.map((el, i)=><WeatherCard  key={i} forecast={el} i={i} fah={fah} />)}
            </div>
        </main>
    )
}
export default Main

//, backgroundImage:'url(https://lun-us.icons8.com/a/cKm3e2hxXUW0tEY-0hbCnw/X0-dgvhhUkugC65JQtNk1g/Dallas.png)', backgroundRepeat:'no-repeat'