import React,{Component} from 'react';
import './index.less';
import dlImg from '../../images/download/dl_img.png';
import TabImg from '../../components/TabImg';

export default class MyComponent extends Component{
     constructor(props){
        super(props);
        this.downloadArr=[
           {imgPath:require('../../images/download/dl_mobile.png'),appName:'云之家',render:()=>(<div><div>最新版本：v9</div><div className="dl_dl">下载</div></div>)},
           {imgPath:require('../../images/download/dl_mobile.png'),appName:'移动云管理平台',render:()=>(<div><div>最新版本：v9</div><div className="dl_dl">下载</div></div>)},
           {imgPath:require('../../images/download/dl_mobile.png'),appName:'K/3WISE 补丁',render:()=>(<div><div>持续更新</div><div className="dl_dl">下载</div></div>)}

        ]
     }
     render(){
        return (
           <div className="container">
               <img src={dlImg}/>
              <TabImg dataSource={this.downloadArr} paramsStyle={{showMask:false,borderd:false,classNameStr:'download-imgtext',nextClass:'tabimg-wrapper-dl'}} />
           </div>
        )
     }
 }