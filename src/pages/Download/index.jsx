import React,{Component} from 'react';
import './index.less';
import dlImg from '../../images/download/dl_img.png';
import {ImgText,Exchange,Modal,Select,Masker} from 'wise_webcomponents';
import download from '../../images/download/download.png';
import {connect} from 'react-redux';
import {getProvince,getCity} from '../../data/province.js';
import {submitData} from '../../store/download/action';
import API from '../../api/api';

class MyComponent extends Component{
     constructor(props){
        super(props);
        this.exchangeData=[
          ['13.1','14.0'],
          ['14.2','14.3']
        ];
        this.provinceData=getProvince();
        this.govermentData=['客户','伙伴代理','分公司机构'];
        this.cityData=getCity('广东');
        this.erpData=[
           ['K/3WISE13.1版本'],
           ['K/3WISE14.0以上版本']
        ]
        this.imgTabArr=[
               {imgPath:require('../../images/download/package.png'),title:'云之家',desc:'最新版本:V9',
               render:()=><Exchange dataSource={[]} downloadEvent={this.handleDownloadClick} imgPath={require('../../images/download/download.png')}/>},

               {imgPath:require('../../images/download/package.png'),title:'移动云管理平台',desc:'最新版本：V14.3.11.0',
                render:()=><Exchange dataSource={this.erpData} downloadEvent={this.handleDownloadClick} imgPath={require('../../images/download/download.png')}/>},

               {imgPath:require('../../images/download/package.png'),title:'K/3WISE补丁',desc:'持续更新',
                render:()=><Exchange dataSource={this.exchangeData} downloadEvent={this.handleDownloadClick} imgPath={require('../../images/download/download.png')}/>},
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
         modalVisible:false,
          dropDownVisible:false,
          maskerVisible:false,
          provinceVal:'广东省',
          cityVal:'广州市',
          type:'客户',
          tel:'',
          concat:'',
          goverment:'',
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
      handleDownloadClick=(data)=>{
          const {custInfoData,submitData}=this.props;
          console.log("custInfoData is "+JSON.stringify(custInfoData)+" and submitData is "+submitData);
          if(custInfoData && custInfoData['tel']!=''){

          }else{
            this.setState({
               modalVisible:true,
               maskerVisible:true
            })
          }
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
      submitDataAsync=async (params)=>{
          const {submitData}=this.props;
          const response=await API.submitData(params);
          console.log("reponse is "+JSON.stringify(response));
          submitData((response && response.Data && response.Data[0]));

      }
      handleBtnOk=()=>{
        const {provinceVal,cityVal,type,tel,concat,goverment}=this.state;
        const {submitData}=this.props;
        let info={
           province:provinceVal,
           city:cityVal,
           email:'',
           linkman:concat,
           name:goverment,
           product:'14.2',
           role:type,
           tel,
           version:'14.1'
        }
        this.submitDataAsync(info);
       // this.setState({
         // modalVisible:false,
          //maskerVisible:false
        //})
      }
      handleCancel=()=>{
        console.log("cancel");
          this.setState({
            modalVisible:false,
            maskerVisible:false
          })
      }
      handleSelect=(value,key)=>{
        if(key=='provinceVal'){
            this.cityData=getCity(value);
        }
         this.setState((preState)=>{
            if(key=='provinceVal'){
              return ({
                [key]:value,
                cityVal:this.cityData[0]
              })
            }else{
              return ({
                [key]:value
              })
            }
         })
      }
      handleInput=(e,key)=>{
        this.setState({
           [key]:e.target.value
        })
      }
     render(){
        const {modalVisible,provinceVal,cityVal,type,tel,concat,goverment,maskerVisible}=this.state;
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
              <Masker visible={maskerVisible}/>
              <Modal
                  title="请填写用户信息"
                  onOk={this.handleBtnOk}
                  visible={modalVisible}
                  onCancel={this.handleCancel}
              >
                  <div>
                     <div className="modal-row">
                       <div className="modal-row-item"><label>用户类型:</label>
                       <Select value={type} defaultValue={type} dataSource={this.govermentData} onChange={(value)=>this.handleSelect(value,"type")}></Select>  
                       </div>           
                       <div className="modal-row-item"><label>机构名称:</label><input placeholder="请输入机构名称" value={goverment} onChange={(e)=>this.handleInput(e,"goverment")}/></div>
                     </div>
                     <div className="modal-row">
                       <div className="modal-row-item"><label>省    份:</label>
                       <Select value={provinceVal} onChange={(value)=>this.handleSelect(value,"provinceVal")} defaultValue={provinceVal} 
                       dataSource={this.provinceData}></Select></div>           
                       <div className="modal-row-item"><label>市:</label>
                       <Select value={cityVal} defaultValue={cityVal} dataSource={this.cityData} onChange={(value)=>this.handleSelect(value,"cityVal")}></Select>
                       </div>
                     </div>
                     <div className="modal-row">
                       <div className="modal-row-item"><label>联系人:</label>
                       <input placeholder="请填写联系人姓名" value={concat} onChange={(e)=>this.handleInput(e,"concat")}/></div>           
                       <div className="modal-row-item"><label>电话:</label><input placeholder="请输入电话号码" value={tel} onChange={(e)=>this.handleInput(e,"tel")}/></div>
                     </div>
                  </div>
              </Modal>
           </div>
        )
     }
 }

 //export default MyComponent;
 export default connect(state=>({
      custInfoData:state.infoData
 }),{submitData})(MyComponent);