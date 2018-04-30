import React,{Component} from 'react';
import Carouset from '../../components/Carouset/index';
import TabText from '../../components/TabText/index';
import Line from '../../components/Line/index.jsx';


import u21 from '../../images/mainpage/u21.png';
import u23 from '../../images/mainpage/u23.png';
import u25 from '../../images/mainpage/u25.png';
import u27 from '../../images/mainpage/u27.png';

import u36 from '../../images/mainpage/u36.png';
import u40 from '../../images/mainpage/u40.png';

import './index.less';
export default class MyComponent extends Component{
	 constructor(props){
	    super(props);
	    this.imgArr=[
           {url:require('../../images/mainpage/mobileImg.jpg'),imgIndex:0},
           {url:require('../../images/mainpage/mobileImg4.jpg'),imgIndex:1}
	    ]
	    this.tabTextArr=[
            {title:'多账套切换',desc:'支持多账套切换配置，支持多账套数据展示，业务处理',icon:''},
            {title:'权限管理',desc:'企业经营快报只想给老板看？没问题，移动云管理平台提供用户级权限管理，想给谁看就给谁看',icon:''},
            {title:'自动检查更新',desc:'支持自动检查更新升级，让企业第一时间体验 K/3移动新产品',icon:''},
            {title:'无缝对接云之家',desc:'通过云管理平台可免登陆进入云之家工作圈管理后台，自动创建工作圈移动工作台公众号',icon:''}
	    ]
	 }
	 state={
	    carousetData:[{dataSrc:''}]
	 }
	 render(){
	    return (
            <div className="mainpage-wrapper">
               <Carouset dataSource={this.imgArr}/>
               <TabText dataSource={this.tabTextArr}/>
               <div className="wise-example">
                   <div className="wise-example-title">
                       <span>样本客户</span>
                   </div>
                   <div className="wise-example-desc">
                        截止目前，已有700+企业选择使用K/3轻应用产品
                   </div>
                   <div className="wise-example-img">
                        <img src={u21}/>
                        <img src={u23}/>
                        <img src={u25}/>
                        <img src={u27}/>
                   </div>
               </div>
               <div className="wise-footer">
                  <div className="wise-footer-ma">
	                   <div>
	                       <img src={u36}/>
	                       <span>微信扫码体验</span>
	                   </div>
	                   <div>
	                       <img src={u40}/>
	                       <span>扫码看产品介绍</span>
	                   </div>
                  </div>

                  <div className="wise-footer-desc">
                       Copyright 2015 © 金蝶K/3 移动项目组
                  </div>
               </div>

            </div>
	    )
	 }
}