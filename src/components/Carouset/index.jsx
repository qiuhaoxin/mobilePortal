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
    this.diff=1;//图片滑动的方向 1:右滑动 -1：左滑动
	}
	state={
		offsetX:0,
		curIndex:0,
    dataArr:[]
	}
  timerout=null;
	componentDidMount(){
	   const {dataSource}=this.props;
     console.log("sourceData is "+JSON.stringify(dataSource));
     dataSource.forEach((item,index)=>item['transform']=(index * screenWidth));
     this.setState({
        dataArr:dataSource
     })
	   //this.startTimer();
	}
	componentWillUnmount(){
        this.clearTimer();
	}
	componentWillReceiveProps(nextProps){
      
	}
	startTimer=()=>{
		const _this=this;
    timer=setInterval(function(){
          _this.setState(preState=>({
          	offsetX:-preState.curIndex * screenWidth,
          	curIndex:preState.curIndex + 1
          }) 
          )
        _this.setTransitionEnd();  
    },2000);
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
  getX=(styleStr)=>{
     const reg=/translate3d\(/
  }
  change=(curIndex,nextIndex)=>{
     let {dataArr}=this.state;
     dataArr.forEach(item=>{
        if(item.imgIndex==curIndex||item.imgIndex==nextIndex){
           console.log("transform style is "+item['transform']);
           item['transform']=(item['transform']-screenWidth);
        }
     })
     let tempArr=dataArr.filter(item=>item.imgIndex!=999);
     this.setState(preState=>{
        return {
          dataArr:tempArr,
          curIndex:nextIndex
        }
     })


  }
  //每次滑动前都要判断下一张图片是否在正确的位置上
  beforeTran=(diff,nextIndex)=>{
      console.log("beforeTrans nextIndex is "+nextIndex);
      let {dataArr}=this.state;
      this.refs['carouset'+nextIndex].style['transform']="translate3d("+screenWidth+"px,0,0)"
      dataArr.forEach(item=>{
         if(item.imgIndex==nextIndex){
            if(item['transform']!=(-1 * diff * screenWidth)){
               item['transform']=(-1 * diff * screenWidth);
            }
         }
      })
      const temp=dataArr.filter(item=>item.imgIndex!=99);
      this.setState({
         dataArr:temp
      })
  }
  handleLeftClick=()=>{
     const _this=this;
     this.diff=-1;
     const {curIndex,dataArr}=this.state;
     const nextIndex=(curIndex + 1) % dataArr.length;
     this.beforeTran(this.diff,nextIndex);
     setTimeout(function(){
        _this.change(curIndex,nextIndex);
     },300)

  }
  handleRightClick=()=>{
     this.diff=1;
     const {curIndex,dataArr}=this.state;
     const nextIndex=(curIndex - 1) % dataArr.length;
          console.log("nextInde xis "+nextIndex);
  }
	render(){
	     // const {dataSource}=this.props;
        const {dataArr}=this.state;
        console.log("dataArr is "+JSON.stringify(dataArr));
	      return (
             <div className="carouset-wrapper">
                  <img src={leftArrow} className='arrow left-arrow' onClick={this.handleLeftClick}/>
                  <ul>
                  {
                     dataArr.map((item,index) => {
                     
                     	  let styles={};
                        const tranlateStr="translate3d("+(item['transform'])+"px,0,0)";
                        styles['transform']=tranlateStr;
                        styles['transition']="transform .4s ease-out";
                        console.log("styles is "+JSON.stringify(styles)+" and "+this.state.offsetX);
                     	return (<li key={'carouset-'+index} style={styles} ref={'carouset'+index}>
                     	<img style={{width:'100%',height:'488px'}} src={item.url}/></li>
                     	)
                    })
                  }
                  </ul>
                  <img src={rightArrow} className="arrow right-arrow" onClick={this.handleRightClick}/>
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