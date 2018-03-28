import React,{Component} from 'react';
import './index.less';

import u99 from '../../images/deployment/u99.png';
import u103 from '../../images/deployment/u103.png';
import u169 from '../../images/deployment/u169.png';
import u145 from '../../images/deployment/u145.png';
export default class MyConponent extends Component{
	constructor(props){
	   super(props);
	}
	render(){
	   return (
          <div className="deploy-wrapper">
              <div className="deploy-wrapper-h1">
                  <span>简单几步，轻松玩转"掌上K/3"</span>
                  <img src={u99}/>
              </div>
              <div className="deploy-wrapper-h3">
                  <img src={u103}/>
                  <div className="deploy-desc">
                     <span className="first-step">第一步</span>
                     <span className="deploy-dl">下载云之家</span>
                     <span className="dot">中国最大的移动工作平台，海尔、万科、国务院国资委等300万企业和组织的选择</span>
                     <span className="dot">支持IOS、安卓、PCWeb端和桌面端</span>
                     <button>下载云之家</button>
                  </div>
              </div>
              <div className="deploy-wrapper-h5">
                  <div className="deploy-desc">
                     <span className="second-step">第二步</span>
                     <span className="deploy-dl">下载安装云管理平台</span>
                     <span className="dot">Windows Server 2008 R2（推荐）</span>
                     <span className="dot">13.1版本需要安装在K3客户端或K3WEB或中间层服务器</span>
                     <span className="dot">14.0及以上版本需要安装在K3WEB或中间层服务器</span>
                     <div><button>13.1版本下载</button><button>14.0及以上版本下载</button></div>
                  </div>
                  <img src={u169}/>
              </div>
              <div className="deploy-wrapper-h7">
                  <img src={u145}/>
                  <div className="deploy-desc">
                     <span className="third-step">第三步</span>
                     <span className="deploy-dl">安装对应K/3版本特性补丁</span>
                     <span className="dot">每个版本都有对应的特性补丁需要安装</span>
                     <span className="dot">补丁持续更新，安装最新补丁前需要先卸载历史补丁</span>
                     <div><button>13.1补丁下载</button><button>14.0补丁下载</button></div>
                     <div><button>14.2补丁下载</button><button>14.3补丁下载</button></div>
                  </div>

              </div>
              <div className="deploy-wrapper-h9">

                  <div className="deploy-desc">
                     <span className="third-step">第四步</span>
                     <span className="deploy-dl">配置账套、网络，连接云之家</span>
                     <span className="dot">可支持多账套配置</span>
                     <span className="dot">连接公网，移动设备随时随地访问使用</span>
                     <span className="dot">多应用管理，灵活上架使用</span>
                  </div>
                  <img src={u145}/>
              </div>
              <div className="deploy-wrapper-h11">
                  <img src={u145}/>
                  <div className="deploy-desc">
                     <span className="third-step">第五步</span>
                     <span className="deploy-dl">登录云之家应用K/3WISE移动工作台</span>
                     <span className="dot">云之家统一入口：K/3 WISE</span>
                     <span className="dot">自动创建工作圈移动工作台公众号</span>
                  </div>

              </div>
              <div className="deploy-wrapper-h13">
                   <div>恭喜你！完成所有部署，畅享移动办公！</div>
                   <a>点击查看详细部署文档</a>
              </div>
          </div>
	   )
	}
}