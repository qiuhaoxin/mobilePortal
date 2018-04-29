import React,{Component} from 'react';
import {DefaultPlayer as Video} from 'react-html5video';
import './video.less';
import './index.less';

const vidoeUrl="http://k3mobile.kingdee.com:8800/wise/DowloadServer/video/";
export default class MyComponent extends Component{
	constructor(props){
		super(props);
	}
	state={
		videoUrl:'',
	}
	componentDidMount(){
      const {videoName}=this.props.match.params;
      console.log("videoName is "+videoName);
      this.setState({
      	 videoUrl:(vidoeUrl+videoName),
      })

	}
	render(){
		return (
           <div>
		       <Video
		          autoPlay muted 
		          controls={['PlayPause','Seek','Time','Volume','Fullscreen']}
		          onCanPlayThrough={
		            ()=>{

		            }
		          }

		       >
		         <source src={this.state.videoUrl} type="video/mp4" />
		       </Video>
           </div>
		)
	}
}