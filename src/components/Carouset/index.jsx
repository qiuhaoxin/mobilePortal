import React,{Component} from 'react';

import './index.less';
import mobileImg from '../../images/mainpage/mobileImg.jpg';
import mobileImgFour from '../../images/mainpage/mobileImg4.jpg';

export default class MyComponent extends Component{
	constructor(props){
	  super(props);
	}
	componentDidMount(){
	   const {sourceData}=this.props;
	   console.log("innerwidth is "+window.innerHeight);
	}
	render(){
	      return (
             <div className="carouset-wrapper">
                  <ul>
                     <li>
                         <img src={mobileImg} style={{width:'100%',height:'488px'}}/>
                     </li>
                     <li>
                         <img src={mobileImgFour} style={{width:'100%',height:'488px'}}/>
                     </li>
                  </ul>
             </div>
	      )
	}
}