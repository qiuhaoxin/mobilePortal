import React,{Component} from 'react';
import './index.less';
import {Tab,Carouset} from 'wise_webcomponents';

 export default class MyComponent extends Component{
     constructor(props){
        super(props);
       this.imgArr=[
         {imgPath:require('../../images/mainpage/mobileImg.jpg'),appName:'test'},

       ]
       this.tabArr=[{text:'首页',key:'mainpage',url:'/mainpage',index:0,activeElement:true},
        {text:'部署',key:'deployment',url:'/deployment',index:1,activeElement:false},
        {text:'应用',key:'apply',url:'/apply',index:2},
        {text:'相关下载',key:'download',url:'/download',index:3,activeElement:false},
        {text:'帮助',key:'help',url:'/help',index:4,activeElement:false}]
     }

     render(){
        return (
           <div className="container">
               <Carouset dataSource={this.imgArr}></Carouset>
           </div>
        )
     }
 }