import React,{Component} from 'react';

export default function asyncComponent(importComponent){
	class AsyncComponent extends Component{
		constructor(props){
			super(props);
			this.state={
			    MyComponent:null
			}
		}
		async componentDidMount(){
            const {default:component}=await importComponent();
            this.setState({
               MyConponent:component
            })
		}
		render(){
		    const {MyComponent}=this.state;
		    return MyComponent ? <MyComponent {...this.props} /> : null;
		}
    }
    return AsyncComponent;
}
