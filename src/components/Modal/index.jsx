import React,{Component} from 'react';
import './index.less'
import PropTypes from 'prop-types';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import Dialog from 'rc-dialog';
import classNames from 'classnames';
let mousePosition={x:0,y:0};
let classNameStr;
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
       const {visible}=this.props;
       classNameStr=classNames({
          [`modal-show`]:!!visible
       },'modal-wrapper')

	}
	componentWillReceiveProps(nextProps){
      console.log("nextProps is "+JSON.stringify(nextProps));
      if(nextProps.visible!=this.props['visible']){
        classNameStr=classNames({
            [`modal-show`]:nextProps.visible
         },'modal-wrapper')
      }
	}
	static propTypes={
	   title:PropTypes.string,
	   visible:PropTypes.bool
	}
	render(){
	   const {visible,title}=this.props;
	   return (
	   <div className={classNameStr} style={{}}>
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