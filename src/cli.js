#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

import api from './index.js';
import SUITES from './suites';

const args = process.argv.slice(2);

if(args.length < 2) {
  throw new Error(
    'You should pass in two arguments to `eslint-test-generator`:\n' +
    `1. template - can be one of these values ${Object.keys(SUITES)}. Or a path to a handlebars template which generates tests.\n` +
    '2. paths - a list of glob paths eg. src/,test/**/*.js\n\n'
  );
}

let [template, paths] = args;

if(!SUITES[template]) {
  template = fs.readFileSync(template, 'utf8');
}

console.log(api({
  template: template,
  paths: paths.split(','),
}));
