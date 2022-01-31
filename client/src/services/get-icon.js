import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherNight, TiWeatherPartlySunny, TiWeatherShower, TiWeatherStormy, TiWeatherSunny, TiWeatherWindy } from 'react-icons/ti'
import { GiThermometerCold, GiThermometerHot } from 'react-icons/gi'
import { FiCloudSnow } from 'react-icons/fi'


const Icon = ({n, current, isdaytime}) =>{
    // switch (n) {
    //     case n <= 2:
    //         return(<TiWeatherSunny/>)
    //     case n > 2  && n <= 5: 
    //         return(<TiWeatherPartlySunny/>)
    //     case n>4 && n<12:
    //         return(<TiWeatherCloudy/>)
    //     case n>=12 && n <= 14:
    //         return(<TiWeatherShower/>)
    //     case n>=15 && n <= 17:
    //         return(<TiWeatherStormy/>)   
    //     case n === 18:
    //         return(<TiWeatherDownpour/>)
    //     case n >= 19 && n <= 23:
    //         return(<FiCloudSnow/>)
    //     case( n >= 24 && n <= 29) || n === 31:
    //         return(<GiThermometerCold/>)
    //     case n === 30:
    //         return(<GiThermometerHot/>)
    //     case n === 32:
    //         return(<TiWeatherWindy/>)
    //     case n > 32:
    //         return(<TiWeatherNight/>)
    //     default:
    //         break;
    // }
    if(n <= 2){
        return(<TiWeatherSunny isdaytime={isdaytime} current={current} className='icon'/>)
    }
    if(n > 2  && n <= 5){
        return(<TiWeatherPartlySunny isdaytime={isdaytime} current={current} className='icon' />)
    }
    if(n>4 && n<12){
        return(<TiWeatherCloudy isdaytime={isdaytime} current={current} className='icon' />)
    }
    if(n>=12 && n <= 14){
        return(<TiWeatherShower isdaytime={isdaytime} current={current} className='icon' />)
    }
    if(n>=15 && n <= 17){
        return(<TiWeatherStormy isdaytime={isdaytime} current={current} className='icon' />)
    }
    if(n === 18){
        return(<TiWeatherDownpour isdaytime={isdaytime} current={current} className='icon' />)
    }
    if(n >= 19 && n <= 23){
        return(<FiCloudSnow isdaytime={isdaytime} current={current} className='icon' />)
    }
    if(( n >= 24 && n <= 29) || n === 31){
        return(<GiThermometerCold isdaytime={isdaytime} current={current} className='icon' />)
    }
    if( n === 30){
        return(<GiThermometerHot isdaytime={isdaytime} current={current} className='icon' />)
    }
    if( n === 32){
        return(<TiWeatherWindy isdaytime={isdaytime} current={current} className='icon' />)
    }
    if( n > 32){
        return(<TiWeatherNight isdaytime={isdaytime} current={current} className='icon' />)
    }
}

export default Icon