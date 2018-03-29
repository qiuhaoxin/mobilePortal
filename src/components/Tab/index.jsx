import React,{Component} from 'react';
import './index.less';
import Line from '../Line/index.jsx';
import ClassNames from 'classnames';

export default class MyComponent extends Component{
	constructor(props){
	   super(props)
	   this.state={
          linetransformOffset:0,
          tabArr:[]
	   }
	}
	componentDidMount(){
	//根据路由初始化indicator
       const {urlLocation,tabArr}=this.props;
       const pathname=urlLocation.pathname;
       const routerItem= tabArr.filter(item=>item.url==pathname)[0];
       this.setState({
          linetransformOffset:routerItem['index'] * 100,
          tabArr
       })
	}
	handleClick=(e,item)=>{
        const {clickEvent}=this.props;
        const {tabArr}=this.state;
        if(clickEvent)clickEvent(item);
        tabArr.forEach(itemData=>{
            if(item.index==itemData.index){
               itemData['activeElement']=true;
            }else{
               itemData['activeElement']=false;
            }
        })
        this.setState({
           linetransformOffset:item.index * 100
        })
	}
	render(){
	   const {clickEvent}=this.props;
	   const {tabArr}=this.state;
       return (
		   <div className='tab-wrapper'>
	           <ul>
	               {
	                  tabArr.map((item,index)=>{
	                     return (
	                        <li key={'tab-list'+index} className={item.activeElement?'active':'noactive'} onClick={(e)=>this.handleClick(e,item)}>
	                            <div>{item.text}</div>
	                        </li>
	                     )
	                  })
	               }
	           </ul>
               <Line height="3px" width="100px" lineColor="#2d8cf0" marginStyle="0" translateOffset={this.state.linetransformOffset}/>
		   </div>
       )
	}
}