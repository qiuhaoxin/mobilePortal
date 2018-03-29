import React,{Component} from 'react';

import TabImg from '../../components/TabImg/index.jsx';

import './index.less';

const enquire=require('enquire.js')
const responsiveMap={
  xs:"(max-width:575px)",
  sm:"(min-width:576px)",
  md:"(min-width:768px)",
  lg:"(min-width:992px)",
  xl:"(min-width:1200px)",
  xxl:"(min-width:1600px)"
}
export default class MyComponent extends Component{
	constructor(props){
	  super(props);
	  this.tabImgArr=[
          {imgPath:require('../../images/product/u217.png'),appName:'经营快报',desc:`\r\n \r\n \r\n \r\n \r\n \r\n \r\n为销售管理人员提供日常销售数据统计，包括销售
          趋势，销售增长率，以及按照业务员，产品，客户，部门进行销售排名`,starCount:5,func:`\r\n \r\n \r\n \r\n \r\n \r\n \r\n 支持销售订单，销售出库单，支持
          按日月年统计销售额度，支持图表展示趋势及排名。`,depend:'销售管理，应收款管理',showMask:false},
          {imgPath:require('../../images/product/u209.png'),appName:'移动审批',
          desc:`\r\n \r\n \r\n \r\n \r\n \r\n \r\n 移动审批实现了企业管理人员即时收到流程通知通过手机终端对众多企业业务流程随时进行审批。移动审批实现了
          随时随地审批，让审批更加方便，轻松。`,starCount:5,func:`\r\n \r\n \r\n \r\n \r\n \r\n \r\n 支持一用户对多个账套的业务进行审批，支持EBOS
          单据包括：费用（借款）申请单。费用报销单，出差（借款）申请单，差旅费报销单；支持老单包括：销售订单，采购
          订单，付款单`,depend:`不依赖模块，K3使用了那些模块，就支持哪些模块单据的审批。单据要启用审批流，不支持
          普通审核和多级审核。新单，老单均可支持`,showMask:false},
          {imgPath:require('../../images/product/u213.png'),appName:'移动下单',
          desc:`\r\n \r\n \r\n \r\n \r\n \r\n \r\n 移动下单帮助企业销售人员快速录入销售订单，并且可以支持库存查看，携带销售价格政策，追踪销售订单
          审批状态，对销售订单进行催办协作。`,starCount:5,func:`\r\n \r\n \r\n \r\n \r\n \r\n \r\n 销售订单录入。库存查询，销售价格携带
          ，商品收藏，催办协作，订单打印`,depend:'销售管理',showMask:false},
	  ],
    this.sendTabImgArr=[
        {imgPath:require('../../images/product/receive.png'),appName:'应收款管理'},
        {imgPath:require('../../images/product/approval.png'),appName:'移动审批'},
        {imgPath:require('../../images/product/alarm.png'),appName:'订单预警'},
        {imgPath:require('../../images/product/busreport.png'),appName:'经营快报'},
        {imgPath:require('../../images/product/stock.png'),appName:'库存查询'},
        {imgPath:require('../../images/product/ordertracking.png'),appName:'订单跟踪'},
        {imgPath:require('../../images/product/mobiledealer.png'),appName:'移动经销商'},
        {imgPath:require('../../images/product/reimburse.png'),appName:'移动报销'},
        {imgPath:require('../../images/product/mofan.png'),appName:'运营魔方'},
        {imgPath:require('../../images/product/service.png'),appName:'CRM微服务'},
        {imgPath:require('../../images/product/financialinsight.png'),appName:'资金洞察'},
        {imgPath:require('../../images/product/dingzhihua.png'),appName:'定制化应用'},

        {imgPath:require('../../images/product/mobileorder.png'),appName:'移动下单'},
        {imgPath:require('../../images/product/amiba.png'),appName:'阿米巴经营'},
        {imgPath:require('../../images/product/code.png'),appName:'K/3二维码'},
        {imgPath:require('../../images/product/smartfactory.png'),appName:'智慧工厂'},
        {imgPath:require('../../images/product/crm.png'),appName:'移动CRM'},
        {imgPath:require('../../images/product/ordertracking.png'),appName:'销售价格查询'},
        {imgPath:require('../../images/product/mobiledealer.png'),appName:'现金流管理'},
        {imgPath:require('../../images/product/receive.png'),appName:'费用分析'},
    ]
	}
  componentDidMount(){
      Object.keys(responsiveMap).map(item=>{
         enquire.register(responsiveMap[item],{
             match:()=>{
                console.log("match is "+responsiveMap[item]);
             },
             unmatch:()=>{

             },
             destroy(){}
         })
      })
  }
	render(){
	   return (
          <div className="apply-wrapper">
              <div className="apply-desc">
                   <div className="apply-desc-first h1">截止目前，K/3 移动轻应用已有650000+访问量</div>
                   <div className="apply-desc-second h2">K/3 移动工作台汇集10+轻应用产品，搭载移动BOS平台，提供面向企业定制化轻应用产品生成服务</div>
              </div>
              <TabImg dataSource={this.tabImgArr} paramsStyle={{showMask:true,borderd:true,classNameStr:'imgtext-1',nextClass:'tabimg-wrapper-1'}} test={true} />
              <div className="apply-pro">
                   <div className="apply-pro-title">
                       汇集在K/3 移动工作台的轻应用产品
                   </div>
                   <div className="apply-pro-title1">
                       除移动BOS定制化轻应用产品外，汇集包含财务、供应链、制造及客户关系管理领域的10+个轻应用产品
                   </div>
              </div>
              <TabImg dataSource={this.sendTabImgArr} paramsStyle={{showMask:false,borderd:false,classNameStr:'imgtext-2',nextClass:'tabimg-wrapper-2',styleStr:{width:'60%',margin:'30px 20%' ,   background:'#f2f2f2'}}}  />
          </div>
	   )
	}
}