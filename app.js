/*jshint esversion: 6*/
/*jslint node: true */

"use strict";

const Readline = require('readline');
const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
  console.log(`You said ${reply}`);
  rl.prompt();
});