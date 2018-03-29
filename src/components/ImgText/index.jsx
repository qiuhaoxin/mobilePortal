/*
*  图片文字
*/
import React,{Component} from 'react';
import './index.less';
import  ClassNames from 'classnames';

export default class MyComponent extends Component{
	constructor(props){
	   super(props);


	}
	state={
	   imgTextObj:{
	      imgPath:'',appName:'',showMask:false
	   },
	   classNameStr:''
	}
	componentDidMount(){
       const {data,pars}=this.props;
       const paramsStyle=pars['paramsStyle'];
       const classNameStr=paramsStyle['classNameStr'];
       const borderd=paramsStyle['borderd'];
       const className=ClassNames({
          [`${classNameStr}`]:classNameStr,
          [`imgtext-wrapper-border`]:!!borderd
       },`imgtext-wrapper`);
       this.setState({
         imgTextObj:data,
         classNameStr:className
       })
	}
	render(){
	   const {imgTextObj}=this.state;
	   return (
           <div className={this.state.classNameStr}>
              <div className="imgtext-show">
                <img src={imgTextObj.imgPath}/>
                <span>{imgTextObj.appName}</span>
              </div>
           </div>
	   )
	}
}


/*
*
                            <img src={item['imgPath']}/>
                            <div className="tabimg-item-title">{item.appName}</div>
                            <div className="tabimg-item-mask">
                                  <div className="mask-title">{item.appName}</div>
                                  <div className="mask-start"></div>
                                  <div className="mask-desc">{item.desc}</div>
                                  <div>主要功能:</div>
                                  <div className="mask-func">{item.func}</div>
                                  <div><span></span><span>{item.depend}</span></div>
                            </div>
*/