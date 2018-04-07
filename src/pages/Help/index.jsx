import React,{Component} from 'react';
import './index.less';
import {Tab,Carouset,ImgText} from 'wise_webcomponents';

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


        this.imgTabArr=[
           {imgPath:require('../../images/help/book.png'),title:'移动云管理平台介绍及部署',desc:'系统了解系统框架，快速部署安装',clickMethod:this.handleClick},
               {imgPath:require('../../images/help/robot.png'),title:'K/3移动应用介绍',desc:'超20+移动应用资料，详尽掌握',clickMethod:this.handleClick},
               {imgPath:require('../../images/help/sock.png'),title:'轻应用依赖模块说明',desc:'各轻应用对应K/3应用模块及版本说明',clickMethod:this.handleClick},
          ]
        this.imgTabArr2=[
               {imgPath:require('../../images/help/fang.png'),title:'定制化应用开发手册',desc:'满足企业个性化应用需求，随心所欲',clickMethod:this.handleClick},
               {imgPath:require('../../images/help/lock.png'),title:'轻应用权限说明',desc:'灵活的应用权限控制，聚焦角色场景',clickMethod:this.handleClick},
               {imgPath:require('../../images/help/home.png'),title:'报表核算项目数据授权说明',desc:'直接SQL报表中进行核算项目数据授权控制',clickMethod:this.handleClick}
          ]
        this.imgTabArr3=[
               {imgPath:require('../../images/help/wenhao.png'),title:'云管理平台部署及使用常见问题',desc:'IIS配置、网络端口异常、ASP.NET异常等'},
               {imgPath:require('../../images/help/wenhao.png'),title:'云平台第一步连接数据库问题',desc:'账套管理、数据库相关配置等'},
               {imgPath:require('../../images/help/wenhao.png'),title:'云平台第二步内网连接不通问题',desc:'站点配置、权限设置、网络选择等'},
          ]
        this.imgTabArr4=[
               {imgPath:require('../../images/help/help1.png'),title:'云管理平台配置讲解视频教程',desc:'',
               render:()=><div className='help-vidiu'><span><img src={require('../../images/help/clock.png')}/>2016-08-05</span><span><img src={require('../../images/help/eye.png')}/>168</span></div>},
               {imgPath:require('../../images/help/help2.png'),title:'轻应用待办消息配置视频教程',desc:'',
               render:()=><div className='help-vidiu'><span><img src={require('../../images/help/clock.png')}/>2016-08-05</span><span><img src={require('../../images/help/eye.png')}/>168</span></div>
               },
               {imgPath:require('../../images/help/help3.png'),title:'轻应用移动审批配置视频教程',desc:'', 
               render:()=><div className='help-vidiu'><span><img src={require('../../images/help/clock.png')}/>2016-08-05</span><span><img src={require('../../images/help/eye.png')}/>168</span></div>},
               {imgPath:require('../../images/help/help4.png'),title:'轻应用移动报销配置视频教程',desc:'',
               render:()=><div className='help-vidiu'><span><img src={require('../../images/help/clock.png')}/>2016-08-05</span><span><img src={require('../../images/help/eye.png')}/>168</span></div>},
          ]
        this.imgTabArr5=[
               {imgPath:require('../../images/help/help5.png'),title:'轻应用移动下单配置视频教程',desc:'',
               render:()=><div className='help-vidiu'><span><img src={require('../../images/help/clock.png')}/>2016-08-05</span><span><img src={require('../../images/help/eye.png')}/>168</span></div>},
               {imgPath:require('../../images/help/help6.png'),title:'轻应用订单跟踪配置视频教程',desc:'',
               render:()=><div className='help-vidiu'><span><img src={require('../../images/help/clock.png')}/>2016-08-05</span><span><img src={require('../../images/help/eye.png')}/>168</span></div>},
               {imgPath:require('../../images/help/help3.png'),title:'轻应用应收款管理配置视频教程',desc:'',
               render:()=><div className='help-vidiu'><span><img src={require('../../images/help/clock.png')}/>2016-08-05</span><span><img src={require('../../images/help/eye.png')}/>168</span></div>},
               {imgPath:'',title:'',desc:''},
          ]
     }
      handleMouseOver=(target)=>{
            target.style['background']="rgba(51,153,204,.5)";
            target.style['color']="#fff";
      }
      handleMouseout=(target)=>{
        target.style['background']="#fff";
            target.style['color']="#000";
      }
      handleMaskerRender=()=>{
        return (
               <div className='qhx-imgtext-masker'>
                   <img src={require('../../images/help/play.png')}/>
               </div>
        )
      }
     render(){
        return (
           <div className="container">
              <div className='help-title-one'>
                 <div>手册资料</div>
              </div>
              <ImgText dataSource={this.imgTabArr} layout={'row'} mouseover={this.handleMouseOver} mouseout={this.handleMouseout}/>
              <ImgText dataSource={this.imgTabArr2} layout={'row'}/>
              <div className='help-title-one'>
                 <div>常见问题</div>
              </div>
              <ImgText dataSource={this.imgTabArr3} layout={'row'}/>
              <div className='help-title-one'>
                <div>视频资料</div>
              </div>
              <ImgText dataSource={this.imgTabArr4} layout={'column'} className={'help-imgtext-vedio'} maskerRender={this.handleMaskerRender}/>
              <ImgText dataSource={this.imgTabArr5} layout={'column'} className={'help-imgtext-vedio'} maskerRender={this.handleMaskerRender}/>
           </div>
        )
     }
 }

 /*
 *               <Carouset dataSource={this.imgArr}></Carouset>
 */