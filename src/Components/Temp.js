import React,{Component} from "react";
import './Temp.css'
import ahmd from './ahmd.png';
import bngl from './bngl.png';
import dehr from './dehr.png';
import del from './del.png';
import koch from './koch.png';
import mum from './mum.png';
import ngp from './ngp.png';

class Temp extends Component{
    constructor(){
        super()
    }
    render(){return(<div className='city_name'>
        <ul>
    <li><img className='city_logo' src={ahmd} width='100'/><br/>Ahemadabad</li>
    <li><img className='city_logo' src={bngl} width='100'/><br/>Banglore</li>
    <li><img className='city_logo' src={dehr} width='100'/><br/>Deheradun</li>
    <li><img className='city_logo' src={del} width='100'/><br/>Delhi</li>
    <li><img className='city_logo' src={mum} width='100'/><br/>Mumbai</li>
    <li><img className='city_logo' src={koch} width='100'/><br/>Kochi</li>
    <li><img className='city_logo' src={ngp} width='100'/><br/>Nagpur</li>
    </ul>
   </div>)}
}
export default Temp;