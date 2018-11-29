/*jshint esversion: 6*/
/*jslint node: true */


const patternDict = [{
  pattern: '\\b(Hi|Hello|Hey|Hullo|Aloha)\\b',
  intent: 'Hello'
}, {
  pattern: '\\b(bye|exit|see ya\\b',
  intent: 'exit'
}];
module.exports = patternDict;