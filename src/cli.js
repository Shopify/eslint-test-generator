#!/usr/bin/env node

import SUITES from './suites'; // eslint-disable-line node/shebang
import api from './index';

const args = process.argv.slice(2);

if (args.length < 2) {
  throw new Error(
    'You should pass in two arguments to `eslint-test-generator`:\n' +
    `1. template - can be one of these values ${Object.keys(SUITES)}. Or a path to a handlebars template which generates tests.\n` +
    '2. paths - a list of glob paths eg. src/,test/**/*.js\n\n'
  );
}

const [template, paths] = args;

console.log(api({
  template,
  paths: paths.split(','),
}));
