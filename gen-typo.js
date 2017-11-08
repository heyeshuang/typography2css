#!/usr/bin/env node
//output typo.css from customTheme

var fs = require("fs");
var Typography = require('typography')
var customTheme = require('typography-theme-alton')
//or some custom theme:
// var customTheme = require('./typography-theme-fangsong.js')
var options = customTheme
var typography = new Typography(options)

var css = typography.toString()
// console.log(css);
fs.writeFile('typo.css', css,  function(err) {
   if (err) {
       return console.error(err);
   }
   else {
       return console.log('typo.css exported')
   }
})
