const path=require('path');
const webpack=require('webpack');

const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const ManifestPlugin=require('webpack-manifest-plugin');

const paths=require('./paths');
const getClientEnvironment=require('./env');
const px2rem=require('postcss-px2rem');

const publicPath="./" //paths.servedPath;

const shouldUseRelativeAssetPath=publicPath==='./';

const shouldUseSourceMap=process.env.GENERATE_SOURCEMAP!=='false';

const publicUrl=publicPath.slice(0,-1);
console.log("publicUrl is "+publicUrl);
const env=getClientEnvironment(publicUrl);


function resolve(dir){
	return path.join(__dirname,"..",dir)
}

// if(env.stringified['process.env'].NODE_ENV!=='production'){
// 	throw new Error("production build must have NODE_ENV=production");
// }
const cssFileName="static/css/[name].[contenthash:8].css";

const extractTextPluginOptions=shouldUseRelativeAssetPath ? {publicPath:Array(cssFileName.split('/').length).join('../')} : {};
console.log("production");
module.exports={
	bail:true,
	devtool:false,
	entry:['babel-polyfill',require.resolve('./polyfills'),paths.appIndexJs],
	output:{
		path:paths.appBuild,
		filename:'static/js/[name].[chunkhash:8].js',
    chunkFilename:'static/js/[name].[chunkhash:8].chunk.js',
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
		},
	    plugins:[

	    ]
	},
	module:{
		strictExportPresence:true,
		rules:[
           {
           	 oneOf:[
                {
                	test:[/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
                	loader:require.resolve('url-loader'),
                	options:{
                		limit:10000,
                		name:'static/media/[name].[hash:8].[ext]',
                	},
                },
                {
                	test:/\.(js|jsx)$/,
                	include:paths.appSrc,
                	loader:require.resolve('babel-loader'),
                	options:{
                		babelrc:true,
                		presets:[require.resolve('babel-preset-react-app')],
                		compact:true,
                		plugins:['transform-decorators-legacy'],
                	},
                },
                {
                	test:/\.(css|less)$/,
                	loader:ExtractTextPlugin.extract(
                        Object.assign(
                           {
                           	  fallback:require.resolve('style-loader'),
                           	  use:[
                                 {
                                 	loader:require.resolve('css-loader'),
                                 	options:{
                                 		importLoaders:1,
                                 		minimize:true,
                                 		sourceMap:shouldUseSourceMap
                                 	}
                                 },{
                                 	loader:require.resolve('less-loader')
                                 }
                           	  ],
                           },
                           extractTextPluginOptions
                        )
                	),
                },
                {
                	loader:require.resolve('file-loader'),
                	exclude:[/\.js$/,/\.html$/,/\.json$/],
                	options:{
                		name:'static/media/[name].[hash:8].[ext]',
                	}
                }
           	 ]
           }
		]
	},
	plugins:[
       new HtmlWebpackPlugin({
       	inject:true,
       	template:paths.appHtml,
       	minify:{
       		removeComments:true,
       		collapseWhitespace:true,
       		removeRedundantAttributes:true,
       		minifyJS:true,
       		minifyCSS:true,
       		minifyURLs:true,
       	}
       }),
       new webpack.DefinePlugin(env.stringified),
       new webpack.optimize.UglifyJsPlugin({
       	 compress:{
       	 	warnings:false,
       	 	comparisons:false,
       	 	drop_console:true,
       	 	drop_debugger:true,
       	 },
       	 mangle:{
       	 	safari10:true,
       	 },
       	 output:{
       	 	comments:false,
       	 	ascii_only:true,
       	 },
       	 sourceMap:shouldUseSourceMap,
       }),
       new ExtractTextPlugin({
       	 filename:cssFileName,
       }),
       new ManifestPlugin({
       	fileName:'asset-manifest.json',
       }),
       new webpack.IgnorePlugin(/^\.\/local$/,/moment$/),

	],
	  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
	  node: {
	    dgram: 'empty',
	    fs: 'empty',
	    net: 'empty',
	    tls: 'empty',
	    child_process: 'empty',
	  },

}


