import React,{Component} from 'react';
import './index.less'
import PropTypes from 'prop-types';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import Dialog from 'rc-dialog';

let mousePosition={x:0,y:0};
export default class MyComponent extends Component{
	constructor(props){
	   super(props)
	}
	componentDidMount(){
       addEventListener(document.documentElement,'click',(e)=>{
          mousePosition={
             y:e.pageY,
             x:e.pageX
          };
          console.log("mousePosition is "+JSON.stringify(mousePosition));
          setTimeout(()=>mousePosition=null,100)
       })
	}
	componentWillReceiveProps(nextProps){

	}
	static propTypes={
	   title:PropTypes.string,
	   visible:PropTypes.bool
	}
	render(){
	   const {visible,title}=this.props;
	   return (
	   <div className="modal-wrapper" style={{}}>
          <div className="modal">
             <div className="modal-title">
                {title}
             </div>
             <div className="modal-body">

             </div>
             <div className="modal-footer">
                 <button>确定</button><button>取消</button>
             </div>
          </div>
       </div>
	   )
	}
}

/*

*/