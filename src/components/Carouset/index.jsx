import React,{Component} from 'react';

import './index.less';
import mobileImg from '../../images/mainpage/mobileImg.jpg';
import mobileImgFour from '../../images/mainpage/mobileImg4.jpg';

import leftArrow from '../../images/mainpage/left_arrow.png';
import rightArrow from '../../images/mainpage/right_arrow.png';

export default class MyComponent extends Component{
	constructor(props){
	  super(props);
	}
	componentDidMount(){
	   const {sourceData}=this.props;
	   
	}
	componentWillUnmount(){

	}
	componentWillReceiveProps(nextProps){
      
	}
	render(){
	      const {dataSource}=this.props;
	      console.log("dataSource is "+JSON.stringify(dataSource));
	      return (
             <div className="carouset-wrapper">
                  <img src={leftArrow} className='arrow left-arrow'/>
                  <ul>
                  {
                     dataSource.map((item,index) => <li key={'carouset-'+index}><img style={{width:'100%',height:'488px'}} src={item.url}/></li>)
                  }
                  </ul>
                  <img src={rightArrow} className="arrow right-arrow"/>
             </div>
	      )
	}
}

/*
                  <ul>
                     <li>
                         <img src={mobileImg} style={{width:'100%',height:'488px'}}/>
                     </li>
                     <li>
                         <img src={mobileImgFour} style={{width:'100%',height:'488px'}}/>
                     </li>
                  </ul>
*/