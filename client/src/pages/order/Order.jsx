import React from 'react'
// import './order.scss'
import Radio from '../../components/Radio'
// import Teslalogo from '../assets/teslaLogoSmall.svg'
import { useState } from "react";
import Header_Login from '../../components/Header_Login';
// import images from "../../components/Images";
// import ImageSlider from "../../components/ImageSlider";

const month = ["January","Feb","March","April","May","June","July","August","September","October","November","Dec"];
const month1 = ["January","Feb","March","April","May","June","July","August","September","October","November","December","January","Feb","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name1 = month[d.getMonth()+1];
let name2=month1[d.getMonth()+3];

const inputHandler = (e) => {
    const { value, maxLength } = e.target;
    if (String(value).length >= maxLength) {
      e.preventDefault();
      return;
    }
  };

let add=true;
// function handleChange()
// {
//     if(add===true)
//      add=false;
//     else
//     add=true;
// }



const Order = () => {
    let [changeText, setChangeText] = useState(true);
    const [paint, setPaint] = useState('')
    const [enAuto, setEnAuto] = useState(false)
    const [fullAuto, setFullAuto] = useState(false)

    const handleChange = () => {
        return setChangeText(!changeText);
    };
    let [changeText1, setChangeText1] = useState(true);
        const handleChange1 = () => {
      return setChangeText1(!changeText1);
    };
    const handlePaintClick = (e) => {
        setPaint(e.value)
        console.log(e)
        e.style={border: "blue solid",
        borderRadius: "80px",
        height: "55px"}
        console.log(e)
    }
    return(
        <div className='order'>
            <Header_Login/>
            <img className="image1" id= "image1" alt ='' src="https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PPSW,$W41B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&version=v0120-33320d20d202210200636" style={{height:"400px",width:"1100px",position: "fixed",marginLeft:"50px"}}/>
            <svg style={{marginLeft:"30px",border:"rgb(213,212,213) solid",borderRadius:"30px",height:"30px",width:"30px",padding:"3px",paddingLeft:"10px",paddingTop:"10px",paddingRight:"4px",paddingBottom:"4px",position:"fixed",marginTop:"500px"}} className="chat" id="chat" xmlns="http://www.w3.org/2000/svg" class="tw-chat--tds-icon tw-chat--avaya-chat__bubble_icon"><path d="M19.5 4h-15A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H7v2.07a.928.928 0 0 0 1.507.725l3.22-2.576A1 1 0 0 1 12.35 18h7.15a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 19.5 4zm1 11.5a1 1 0 0 1-1 1h-7.15a2.5 2.5 0 0 0-1.56.548L8.5 18.879V17a.5.5 0 0 0-.5-.5H4.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h15c.551 0 1 .449 1 1v9zM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
            <div>
            <h1 className='model1'>Your Model 3</h1>
            <p className='p1'>Model 3 Rear-Wheel Drive</p>
                <p className='p1'>Pearl White Paint</p>
                <p className='p1'>19’’ Sport Wheels</p>
                <p className='p1'>Black and White Partial Premium Interior</p>
                <p className='p1'>Autopilot</p>
                <p className='p1'><u>30-Day Premium Connectivity Trial</u></p>
                <br></br>
                <h2 className='h2'>267 mi &nbsp;&nbsp;&nbsp;140mph &nbsp;&nbsp;5.8sec</h2>
                <p className='p1'>Range (est.) &nbsp;&nbsp;&nbsp;&nbsp;Top Speed &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;0-60mph</p>
            <br></br>
            <h3>Paint</h3>
            <br></br>
                <div className='paint1'>
                    <div id='img_wrapper'>
                        <Radio/>    
                    </div>
            </div>
            </div>
            <h2 className='fixed1' style={{marginLeft:"410px",fontSize:"17px",marginTop:"150px",color:"rgb(56,60,64)",position:"fixed"}}>$49,490 Vehicle Price</h2>
            <p className='fixed21' style={{color:"rgb(56,60,64)",marginLeft:"600px",marginTop:"150px",position:"fixed"}}>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$42,890 After potential savings</p>
            <br></br>
            <h2 className='h2'>Enhanced Autopilot</h2>
            <p className='p1' style={{marginLeft:"1290px",fontWeight:"bold",color:"rgb(56,60,64)"}}>$6000</p>
            <ul>
                <li>Navigate on Autopilot</li>
                <li>Auto Lane Change</li>
                <li>Autopark</li>
                <li>Summon</li>
                <li>Smart Summon</li>
            </ul>
            <br></br>
            
            <button className='add11' id="add1" onClick={() => handleChange()}> {changeText ? "Add" : "Remove"}</button> 
            <button className='feature11' style={{marginLeft:"20px",paddingLeft:"10px",paddingRight:"10px",paddingTop:"2px",paddingBottom:"2px"}}>Feature Details</button><br></br>
            <br></br>
            <h2 className='h2'>Full Self-Driving Capability</h2>
            <p className='p1' style={{marginLeft:"1310px",fontWeight:"bold",color:"rgb(56,60,64)"}}>$15000</p>
            <ul>
                <li>Navigate on Autopilot</li>
                <li>Auto Lane Change</li>
            </ul>
            <br></br>
            <button className='add21' onClick={() => handleChange1()}>{changeText1 ? "Add" : "Remove"}</button>
            <button className='feature21' style={{marginLeft:"20px",paddingLeft:"10px",paddingRight:"10px",paddingTop:"2px",paddingBottom:"2px"}}>Feature Details</button>
            <br></br><br></br>
            <h1>Order Your Model 3 </h1>
            <br></br>
            <p className='p1' style={{fontWeight:"bold",marginLeft:"1210px"}}>Est. Delivery: {name1} 2022 - {name2} 2023</p>
            <br></br>
            <p className='p1'>---------------------------------------</p>
            <p className='p1'>Vehicle Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$46,990</p>
            <p className='p1'>Destination fee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$1,200</p>
            <p className='p1'>Order fee &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$250</p>
            <br></br>
            <p className='p1'>----------------------------------------</p>
            <p className='p1' style={{textDecoration:"bold"}}>Your Model 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$48,440</p>
            <p className='p1'>Excluding taxes & other fees</p>
            <br></br>
            <h4 style={{marginLeft:"1200px",fontSize:"18px",color:"#383C40"}}>Due Today&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$250</h4>
            <p className='p1'>Non-refundable Order Free</p>
            <br></br><br></br>
            <h2 className='h2'>Enter Account Details</h2>
            <br></br>
            <form action="" method="post" id="cusCreate" autocomplete="off">
            <label for="fname">First Name</label><br></br>
            <input type="text" className='fname1' name='fname' required></input><br></br><br></br>
            <label for="fname">Last Name</label><br></br>
            <input type="text" className='lname1' required></input><br></br>
            <br></br>
            <label for="email">Email Address</label><br></br>
            <input type="email" id="email" name="email" required></input><br></br><br></br>
            <p className='p1' style={{fontSize:"13px"}}>We won't spam you in any way</p><br></br>
            <label for="phone">Mobile Phone Number</label><br></br>
             <input
                type="number"
                maxlength="10"
                onKeyPress={inputHandler}
                class="no-arrow"
                id="phone"
                name='phone'
                required
                />
                <br></br>
                <p className='p1' style={{fontSize:"13px"}}>By entering my account details above, I agree to be contacted about Tesla products, including through automated calls or texts. This is not a condition of purchase.</p>
                <br></br><br></br>

                <h1>Card</h1>
                <label for="fname">Name on Card</label><br></br>
                <input type="text" className='fname1' name='fname' required></input><br></br><br></br>
                <label for="phone">Card Number</label><br></br>
                 <input
                    type="number"
                    maxlength="16"
                    onKeyPress={inputHandler}
                    class="no-arrow"
                    id="phone"
                    name='phone'
                    required
                    />
                    <br></br><br></br>
                <label for="lang">Expiration Month</label><br></br>
      <select name="expmonth" id="expmonth"><br></br>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <br></br>
      <br></br>
                <label for="expyear">Expiration Year</label><br></br>
      <select name="expyear" id="expyear"><br></br>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
        <option value="2031">2031</option>
        <option value="2032">2032</option>
        <option value="2033">2033</option>
        </select><br></br><br></br>
                <label for="cvv">CVV</label><br></br>
                 <input
                    type="number"
                    maxlength="3"
                    onKeyPress={inputHandler}
                    class="no-arrow"
                    id="cvv"
                    name='cvv'
                    required
                    />
        <br></br><br></br>

        <label for="cvv">Billing Zip Code</label><br></br>
         <input
            type="number"
            maxlength="10"
            onKeyPress={inputHandler}
            class="no-arrow"
            id="cvv"
            name='cvv'
            required
            />
<br></br><br></br>
        <h3 style={{marginLeft:"1200px"}}>Due Today&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$250</h3>
        <p className='p1'>Non-refundable Order Fee</p>
        <p className='p1'>By placing this order, I agree to the Model 3 Order Agreement, Terms of Use, and Privacy Notice.View additional information</p>
            <a style={{color:"blue" ,marginLeft: "1200px"}}>View additional information</a>
            <br></br><br></br>
            <button type="submit" className='submit1'>Place Order</button>
            <br></br>
            </form>
            <svg style={{marginLeft:"30px",border:"black solid",borderRadius:"30px",height:"30px",width:"30px",padding:"3px",paddingLeft:"10px",paddingTop:"10px",paddingRight:"4px",paddingBottom:"4px",position:"fixed"}} className="chat1" xmlns="http://www.w3.org/2000/svg" class="tw-chat--tds-icon tw-chat--avaya-chat__bubble_icon"><path d="M19.5 4h-15A2.5 2.5 0 0 0 2 6.5v9A2.5 2.5 0 0 0 4.5 18H7v2.07a.928.928 0 0 0 1.507.725l3.22-2.576A1 1 0 0 1 12.35 18h7.15a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 19.5 4zm1 11.5a1 1 0 0 1-1 1h-7.15a2.5 2.5 0 0 0-1.56.548L8.5 18.879V17a.5.5 0 0 0-.5-.5H4.5a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h15c.551 0 1 .449 1 1v9zM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
            <br></br>
        </div>
    )
}



export default Order