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
               {imgPath:require('../../images/help/book.png'),title:'移动云管理平台介绍及部署',number:'platformIntroduce',desc:'系统了解系统框架，快速部署安装',clickMethod:this.handleClick,
               urlJump:'http://k3mobile.kingdee.com:8800/lighthelp/PDFFile/K3%20%E7%A7%BB%E5%8A%A8%E4%BA%91%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0%E4%BB%8B%E7%BB%8D%E5%8F%8A%E9%83%A8%E7%BD%B2%E6%96%B9%E6%B3%95.pdf'},
               {imgPath:require('../../images/help/robot.png'),title:'K/3移动应用介绍',number:'appIntroduce',desc:'超20+移动应用资料，详尽掌握',clickMethod:this.handleClick,
               urlJump:'http://k3mobile.kingdee.com:8800/lighthelp/PDFFile/K3%20%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E4%BB%8B%E7%BB%8D.pdf'},
               {imgPath:require('../../images/help/sock.png'),title:'轻应用依赖模块说明',number:'dependIntroduce',desc:'各轻应用对应K/3应用模块及版本说明',clickMethod:this.handleClick,
               urlJump:'http://k3mobile.kingdee.com:8800/lighthelp/PDFFile/K3%20%E8%BD%BB%E5%BA%94%E7%94%A8%E4%BE%9D%E8%B5%96%E6%A8%A1%E5%9D%97%E8%AF%B4%E6%98%8E.pdf'},
          ]
        this.imgTabArr2=[
              {imgPath:require('../../images/help/fang.png'),title:'定制化应用开发手册',number:'customIntroduce',desc:'满足企业个性化应用需求，随心所欲',clickMethod:this.handleClick,
               urlJump:'http://k3mobile.kingdee.com:8800/lighthelp/PDFFile/%E5%AE%9A%E5%88%B6%E5%8C%96%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C.pdf'},
               {imgPath:require('../../images/help/lock.png'),title:'轻应用权限说明',number:'authorityIntroduce',desc:'灵活的应用权限控制，聚焦角色场景',clickMethod:this.handleClick,
               urlJump:'http://k3mobile.kingdee.com:8800/lighthelp/PDFFile/%E8%BD%BB%E5%BA%94%E7%94%A8%E6%9D%83%E9%99%90%E8%AE%BE%E7%BD%AE%E9%97%AE%E9%A2%98.pdf'},
               {imgPath:require('../../images/help/home.png'),title:'报表核算项目数据授权说明',number:'hesuanIntroduct',desc:'直接SQL报表中进行核算项目数据授权控制',clickMethod:this.handleClick,
               urlJump:'http://k3mobile.kingdee.com:8800/lighthelp/PDFFile/%E7%9B%B4%E6%8E%A5SQL%E6%8A%A5%E8%A1%A8%E4%B8%AD%E8%BF%9B%E8%A1%8C%E6%A0%B8%E7%AE%97%E9%A1%B9%E7%9B%AE%E6%95%B0%E6%8D%AE%E6%8E%88%E6%9D%83%E6%8E%A7%E5%88%B6%E7%9A%84%E6%96%B9%E6%B3%95.txt'},
          ]
        this.imgTabArr3=[
               {imgPath:require('../../images/help/wenhao.png'),title:'云管理平台部署及使用常见问题',desc:'IIS配置、网络端口异常、ASP.NET异常等',number:'chanjian',
               urlJump:'http://k3mobile.kingdee.com:8800/lighthelp/PDFFile/%E7%BD%91%E7%BB%9C%E8%BF%9E%E6%8E%A5%E5%8F%8APC%E7%AB%AF%E3%80%81%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E6%93%8D%E4%BD%9C.pdf'},
               {imgPath:require('../../images/help/wenhao.png'),title:'云平台第一步连接数据库问题',desc:'账套管理、数据库相关配置等',number:'firststep',
               urlJump:'http://k3mobile.kingdee.com:8800/lighthelp/PDFFile/%E4%BA%91%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0%E9%85%8D%E7%BD%AE%E7%AC%AC%E4%B8%80%E6%AD%A5%E6%97%A0%E6%B3%95%E9%80%9A%E8%BF%87%EF%BC%88%E8%BF%9E%E4%B8%8D%E4%B8%8A%E6%95%B0%E6%8D%AE%E5%BA%93%EF%BC%89.pdf'},
               {imgPath:require('../../images/help/wenhao.png'),title:'云平台第二步内网连接不通问题',desc:'站点配置、权限设置、网络选择等',number:'secondStep',
               urlJump:'http://k3mobile.kingdee.com:8800/lighthelp/PDFFile/%E4%BA%91%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0%E9%85%8D%E7%BD%AE%E7%AC%AC%E4%BA%8C%E6%AD%A5%E5%86%85%E7%BD%91%E4%B8%8D%E9%80%9A%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.pdf'},
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
      handleImgTextClick=(e,item)=>{
       console.log("item is "+JSON.stringify(item));
       const number=item.number;
       if(number && item.urlJump){
         location.href=item.urlJump;
       }
     }
     render(){
        return (
           <div className="container">
              <div className='help-title-one'>
                 <div>手册资料</div>
              </div>
              <ImgText dataSource={this.imgTabArr} layout={'row'} mouseover={this.handleMouseOver} mouseout={this.handleMouseout} imgTextClick={this.handleImgTextClick} />
              <ImgText dataSource={this.imgTabArr2} layout={'row'} mouseover={this.handleMouseOver} mouseout={this.handleMouseout} imgTextClick={this.handleImgTextClick}/>
              <div className='help-title-one'>
                 <div>常见问题</div>
              </div>
              <ImgText dataSource={this.imgTabArr3} layout={'row'} mouseover={this.handleMouseOver} mouseout={this.handleMouseout} imgTextClick={this.handleImgTextClick}/>
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