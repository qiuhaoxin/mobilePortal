import React,{Component} from 'react';

import TabImg from '../../components/TabImg/index.jsx';

import './index.less';

export default class MyComponent extends Component{
	constructor(props){
	  super(props);
	  this.tabImgArr=[
          {imgPath:'../../images/u217.png',appName:'经营快报',desc:'为销售管理人员提供日常销售数据统计，包括销售
          趋势，销售增长率，以及按照业务员，产品，客户，部门进行销售排名',starCount:5,func:'支持销售订单，销售出库单，支持
          按日月年统计销售额度，支持图表展示趋势及排名。',depend:'销售管理，应收款管理'},
          {imgPath:'../../images/u209.png',appName:'移动审批',
          desc:'移动审批实现了企业管理人员即时收到流程通知通过手机终端对众多企业业务流程随时进行审批。移动审批实现了
          随时随地审批，让审批更加方便，轻松。',starCount:5,func:'支持一用户对多个账套的业务进行审批，支持EBOS
          单据包括：费用（借款）申请单。费用报销单，出差（借款）申请单，差旅费报销单；支持老单包括：销售订单，采购
          订单，付款单',depend:'不依赖模块，K3使用了那些模块，就支持哪些模块单据的审批。单据要启用审批流，不支持
          普通审核和多级审核。新单，老单均可支持'},
          {imgPath:'../../images/u213.png',appName:'移动下单',
          desc:'移动下单帮助企业销售人员快速录入销售订单，并且可以支持库存查看，携带销售价格政策，追踪销售订单
          审批状态，对销售订单进行催办协作。',starCount:5,func:'销售订单录入。库存查询，销售价格携带
          ，商品收藏，催办协作，订单打印',depend:'销售管理'},
	  ]
	}
	render(){
	   return (
          <div className="apply-wrapper">
              <div className="apply-desc">
                   <div className="apply-desc-first h1">截止目前，K/3 移动轻应用已有650000+访问量</div>
                   <div className="apply-desc-second h2">K/3 移动工作台汇集10+轻应用产品，搭载移动BOS平台，提供面向企业定制化轻应用产品生成服务</div>
              </div>
               

          </div>
	   )
	}
}