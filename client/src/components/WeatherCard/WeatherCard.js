import React, { useEffect, useState } from 'react'
import './WeatherCard.css'
import days from './days.json'
import Icon from '../../services/get-icon'


const WeatherCard = ({i, forecast, fah})=>{

    const { Temperature, Day } = forecast

    const [day, setDay] = useState('')
    const [celDegrees, setCelDegrees] = useState({})
    const [fahDegrees, setFahDegrees] = useState({})


    const getDay = ()=>{
        const date = new Date()

        let today = date.getDay()
        let r = 0

        while(r !== i){
            r++
            today++
            if(today > 6){
                today = 0
            }
        }
        if(r === i){
            setDay(days[today])
        }
    }

    const getTemperature = () => {
        setCelDegrees({min:Math.floor(Temperature.Minimum.Value), max: Math.ceil(Temperature.Maximum.Value)})
        const maxFah = Math.ceil((Temperature.Maximum.Value*1.8)+32)
        const minFah = Math.floor((Temperature.Minimum.Value*1.8)+32)
        setFahDegrees({min:minFah, max:maxFah})
    }

    const populate =()=>{
        getDay()
        getTemperature()
    }

    useEffect(()=>{
        populate()
    },[forecast])

    return(
        <section className='bg'>
            <h4>{day.day}</h4>
                <Icon n={Day.Icon} />
            
            {fah ? <h4>{fahDegrees.min}° {fahDegrees.max}°</h4> : <h4>{celDegrees.min}° {celDegrees.max}°</h4>}
        </section>
    )
}

export default WeatherCard