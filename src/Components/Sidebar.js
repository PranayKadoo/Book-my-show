import React, { Component } from "react";
import { render } from "react-dom";
import Component1 from "./Component1";
import  './Sidebar.css';
class Sidebar extends Component{//(props){console.log(props)
    constructor(){
        super();
    }
  render(){
    return(
        <>
        {/* <button onclick={()=>props.name=false} class="w3-bar-item w3-large">Close &times;</button> */}
        <div className='sidebarIn'>
            <h1 className='content1'>Hey!</h1>
            <div className='content2'><h1>Unlock special offer</h1>
            <button className='content2_button'>Login/Register</button>
            </div>
            <h1 className='content3'>Notifications</h1>
            <h1 className='content3'>Quick Pay</h1>
            <h1 className='content3'>Purchase History</h1>
            <h1 className='content3'>Stream Library</h1>
            <h1 className='content3'>Rewards</h1>
            <h1 className='content3'>Help & Support</h1>
            <h1 className='content3'>Settings</h1>

        </div>
        </>
   )
    }
}
export default Sidebar;