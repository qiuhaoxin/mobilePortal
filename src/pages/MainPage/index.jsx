import React,{Component} from 'react';
import Carouset from '../../components/Carouset/index';
export default class MyComponent extends Component{
	 constructor(props){
	    super(props);
	 }
	 render(){
	    return (
            <div>
               <Carouset />
            </div>
	    )
	 }
}