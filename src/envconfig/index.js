/*
*全局XMLHTTPRREQUSE 请求配置文件
*/
let baseUrl;
if(process.env.NODE_ENV==='development'){
	baseUrl="http://172.20.71.86/SVS";
}else{
    baseUrl="http://k3mobile.kingdee.com:8800/SVS";
}
export default {baseUrl};