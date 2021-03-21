#!/usr/bin/env node

// IMPORTS
var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2))

// MODEL
globalThis.data = {
  indexJSON: '../index.json',
  outDir: './.well-known/liquid/asset/'
}

// FUNCTIONS

// INIT
data.indexJSON = argv._[0] || data.indexJSON

// MAIN

data.index = require(data.indexJSON)

for (const property in data.index) {
  console.log(`${JSON.stringify(data.index[property], null, 2)}`);  
  fs.writeFileSync(data.outDir + property + '.json', JSON.stringify(data.index[property], null, 2))
}

