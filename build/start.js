

process.env.NODE_ENV='development';		
process.env.BABEL_ENV='development';
process.env.STATIC_ENV='development';

process.on('unhandleRejection',err=>{
	throw err;
});


const fs=require('fs');
const chalk=require('chalk');
const webpack=require('webpack');
const WebpackDevServer=require('webpack-dev-server');
const clearConsole=require('react-dev-uitls/clearConsole');



