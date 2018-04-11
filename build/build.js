'use strict';

process.env.NODE_ENV="production";
process.env.BABEL_ENV="production";
process.env.STATIC_ENV="production";

if(process.env.STATIC_ENV=='production'){
	process.env.PUBLIC_URL="/wisemobile";
}

process.on('unhandledRejection',err=>{
	throw err;
})

require('../config/env');

const path=require('path');
const chalk=require('chalk');
const fs=require('fs-extra');
const webpack=require('webpack');
const config=require('../config/webpack.config.prod');
const paths=require('../config/paths');
const checkRequiredFiles=require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages=require('react-dev-utils/formatWebpackMessages');
const printHostingInstructions = require('react-dev-utils/printHostingInstructions');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const printBuildError = require('react-dev-utils/printBuildError');


const measureFileSizesBeforeBuild=
      FileSizeReporter.measureFileSizesBeforeBuild;

const printFileSizesAfterBuild=FileSizeReporter.printFileSizesAfterBuild;

const useYarn=fs.existsSync(paths.yarnLockFile);

const WARN_AFTER_BUILD_GZIP_SIZE=512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE=1024 * 1024;


if(!checkRequiredFiles([paths.appHtml,paths.appIndexJs])){
	process.exit(1);
}

measureFileSizesBeforeBuild(paths.appBuild)
  .then(previousFileSize=>{
  	fs.emptyDirSync(paths.appBuild);
  	copyPublicFolder();
  	return build(previousFileSize);
  })
  .then(
     ({stats,previousFileSize,warnings})=>{
     	if(warnings.length){
     		console.log(chalk.yellow('Compiled with warnings.\n'));
     		console.log(warnings.join("\r\n"));
     		console.log(
     			'\n Search for the '+
     			chalk.underline(chalk.yellow('keywords'))+
     			' to learn more about each warning'
     		);
     		console.log(
              'To ignore,and '+
              chalk.cyan('// eslint-disable-next-line')+
              'to the line before.\n'
     		)
     	}else{
     		console.log(chalk.green('Compiled successfully.\n'));
     	}
     	console.log("File sizes after gzip:\n");
     	printFileSizesAfterBuild(
          stats,
          previousFileSize,
          path.appBuild,
          WARN_AFTER_BUILD_GZIP_SIZE,
          WARN_AFTER_CHUNK_GZIP_SIZE,
     	)
     	const appPackage=require(paths.appPackageJson);
     	const publicUrl=paths.publicUrl;
     	const publicPath=config.output.publicPath;
     	const buildFolder=path.relative(process.cwd(),paths.appBuild);

     	printHostingInstructions(
           appPackage,
           publicUrl,
           publicPath,
           buildFolder,
           useYarn
     	);
     },
     err=>{
     	console.log(chalk.red('Failded to compile.\n'));
     	printBuildError(err);
     	process.exit(1);
     }
  );

  function build(previousFileSizes){
  console.log('Creating an optimized production build...');

  let compiler = webpack(config);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n'
          )
        );
        return reject(new Error(messages.warnings.join('\n\n')));
      }
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      });
    });
  });
  }

  function copyPublicFolder(){
  	fs.copySync(paths.appPublic,paths.appBuild,{
  		dereference:true,
  		filter:file=>file!==paths.appHtml,
  	});
  }
