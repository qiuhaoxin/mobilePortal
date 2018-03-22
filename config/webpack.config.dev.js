/*
*  development
*/
const path=require('path');
const webpack=require('webpack');
const autoprefixer=require('autoprefixer');
const HtmlWebpackPlugin=require('htmo-webpack-plugin');
const CaseSensitivePathsPlugin=require('case-sensitive-paths=webpack-plugin');
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

const env=
