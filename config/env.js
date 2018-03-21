const fs=require('fs');
const path=require('path');
const paths=require('./paths');

delete require.cache[require.resolve('./paths')];

const NODE_ENV=process.env.NODE_ENV;
if(!NODE_ENV){
	throw new Error(
    "the NODE_ENV enviroment variable is required but was not specified";
	);
}

var dotenvFiles=[
   `${paths.dot}`
]
