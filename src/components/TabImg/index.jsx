import React,{Component} from 'react';
import './index.less';
import ClassName from 'classnames';


export default class MyComponent extends Component{
	constructor(props){
		super(props);
	}
  componentDidMound(){
     const {borderd}=this.props;

  }
  handleMouseOver=(e)=>{
     
  }
  handleMouseOut=(e)=>{

  }
	render(){
		const {dataSource,showMask}=this.props;
		return (
           <ul className="tabimg-wrapper">
              {
              	dataSource.map((item,index)=>{
              		return (
                        <li key={`tabimg-${index}`} className={"tabimg-item item-"+index} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                            <img src={item['imgPath']}/>
                            <div className="tabimg-item-title">{item.appName}</div>
                            <div className="tabimg-item-mask">
                                  <div className="mask-title">{item.appName}</div>
                                  <div className="mask-start"></div>
                                  <div className="mask-desc">{item.desc}</div>
                                  <div>主要功能:</div>
                                  <div className="mask-func">{item.func}</div>
                                  <div><span></span><span>{item.depend}</span></div>
                            </div>
                        </li>
              		)
              	})
              }
           </ul>
		)
	}
}