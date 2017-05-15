#!/usr/bin/env node

var execa = require('execa');

var args = ['new', '--yarn'];
for (var i = 2; i < process.argv.length; i++) {
  args.push(process.argv[i]);
}

execa('ember', args, { stdio: 'inherit' });
