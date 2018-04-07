import React,{Component} from 'react';
import './index.less';
import dlImg from '../../images/download/dl_img.png';
import {ImgText} from 'wise_webcomponents';
import download from '../../images/download/download.png'

export default class MyComponent extends Component{
     constructor(props){
        super(props);

        this.imgTabArr=[
               {imgPath:require('../../images/download/package.png'),title:'云之家',desc:'最新版本:V9',
               render:()=><div><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout} onClick={this.handleDownloadClick}><img src={download}/>立即下载</span></div></div>},

               {imgPath:require('../../images/download/package.png'),title:'移动云管理平台',desc:'最新版本：V14.3.11.0',
               render:()=><div><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}><img src={download}/>立即下载</span> </div></div>},

               {imgPath:require('../../images/download/package.png'),title:'K/3WISE补丁',desc:'持续更新',
               render:()=><div><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}><img src={download}/>立即下载</span></div>{this.renderDownload('patch')}</div>},
        ];
        this.imgTabArr7=[
               {imgPath:require('../../images/download/dl_print.png'),title:'移动报销打印服务助手（免安装）',desc:'云之家移动报销中打印单据需要使用打印助手',
               innerRender:()=><div className='download-time'><span>更新日期</span><span>2018-05-12</span><span>下载次数</span><span>271</span></div>,
               render:()=><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}>下载</span></div>},
               {imgPath:require('../../images/download/dl_package.png'),title:'移动审核组件调用异常解决方案',desc:'解决移动审批组件调用异常的问题',
               innerRender:()=><div className='download-time'><span>更新日期</span><span>2018-05-12</span><span>下载次数</span><span>271</span></div>,
               render:()=><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}>下载</span></div>},
          ];
        this.imgTabArr8=[
               {imgPath:require('../../images/download/dl_play.png'),title:'K3WISE云管理平台配置讲解视频教程.mp4',desc:'',
               innerRender:()=><div className='download-time'><span>更新日期</span><span>2018-05-12</span><span>下载次数</span><span>271</span></div>,
               render:()=><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}>下载</span></div>},
               {imgPath:require('../../images/download/dl_play.png'),title:'K3WISE轻应用待办消息配置视频教程.mp4',desc:'',
               innerRender:()=><div className='download-time'><span>更新日期</span><span>2018-05-12</span><span>下载次数</span><span>271</span></div>,
               render:()=><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}>下载</span></div>},
        ];
        this.imgTabArr9=[
               {imgPath:require('../../images/download/dl_play.png'),title:'K3WISE轻应用移动审批配置视频教程.mp4',desc:'',
               innerRender:()=><div className='download-time'><span>更新日期</span><span>2018-05-12</span><span>下载次数</span><span>271</span></div>,
               render:()=><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}>下载</span></div>},
               {imgPath:require('../../images/download/dl_play.png'),title:'K3WISE轻应用移动报销配置视频教程.mp4',desc:'',
               innerRender:()=><div className='download-time'><span>更新日期</span><span>2018-05-12</span><span>下载次数</span><span>271</span></div>,
               render:()=><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}>下载</span></div>},
        ];
        this.imgTabArr10=[
               {imgPath:require('../../images/download/dl_play.png'),title:'K3WISE轻应用移动下单配置视频教程.mp4',desc:'',
               innerRender:()=><div className='download-time'><span>更新日期</span><span>2018-05-12</span><span>下载次数</span><span>271</span></div>,
               render:()=><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}>下载</span></div>},
               {imgPath:require('../../images/download/dl_play.png'),title:'K3WISE轻应用订单跟踪配置视频教程.mp4',desc:'',
               innerRender:()=><div className='download-time'><span>更新日期</span><span>2018-05-12</span><span>下载次数</span><span>271</span></div>,
               render:()=><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}>下载</span></div>},
        ];
        this.imgTabArr11=[
               {imgPath:require('../../images/download//dl_play.png'),title:'K3WISE轻应用应收款管理配置视频教程.mp4',desc:'',
               innerRender:()=><div className='download-time'><span>更新日期</span><span>2018-05-12</span><span>下载次数</span><span>271</span></div>,
               render:()=><div className='download-dl'><span className="download_btn" onMouseEnter={this.handleDownloadMouseOver} onMouseLeave={this.handleDownloadMouseout}>下载</span></div>},
        ];
        this.dlContent={
            "erp":[
               ["K/3WISE V13.1版本"],
               ["K/3WISE V14.0版本及以上"]
            ],
            "patch":[
                ["V13.1","V14.0"],["V14.2","V14.3"]
            ]
        }

      }
      state={
         showDownload:false
      }
      renderDownload=(key)=>{
          const content=this.dlContent[key];
          console.log("content is "+JSON.stringify(content));
          return (
             <div className="dl-wrapper">
                {
                   content.map((item,index)=>{
                      return (
                         <ul key={`dl-wrapper-${index}`}>
                            {item.map((itemData,idx)=><li key={`dl-item-${idx}`}><span>{itemData}</span><span className='dl-item-dl'>下载</span></li>)}
                         </ul>
                      )
                   })
                }
             </div>
          )
      }
      handleDownloadClick=(e)=>{
         this.setState({
            showDownload:true
         })
      }
      handleMouseOver2=(target)=>{
        target.style['box-shadow']="3px 3px 3px 0px rgba(0,0,0,.4)";
      }
      handleMouseout2=(target)=>{
        target.style['box-shadow']="";
      }
      handleDownloadMouseOver=(e)=>{
         e.target.style['background']="rgb(51,102,204)";
      }
      handleDownloadMouseout=(e)=>{
         e.target.style['background']="rgb(0,153,255)";
      }
     render(){
        return (
           <div className="dl-container">
               <img src={dlImg}/>
               <ImgText dataSource={this.imgTabArr} layout="column" className='download-imgtext' mouseover={this.handleMouseOver2} mouseout={this.handleMouseout2}/>

               <div className='download_module'>
                  <div>其他相关下载</div>
                  <ImgText dataSource={this.imgTabArr7} layout="row" className='dll-imgtext'/>
               </div>
              <div className='download_module' style={{marginBottom:'50px'}}>
                  <div style={{marginBottom:'50px'}}>视频资料下载</div>
                  <ImgText dataSource={this.imgTabArr8} layout="row" className='video-imgtext'/>
                  <ImgText dataSource={this.imgTabArr9} layout="row" className='video-imgtext'/>
                  <ImgText dataSource={this.imgTabArr10} layout="row" className='video-imgtext'/>
                  <ImgText dataSource={this.imgTabArr11} layout="row" className='video-imgtext'/>
              </div>
           </div>
        )
     }
 }