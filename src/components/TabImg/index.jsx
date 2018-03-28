import React,{Component} from 'react';
import './index.less';


export default class MyComponent extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {dataSource}=this.props;
		return (
           <ul className="tabimg-wrapper">
              {
              	dataSource.map((item,index)=>{
              		return (
                        <li key={`tabimg-${index}`}>
                              
                        </li>
              		)
              	})
              }
           </ul>
		)
	}
}