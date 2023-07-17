
import { useState } from 'react'
// import './radio.scss'
const Radio = () => {
    
    const [paint, setPaintValue] = useState('')
    const handleClick = (e) => {
        setPaintValue(e.value)
    }
  return (
      <div className='rad_wrapper'>
          <div className='st_wrapper'><input type="radio" name='paint' checked='true' value={'white'} onClick={handleClick }/>
          <label className='rad_label'><img onclick=" " id ="white" src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_White.png?version=v0121-a180d830d202211100724"/></label></div>
          <div className='st_wrapper'><input type="radio" name='paint' value={'grey'} onClick={handleClick }/>
          <label className='rad_label'> <img onClick=" " id ="grey"src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_MidnightSilver.png?version=v0121-a180d830d202211100724"/></label></div>
          <div className='st_wrapper'><input type="radio" name='paint' value={'blue'} onClick={handleClick }/>
          <label className='rad_label'><img onClick=" " id ="blue"src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Blue.png?version=v0121-a180d830d202211100724"/></label></div>
          <div className='st_wrapper'><input type="radio" name='paint' value={'black'} onClick={handleClick }/>
          <label className='rad_label'><img  id ="black"src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Black.png?version=v0121-a180d830d202211100724"/></label></div>
          <div className='st_wrapper'><input type="radio" name='paint' value={'red'} onClick={handleClick } />
              <label className='rad_label'><img onClick=" " id="red" src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Red.png?version=v0121-a180d830d202211100724" /></label></div>
            
       
        
    </div>
  )
}
export default Radio
