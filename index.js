#!/usr/bin/env node

var execa = require('execa');

var args = ['new'];

if (process.env._ && !process.env._.match(/(npx|npm)$/)) {
  args.push('--yarn');
}

for (var i = 2; i < process.argv.length; i++) {
  args.push(process.argv[i]);
}

execa('ember', args, { stdio: 'inherit' });
