

process.env.NODE_ENV='development';		
process.env.BABEL_ENV='development';
process.env.STATIC_ENV='development';
console.log("precess env NODE_ENV is "+process.env.NODE_ENV);
process.on('unhandleRejection',err=>{
	throw err;
});


const fs=require('fs');
const chalk=require('chalk');
const webpack=require('webpack');
const WebpackDevServer=require('webpack-dev-server');
const checkRequiredFiles=require('react-dev-utils/checkRequiredFiles');
const clearConsole=require('react-dev-utils/clearConsole');
const {
	choosePort,
	createCompiler,
	prepareProxy,
	prepareUrls
}=require('react-dev-utils/WebpackDevServerUtils');
const openBrowser=require('react-dev-utils/openBrowser');

const paths=require('../config/paths');
const config=require('../config/webpack.config.dev.js');
const createDevServerConfig=require('../config/webpackDevserver.config');

const useYarn=fs.existsSync(paths.yarnLockFile);
const isInteractive=process.stdout.isTTY;

if(!checkRequiredFiles([paths.appHtml,paths.appIndexJs])){
	process.exit(1);
}

const DEFAULT_PORT=parseInt(process.env.PORT,10)||8008;

const HOST=process.env.HOST || '0.0.0.0';

choosePort(HOST,DEFAULT_PORT)
.then(port=>{
	if(port==null){
		return;
	}
	const protocol=process.env.HTTPS==='true'?'https':'http';
	const appName=require(paths.appPackageJson).name;
	const url=prepareUrls(protocol,HOST,port);

	const compiler=createCompiler(webpack,config,appName,url,useYarn);
	const proxySetting=require(paths.appPackageJson).proxy;
	const proxyConfig=prepareProxy(proxySetting,paths.appPublic);
	const serverConfig=createDevServerConfig(proxyConfig,url.lanUrlForConfig);
	const devServer=new WebpackDevServer(compiler,serverConfig);

	devServer.listen(port,HOST,err=>{
		if(err){
			return config.log("error is "+err);
		}
		if(isInteractive){
			clearConsole();
		}
		console.log(chalk.cyan('starting the development server at port 8008!'));
		openBrowser(url.localUrlForBrowser);
	});
	['SIGINT','SIGTERM'].forEach(sig=>{
		process.on(sig,function(){
			devServer.close();
			process.exit();
		})
	})
})






