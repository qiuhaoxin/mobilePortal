import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import VideoComponent from './pages/Video';

const render=(Component)=>{
	ReactDOM.render(
       <Component/>,
       document.getElementById('root')
	)
}

render(VideoComponent);