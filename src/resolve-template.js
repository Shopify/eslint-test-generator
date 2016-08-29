import fs from 'fs';

import suites from './suites';

/**
 * This function will return handlebars template string based
 * the template value under options.
 * 
 * @param  {Object} options Options object passed to eslint-test-generator
 * @return {String}         Handlebars template
 */
export default (options) => {
  let handlebars;

  // if this is a test suite string
  if(suites[options.template]) {
    handlebars = suites[options.template];
  // if this is a path to a handlebars file
  } else if(fs.existsSync(options.template)) {
    handlebars = fs.readFileSync(options.template, 'utf8');
  // otherwise we'll assume that options.template is a handlebars template
  } else {
    handlebars = options.template;
  }

  return handlebars;
};
