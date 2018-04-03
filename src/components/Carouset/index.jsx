import React,{Component} from 'react';

import './index.less';
import mobileImg from '../../images/mainpage/mobileImg.jpg';
import mobileImgFour from '../../images/mainpage/mobileImg4.jpg';

import leftArrow from '../../images/mainpage/left_arrow.png';
import rightArrow from '../../images/mainpage/right_arrow.png';

const screenWidth=window.innerWidth;
let timer=null;
export default class MyComponent extends Component{
	constructor(props){
	  super(props);
	}
	state={
		offsetX:0,
		curIndex:1,
	}
  timerout=null;
	componentDidMount(){
	   const {sourceData}=this.props;
	   this.startTimer();
	}
	componentWillUnmount(){
        this.clearTimer();
	}
	componentWillReceiveProps(nextProps){
      
	}
	startTimer=()=>{
		const _this=this;
    console.log("style is "+this.refs.carouset1.style['transform']);
    timer=setInterval(function(){
          _this.setState(preState=>({
          	offsetX:-preState.curIndex * screenWidth,
          	curIndex:preState.curIndex + 1
          }) 
          )
        _this.setTransitionEnd();  
    },23000);
	}
	clearTimer=()=>{
       if(timer!=null){
       	  clearInterval(timer);
       	  timer=null;
       }
	}
	setTransitionEnd=()=>{
     const _this=this;
     if(this.timerout){
         clearTimeout(this.timerout);
         this.timerout=null;
     }
     this.timerout=setTimeout(function(){
        _this.transitionEnd();
     },400)
	}
  transitionEnd=()=>{
    const {dataSource}=this.props;
    if(this.state.curIndex==dataSource.length){
       console.log("stylesdfds is "+this.refs.carouset1.style['transform']);
       this.refs.carouset0.style['transform']="translate3d("+(screenWidth)+"px,0,0)";
       this.setState({
          curIndex:1
       })
    }
  }
	render(){
	      const {dataSource}=this.props;
	      return (
             <div className="carouset-wrapper">
                  <img src={leftArrow} className='arrow left-arrow'/>
                  <ul>
                  {
                     dataSource.map((item,index) => {
                     	let styles={};
                        const tranlateStr="translate3d("+(index * screenWidth + this.state.offsetX)+"px,0,0)";
                        styles['transform']=tranlateStr;
                        styles['transition']="transform .4s ease-out";
                        console.log("styles is "+JSON.stringify(styles)+" and "+this.state.offsetX);
                     	return (<li key={'carouset-'+index} style={styles} ref={'carouset'+index}>
                     	<img style={{width:'100%',height:'488px'}} src={item.url}/></li>
                     	)
                    })
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