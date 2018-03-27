import React,{Component} from 'react';
import './index.less';

export default class MyComponent extends Component{
	constructor(props){
	   super(props);
	}
	componentWillReceiveProps(nextProps){

	}
	componentDidMount(){

	}

	render(){
       const {dataSource}=this.props;
       console.log("dataSource is "+JSON.stringify(dataSource));
	   return (
            <ul className='wise-tabtext'>
	              {
	                 dataSource.map((item,index)=>{
	                    return <li key={'tabText-'+index}><span className='tableText-title'>{item.title}</span><span className='tableText-desc'>{item.desc}</span></li>
	                 })
	              }
             </ul>
	   )
	}
}