
/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react'
import slider1 from './slider1.png';
import slider2 from './slider2.png';
import slider3 from './slider3.png';
import add from './add.png';

import './Slider.css'
/////////////////////////////////////////////////
console.log("bcount") 
let count = 0;
let Slider =()=>{
    console.log("count") 
    console.log(count)
     
    let slider_arr = [slider1,slider2,slider3];
     
    let countUp =()=>{
        count===slider_arr.length-1?count=0:count++;  
        console.log(count) 
    }
    let countDown =()=>{
        // count===0?count=slider_arr.length-1:count--;  
        // console.log(count) 
    }
    return (
        <div className='sliderIn'>
              { 
    //   <marquee scrollamount="30" behaviour="slide">
           <img src={slider_arr[count]}/>
              }
           {/* <img src={slider_arr[1]}/><img src={slider_arr[2]}/></marquee> */}
       
        
        {/* <button className='nextImg' onClick={countUp()}>&#8680;</button>
        <button className='preveiousImg' onClick={countDown()}>&#8678;</button> */}
        <div className='add_clock'>
        <img id='add'src={add}/>
        {/* <button>&#10162;</button> */}
        </div>
    </div>
)


//   // let {city_flag,sidebar_flag} = this.state;
//   render() {
//     let slider_arr = [slider1,slider2,slider3];
//     let {i} =this.state;
//     let count =0
//     return (
//         <div className='sliderIn'>
//         <button className='nextImg' onClick={count===slider_arr.length-1?count=0:count++}>next</button>
//         <button className='preveiousImg' onClick={this.sliderDown()}>preveious</button>
//         {/* <img src={slider_arr[i]}/> */}
//         {  <img src={slider_arr[count]}/>
//             //setInterval(()=>{slider_arr.map(e=>{<img src={slider_arr[i]}/>})},1000)
//             //setInterval(()=>i++,1000)
//             // for(i=0;i<slider_arr.length;i++){
//             // }
//         }
//      {/* <img src={slider1}/>
//      <img src={slider2}/>
//      <img src={slider3}/> */
//      console.log(count)
// }
//     </div>
// )
// }
//   ////////////////////////////////////////////////
//   function sliderUp(){ 
//      this.setState({i:2})
// }
//   sliderDown(){ }
// }
}

 export default Slider
//    //////////////////////////    
     