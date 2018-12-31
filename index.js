#!/usr/bin/env node
const execa = require('execa');
const resolve = require('resolve');
const whoRanMe = require('who-ran-me');
const { dirname, join } = require('path');

var indexFile = resolve.sync('ember-cli', { basedir: __dirname });
const emberPath = join(dirname(indexFile), '../../bin/ember');

var args = ['new'];

// yarn reports the bin script from who-ran-me
if (['yarn', 'create-ember-app'].includes(whoRanMe())) {
  args.push('--yarn');
}

for (var i = 2; i < process.argv.length; i++) {
  args.push(process.argv[i]);
}

execa(emberPath, args, { stdio: 'inherit' }).catch((err) => {
  console.log('Error while executing ember new:', err.message);
  process.exit(1);
});
