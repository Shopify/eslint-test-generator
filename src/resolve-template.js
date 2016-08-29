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
  if (suites[options.template]) {
    handlebars = suites[options.template];
  // if this is a path to a handlebars file or
  // a handlebars template itself
  } else {
    // we will try to load the file if we cannot then we will assume it's a
    // handlebars template string
    try {
      handlebars = fs.readFileSync(options.template, 'utf8');
    } catch (error) {
      handlebars = options.template;
    }
  }

  return handlebars;
};
