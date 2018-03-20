import React,{Component} from 'react';

export default function asyncComponent(importComponent){
	class AsyncComponent extends Component{
		constructor(props){
			super(props);
			this.state={
			    MyCompontent:null
			}
		}
		async componentDidMount(){
            const component=await importComponent();
            this.setState({
               MyConponent:component
            })
		}
		render(){
		    const {MyCompontent}=this.state;
		}
    }
    return AsyncComponent;

}
