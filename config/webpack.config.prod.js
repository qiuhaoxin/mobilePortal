const path=require('path');
const webpack=require('webpack');

const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const ManifestPlugin=require('webpack-manifest-plugin');

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

// if(env.stringified['process.env'].NODE_ENV!=='production'){
// 	throw new Error("production build must have NODE_ENV=production");
// }
const cssFileName="static/css/[name].[contenthash:8].css";

const extractTextPluginOptions=shouldUseRelativeAssetPath ? {publicPath:Array(cssFileName.split('/').length).join('../')} : {};

module.exports={
	bail:true,
	devtool:false,
	entry:['babel-polyfill',require.resolve('./polyfills'),paths.appIndexJs],
	output:{
		path:paths.appBuild,
		filename:'static/js/[name].[cunkhash:8].chunk.js',
		publicPath:publicPath,
		devtoolModuleFilenameTemplate:info=>
		  path.relative(paths.appSrc,info.absoluteResourcePath)
		  .replace(/\\/g,'/'),
	},
	resolve:{
		modules:['node_modules',paths.appNodeModules].concat(
              process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
		),
		extensions:['.js','.jsx','.less','.json','.css'],
		alias:{
			'babel-runtime':path.dirname(
                require.resolve('babel-runtime/package.json')
			)
		}
	},
	plugins:[

	]
}


