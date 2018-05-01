const path=require('path');
const fs=require('fs');

const url=require('url');

const appDirectory=fs.realpathSync(process.cwd());
const resolveApp=relativePath=>path.resolve(appDirectory,relativePath);

const envPublicUrl=process.env.PUBLIC_URL;
const appName=envPublicUrl && envPublicUrl.split('/').reverse()[0];

function ensureSlash(path,needsSlash){
	const hasSlash=path.endsWith('/');
	if(hasSlash && !needsSlash){
		return path.substr(path,path.length - 1);
	}else if(!hasSlash && needsSlash){
		return `${path}/`;
	}else {
		return path;
	}
}

const getPublicUrl=appPackageJson=>envPublicUrl || require(appPackageJson).homepage;

function getServedPath(appPackageJson){
	const publicUrl=getPublicUrl(appPackageJson);
	const serveUrl=envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname:'/');
	return ensureSlash(serveUrl,true)
}

module.exports={
	dotenv:resolveApp('.env'),
	appBuild:resolveApp(`${appName}`),
	appPublic:resolveApp('public'),
	appHtml:resolveApp('public/index.html'),
	appIndexJs:resolveApp('src/index.js'),
	videoIndexJs:resolveApp('src/video.js'),
	appPackageJson:resolveApp('package.json'),
	appSrc:resolveApp('src'),
	yarnLockFile:resolveApp('yarn.lock'),
	testsSetup:resolveApp('src/setupTest.js'),
	appNodeModules:resolveApp('node_modules'),
	publicUrl:getPublicUrl(resolveApp('package.json')),
	servedPath:getServedPath(resolveApp('package.json')),
}