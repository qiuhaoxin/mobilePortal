

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
const checkRequireFiles=require('react-dev-utils/checkRequireFiles');
const {
	choosePort,
	createCompiler,
	prepareProxy,
	prepareUrls
}=require('react-dev-uitls/WebpackDevServerUtils');
const openBrowser=require('react-dev-uitls/openBrowser');

const paths=require('../config/paths');
const config=require('../config/webpack.config.dev.js');
const createDevServerConfig=require('../config/webpackDevserver.config');

const useYarn=fs.existsSync(paths.yarnLockFile);
const isInteractive=process.stdout.isTTY;

if(!checkRequireFiles([paths.appHtml,paths.appIndexJs])){
	process.exit(1);
}

const DEFAULT_PORT=parseInt(process.env.PORT)||8008;

const HOST=process.env.HOST || '0,0,0,0';

choosePort(HOST,DEFAULT_PORT)
.then(port=>{
	if(port==null){
		return;
	}
	const protocol=process.env.HTTPS==='true'?'https':'http';
	const appName=require(path.appPackageJson).name;
	const url=prepareUrls(protocol,HOST,port);

	const compiler=createCompiler(webpack,config,appName,url,useYarn);
	const proxySetting=require(paths.appPackageJson).proxy;
	const proxyConfig=prepareProxy(proxySetting,paths.appPublic);
	const serverConfig=createDevServerConfig(proxyConfig,url.lanUrlForConfig);
	const devServer=new WebpackDevServer(compiler,serverConfig);

	devServer.listen(port,HOST,err=>{
		if(err){
			return config.log(err);
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






