/*
*  development
*/
const path=require('path');
const webpack=require('webpack');
const autoprefixer=require('autoprefixer');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const CaseSensitivePathsPlugin=require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin=require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin=require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter=require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin=require('react-dev-utils/ModuleScopePlugin');
const paths=require('./paths');
const px2rem=require('postcss-px2rem');
const getClientEnviroment=require('./env');


function resolve(dir){
	return path.join(__dirname,"..",dir);
}

const publicPath="/";

const publicUrl="";

const env=getClientEnviroment(publicUrl);

module.exports={
	devtool:'cheap-module-source-map',
	entry:[
       'react-hot-loader/patch',
       'babel-polyfill',
       require.resolve('./polyfills'),
       require.resolve('react-dev-utils/webpackHotDevClient'),
       paths.appIndexJs,

	],
	output:{
		pathinfo:true,
		filename:'static/js/bundle.js',
		chunkFilename:'static/js/[name].chunk.js',
		publicPath:publicPath,
		devtoolModuleFilenameTemplate:info=>path.resolve(info.absoluteResourcePath).replace(/\\/g,'/')
	},
	resolve:{
		modules:['node_modules',paths.appNodeModules].concat(
             process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
		),
		extensions:['.js','.json','.jsx'],
		alias:{
			'babel-runtime':path.dirname(require.resolve('babel-runtime/package.json')),
			'@':'src'
		},
		plugins:[
            new ModuleScopePlugin(paths.appSrc,[paths.appPackageJson])
		]
	},
	module:{
		strictExportPresence:true,
		rules:[
           {
           	  test:/\.(js|jsx|mjs)$/,
           	  include:paths.appSrc,
           	  use:[

           	  ]
           },
           {
           	  oneOf:[
                {
                 	test:[/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/],
                 	loader:require.resolve('url-loader'),
                 	options:{
                 		limit:10000,
                 		name:'static/meida/[name].[hash:8].[ext]',
                 	}
                },
                {
                 	test:/\.(js|jsx)$/,
                 	include:paths.appSrc,
                 	use:[
                       {
                       	  loader:require.resolve('babel-loader'),
                       	  options:{
                       	  	babelrc:true,
                       	  	presets:[require.resolve('babel-preset-react-app')],
                       	  	cacheDirectory:true,
                       	  	plugins:['transform-decorators-legacy'],
                       	  }
                       },
                       {
                       	   loader:require.resolve('eslint-loader'),
                       	   options:{
                       	   	   formatter:eslintFormatter,
                       	   	   eslintPath:require.resolve('eslint'),
                       	   	   baseConfig:{
                       	   	   	   extends:[require.resolve('eslint-config-react-app')]
                       	   	   },
                       	   	   ignore:false,
                       	   	   useEslintrc:false

                       	   },
                       },
                 	]
                },
                {
                	test:/\.(css|less)$/,
                	use:[
                       require.resolve('style-loader'),
                       {
                       	  loader:require.resolve('css-loader'),
                       	  options:{
                       	  	 importLoaders:1
                       	  }
                       },
                       {
                       	   loader:require.resolve('postcss-loader'),
                       	   options:{
                       	   	  ident:'postcss',
                       	   	  plugin:()=>[
                                 require('postcss-flexbugs-fixer'),
                                 autoprefixer({
                                 	browser:[
                                 	 '>1%',
                                 	'last 4 versions',
                                 	'Firfox ESR',
                                 	'not ie < 9',
                                 	],
                                    flexbox:'no-2009',
                                 }),
                                 px2rem({remUnit:75})
                       	   	  ],
                       	   },
                       },
                       {
                       	  loader:require.resolve('less-loader')
                       }
                	],
                },
                {
                	exclude:[/\.js$/,/\.html$/,/\.json$/],
                	loader:require.resolve('file-loader'),
                	options:{
                		name:'static/media/[name].[hash:8].[ext]',
                	},
                },
           	  ],
           },
		],
	},
	plugins:[

	   // new InterpolateHtmlPlugin(env.raw),
	    new HtmlWebpackPlugin({
            inject:true,
            template:paths.appHtml
	    }),
	    new webpack.NamedModulesPlugin(),
	    new webpack.DefinePlugin(env.stringified),
	    new webpack.HotModuleReplacementPlugin(),
	    new CaseSensitivePathsPlugin(),
	    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
	    new webpack.IgnorePlugin(/^\.\/local$/,/moment$/),
	],
	node:{
		dgram:'empty',
		fs:'empty',
		net:'empty',
		tls:'empty',
		child_process:'empty'
	},
	performance:{
		hints:false
	}
}
