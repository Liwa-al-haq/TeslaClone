import { useContext, useState } from "react";
import Header_Login from "../../components/Header_Login"
// import Radio from "../../components/Radio"
import './radio.scss'
import './order1.scss'
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Order1 = () => {
    const { currentUser,currentToken } = useContext(AuthContext)
    const navigate=useNavigate()
    const [selectedRadioBtn, setSelectedRadioBtn] = useState("white");
  const [carImage, setCarImage] = useState(
    "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSW,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0120-33320d20d202210200636"
  );
    const month = ["January","Feb","March","April","May","June","July","August","September","October","November","Dec"];
const month1 = ["January","Feb","March","April","May","June","July","August","September","October","November","December","January","Feb","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name1 = month[d.getMonth()+1];
    let name2 = month1[d.getMonth() + 3];
    const [en,setenAutoValue]=useState(false)
    let [changeText, setChangeText] = useState(true);
    let [changeStyle, setChangeStyle] = useState(true);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const handleChange = (e) => {
        setenAutoValue(!en)
        setChangeText(!changeText);
        setChangeStyle(!changeStyle)
        
    }
    const isRadioSelected = (value) => {
        return selectedRadioBtn === value;
    }
    const handleRadioClick = (e) => {
        const { value } = e.target;
        setSelectedRadioBtn(value);
      
        const carImageMap = {
          white: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSW,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0120-33320d20d202210200636",
          grey: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0120-33320d20d202210200636",
          blue: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSB,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=1300,500,300,300&version=v0120-33320d20d202210200636",
          black: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PBSB,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0120-33320d20d202210200636",
          red: "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PR01,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=1300,500,300,300&version=v0120-33320d20d202210200636",
        };
      
        setCarImage(carImageMap[value]);
      };
      

    const handleOrder = async() => {
        const order = {
            status: 'order placed',
            model: 'Model S ',
            en_auto:en?'true':'false',
            paint:selectedRadioBtn
        }
        try {
            const res =await  axios.put("http://localhost:5000/users/update/order/" + currentUser.email, {
                headers: {
                    authorization: 'Bearer ' + currentToken
                },
                order:order
            })
            console.log(res)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }



    return (
        <div className="order">
            <Header_Login/>
            <div id='order_wrapper'>
                <div id='img_c_wrapper'>
                    <div><img className="c_img" id="car" alt='' src={carImage} /></div>
                    <div style={{height:'25px',width:'600px'}}>$49,490 Vehicle Price
|$42,890 After potential savings</div>
                </div>
                <div id='order_sum'>
                    <h1 id='model_name' style={{paddingBottom:'10px'}}>Model S</h1>
                    <div id='date'></div>
                <div id='c_con'>
                <p className='p1'>Model 3 Rear-Wheel Drive</p>
                <p className='p1'>Pearl White Paint</p>
                <p className='p1'>19’’ Sport Wheels</p>
                <p className='p1'>Black and White Partial Premium Interior</p>
                <p className='p1'>Autopilot</p>
                <p className='p1'><u>30-Day Premium Connectivity Trial</u></p>
                        <br></br>
                    </div>
                    <div id='stats'>
                        <div id='sp_head' ><h2 className='h22'>267 mi </h2>
                
               <h2 className='h22'>140 mph </h2>
                <h2 className='h22'>5.8sec </h2>
                </div>
                        <div id='sp'>
                            <p className="sp_des">Range (est.)</p>
                            <p className="sp_des">Top Speed</p>
                            <p className="sp_des">0-60mph</p>
                </div>
                    </div>
                    <span className="f_con" id='p_f' style={{paddingBottom:'10px'}}>Paint</span>
                    <div style={{display:'flex',justifyContent:'center',marginBottom:'40px'}}><div className='rad_wrapper'>
          <div className='st_wrapper'><input type="radio" name='paint' value={'white'} onChange={handleRadioClick} checked={isRadioSelected('white')}/>
          <label className='rad_label'><img  id ="white" src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_White.png?version=v0121-a180d830d202211100724"/></label></div>
          <div className='st_wrapper'><input type="radio" name='paint' value={'grey'} onChange={ handleRadioClick}  checked={isRadioSelected('grey')}  
          />
          <label className='rad_label'> <img  id ="grey"src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_MidnightSilver.png?version=v0121-a180d830d202211100724"/></label></div>
          <div className='st_wrapper'><input type="radio" name='paint' value={'blue'} onChange={ handleRadioClick}  checked={isRadioSelected('blue')} />
          <label className='rad_label'><img  id ="blue"src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Blue.png?version=v0121-a180d830d202211100724"/></label></div>
          <div className='st_wrapper'><input type="radio" name='paint' value={'black'} onChange={ handleRadioClick}  checked={isRadioSelected('black')}/>
          <label className='rad_label'><img  id ="black"src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Black.png?version=v0121-a180d830d202211100724"/></label></div>
          <div className='st_wrapper'><input type="radio" name='paint' value={'red'} onChange={ handleRadioClick}  checked={isRadioSelected('red')} />
              <label className='rad_label'><img  id="red" src="https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Red.png?version=v0121-a180d830d202211100724" /></label></div>
            
       
        
    </div></div>
                <div id='en_auto'>
                        <h1
                            className='f_con' style={{paddingBottom:'10px'}}>Enhanced Autopilot</h1>
                        
            <div>
                <p className="f_con">Navigate on Autopilot</p>
                <p className="f_con">Auto Lane Change</p>
                <p className="f_con">Autopark</p>
                <p className="f_con">Summon</p>
                <p className="f_con">Smart Summon</p>
                        </div>
                        <p className='p12'>-------------------------------------------------------------</p>
                        <p className='f_con' style={{ fontSize: '16px', display:'flex',justifyContent:'right'}}>$6000</p>
                        <br></br>
            
                        <div style={{display:'flex',justifyContent:'center',padding:'0'}}><button className='but11' id="add1" onClick={() => handleChange()} style={changeStyle ? { backgroundColor: "rgb(74, 124, 253)" } : { backgroundColor: "rgb(187, 187, 187)",color:'black' }}> {changeText ? "Add" : "Remove"}</button> 
            <button className='but11' style={{marginLeft:"20px",paddingLeft:"10px",paddingRight:"10px",paddingTop:"2px",paddingBottom:"2px"}}>Feature Details</button></div><br></br>
            <br></br>
                    </div>
                    <div id='mon_sum'>
                        <h1>Order Your Model 3 </h1>
            <br></br>
            <p className='p1' >Est. Delivery: {name1} 2022 - {name2} 2023</p>
            <br></br>
            <p className='p12'>-------------------------------------------------------------</p>
            <div className="tb_wr"><p className='p1'>Vehicle Price</p><p>$46,990</p></div>
            <div className="tb_wr"><p className='p1'>Destination fee</p><p>$1,200</p></div>
            <div className="tb_wr"><p className='p1'>Order fee</p><p>$250</p></div>
            <br></br>
            <p className='p12'>-------------------------------------------------------------</p>
            <div className="tb_wr"><p className='p1' style={{textDecoration:"bold"}}>Your Model 3</p><p>$48,440</p></div>
            <p className='p1'>Excluding taxes & other fees</p>
            <br></br>
            <div className="tb_wr"><h4>Due Today</h4><h4>$250</h4></div>
            <p className='p1'>Non-refundable Order Free</p>
            <br></br><br></br>
                </div>
            <div id='order_wr'><button id='order_sub' onClick={handleOrder}>Place Order</button></div>
                </div>

            </div>
        </div>
    )
}

export default Order1