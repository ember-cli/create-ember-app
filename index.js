#!/usr/bin/env node

var execa = require('execa');
var whoRanMe = require('who-ran-me');

var args = ['new'];

if (whoRanMe() === 'yarn') {
  args.push('--yarn');
}

for (var i = 2; i < process.argv.length; i++) {
  args.push(process.argv[i]);
}

execa('ember', args, { stdio: 'inherit' });
