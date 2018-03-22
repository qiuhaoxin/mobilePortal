import React,{Component} from 'react';
import './index.less';

export default class MyComponent extends Component{
	constructor(props){
	   super(props)
	}
	componentDidMount(){

	}
	handleClick=(e,item)=>{
        const {clickEvent}=this.props;
        if(clickEvent)clickEvent(item);
	}
	render(){
	   const {tabArr,clickEvent}=this.props;
       return (
		   <div className='tab-wrapper'>
	           <ul>
	               {
	                  tabArr.map((item,index)=>{
	                     return (
	                        <li key={'tab-list'+index} onClick={(e)=>this.handleClick(e,item)}>
	                            <div>{item.text}</div>
	                        </li>
	                     )
	                  })
	               }
	           </ul>
		   </div>
       )
	}
}