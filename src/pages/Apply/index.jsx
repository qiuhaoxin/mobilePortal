import React,{Component} from 'react';

import './index.less';

export default class MyComponent extends Component{
	constructor(props){
	  super(props)
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