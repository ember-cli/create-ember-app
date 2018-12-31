#!/usr/bin/env node

var execa = require('execa');
var whoRanMe = require('who-ran-me');

var args = ['new'];

// yarn reports the bin script from who-ran-me
if (['yarn', 'create-ember-app'].includes(whoRanMe())) {
  args.push('--yarn');
}

for (var i = 2; i < process.argv.length; i++) {
  args.push(process.argv[i]);
}

execa('ember', args, { stdio: 'inherit' }).catch((err) => {
  console.log('Error while executing ember new:', err.message);
  process.exit(1);
});
