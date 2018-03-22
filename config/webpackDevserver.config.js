const fs=require('fs');
const path=require('path');
const paths=require('./paths');
const errorOverlayMiddleware=require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware=require('react-dev-utils/noopServiceWorkerMiddleware');
const protocol=process.env.HTTPS==='true'?'https':'http';
const config=require('./webpack.config.dev.js');


const host=process.env.HOST||'0.0.0.0';

module.exports=function(proxy,allowedHost){
	return {
     compress:true,
     clientLogLevel:'none',
     contentBase:paths.appPublic,
     hot:true,
     publicPath:config.output.pubulicPath,
     quiet:true,

     watchOptions:{
     	ignored: new RegExp(
        `^(?!${path
          .normalize(paths.appSrc + '/')
          .replace(/[\\]+/g, '\\\\')}).+[\\\\/]node_modules[\\\\/]`,
        'g'
      ),
     },
     https:protocol==='https',
     host:host,
     overlay:false,
     historyApiFallback:{
     	  disableDotRule:true,
     },
     public:allowedHost,
     proxy,
     before(app){
     	app.use(errorOverlayMiddleware());
     	app.use(noopServiceWorkerMiddleware());
     }
 }
}
