import React,{Component} from 'react';
import './index.less';
import ClassName from 'classnames';
import ImgText from '../ImgText/index.jsx';
import ClassNames from 'classnames';


export default class MyComponent extends Component{
	constructor(props){
		super(props);

	}
  state={
     classNameStr:''
  }
  componentDidMount(){
     const {dataSource,...paramsStyle}=this.props;
     const params=paramsStyle['paramsStyle'];
     const nextClass=params['nextClass'];
     const className=ClassNames({
        [`${nextClass}`]:nextClass
     },`tabimg-wrapper`);
     console.log("className str is "+className);
     this.setState({
        classNameStr:className
     })
  }
  handleMouseOver=(e)=>{
     
  }
  handleMouseOut=(e)=>{

  }
	render(){
		const {dataSource,...paramsStyle}=this.props;
    console.log("dataSource is "+JSON.stringify(dataSource))
    const params=paramsStyle['paramsStyle'];

    console.log("parattms is "+JSON.stringify(paramsStyle));
		return (
           <ul className={this.state.classNameStr} style={params['styleStr']}>
              {
              	dataSource.map((item,index)=>{
              		return (
                        <li key={`tabimg-${index}`}  onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                             <ImgText data={item} pars={paramsStyle}/>    
                        </li>
              		)
              	})
              }
           </ul>
		)
	}
}