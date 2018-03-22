import React,{Component} from 'react';

import './index.less';
import u47 from '../../images/mainpage/u47.png';

export default class MyComponent extends Component{
	constructor(props){
	  super(props);
	}
	componentDidMount(){
	   const {sourceData}=this.props;
	   
	}
	render(){
	      return (
             <div className="carouset-wrapper">
                  <ul>
                     <li>
                         <img src={u47} style={{width:'450px',height:'298px'}}/>
                     </li>
                  </ul>
             </div>
	      )
	   
	}
}