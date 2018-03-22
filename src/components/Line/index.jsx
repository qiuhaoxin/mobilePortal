import React,{PureComponent} from 'react';
import './index.less';

export default class MyComponent extends PureComponent{
	constructor(props){
	  super(props);
	}
	render(){
	    const {height,width}=this.props;
	    return <div className="wise-line" style={{width:width,height:height}}>
 
	    </div>
	}
}

