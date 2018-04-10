const path=require('path');
const webpack=require('webpack');

const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const ManifestPlugin=require('webpack-maifest-plugin');

const paths=require('./paths');
const getClientEnvironment=require('./env');
const px2rem=require('postcss-px2rem');

const publicPath=paths.servedPath;

const shouldUseRelativeAssetPath=publicPath==='./';

const shouldUseSourceMap=process.env.GENERATE_SOURCEMAP!=='false';

const publicUrl=publicPath.slice(0,-1);

const env=getClientEnvironment(publicUrl);


function resolve(dir){
	return path.join(__dirname,"..",dir)
}

if(env.stringified['process.env'].NODE_ENV!=='production'){
	throw new Error("production build must have NODE_ENV=production");
}
const cssFileName="static/css/[name].[contenthash:8].css";

const extractTextPluginOptions=shouldUseRelativeAssetPath ? {publicPath:Array(cssFileName.split('/').length).join('../')} : {};

module.exports={
	bail:true,
	devtool:false,
	entry:['babel-polyfill',require('./polyfill'),paths.appIndexJs],
	output:{
		path:paths.appBuild
	}
}


