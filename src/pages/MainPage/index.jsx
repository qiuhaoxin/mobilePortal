import React,{Component} from 'react';
import Carouset from '../../components/Carouset/index';
import TabText from '../../components/TabText/index';
export default class MyComponent extends Component{
	 constructor(props){
	    super(props);
	    this.imgArr=[
           {url:'../../images/mainpage/mobileImg.jpg',imgIndex:1},
           {url:'../../images/mainpage/mobileImg4.jpg',imgIndex:2}
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
               <div>

               </div>
            </div>
	    )
	 }
}