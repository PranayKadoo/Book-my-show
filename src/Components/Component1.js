import React, { Component } from "react";
import product_logo from './product_logo.jpeg';
import Sidebar from "./Sidebar";
import './Component1.css'
import Temp from "./Temp";
import Slider from "./Slider";
import {Link} from 'react-scroll';
import Cards from "./Cards";
import CardsComp from "./CardsComp";
import Games from "./Games";
import event2 from "./event2.jpg"
import footer from "./footer.jpg"
//window city_flag, sidebar_flag
class Component1 extends Component{
   constructor(){
       super();
       this.state={city_flag:false, sidebar_flag:false,a:2}
       this.sidebarStatus = this.sidebarStatus.bind(this)
       //let {city_flag,sidebar_flag} = this.state;
      // let a=2;
   }
  // let {city_flag,sidebar_flag} = this.state;
   render(){       //this.sidebarStatus()

     let {city_flag,sidebar_flag,a} = this.state;
    // console.log(this.state.a);
     return(
        <div className='page' onClick={(e)=>this.sidebarStatus(e)}>   
           <nav className='navbar'>
            <div className='header'>
               <img className='product_logo' src={product_logo} width='100'/>
               {/* for a search bar:https://stackoverflow.com/questions/51726391/how-to-create-a-search-field-in-reactj */}
               <div className='search_bar'>
                   <form >
                   <input  id='input_bar'placeholder='search here...'
                          value=''
                          onChange='#'>
                   </input>
                   </form>
               </div>
            <button className="city"onClick={()=>this.setState({city_flag : !city_flag})}>City</button>
               {/* {
               city_flag?<Temp/>:null
                } */}
                <button className='sign_in'>Sign in</button>
                <button className='sidebar' onClick={/*this.sidebar(sidebar_flag)*/()=>this.setState({sidebar_flag: !sidebar_flag})}>☰</button>
                {/* {
                    sidebar_flag?<Sidebar name={sidebar_flag}/>:null
                } */}
             </div>
             <div className='menu_items'>
                 <Link href='#' className='a1' to='cardscomp' >Movies</Link>
                 <Link href='#' className='a2' to='games' >Sports</Link>
                 <Link href='#' className='a3' to='event'>Events</Link>
                 <Link href='#' className='a4' to='cardscomp' >Movies</Link>
                 <Link href='#' className='a5' to='games' >Sports</Link>
                 <Link href='#' className='a6' to='event'>Events</Link>
                 <Link href='#' className='a7' to='games' >Sports</Link>
                 <a href='#' className='a8'>corporates</a>
                 <a href='#' className='a9'>offers</a>
                 <a href='#' className='a10'>cards</a>
             </div>
             </nav>

         <div className='main'>   
             <div className="cities">
             {
               city_flag?<Temp/>:null
                }
             </div>
             <div className="sidebarOut" onClick={(ev)=>ev.stopPropagation()}>
                 {
                    sidebar_flag?<Sidebar/>:null
                }
             </div>
           </div> 
           <div className='sliderOut'>
               <Slider/>

            </div> 
          
            <div className='cardscomp'>
                <h1>Movies</h1>
                <CardsComp/>
            </div>
            <div className='games'>
                <h1>Sports</h1>
                <Games/>
            </div>
            <div className='event'>
            <h1>Events</h1>
                <img src={event2}/>
            </div><br/>
            <div className='footer'>
            
                <img src={footer}/>
            </div>
         </div>
       )
       }
       sidebarStatus(e){ let sidebar_status=e.target.className;
        if(e.target.className!=='sidebar'){
            this.setState({sidebar_flag: false})
        }
    //    new Promise((resolve,reject)=>{ resolve (this.setState({ sidebar_flag:false}))})
    //    .then(result=>console.log(e.target.parentNode.className));
       }
}
export default Component1;