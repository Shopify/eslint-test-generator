import glob from 'glob';
import * as eslint from 'eslint';

import generateTests from './generate-tests';
import SUITES from './suites';

const CLIEngine = eslint.CLIEngine;

export default (opts) => {

  if (!opts) {
    throw new Error('Please pass in an options object');
  }

  if (!opts.template) {
    throw new Error(
      'Your options object should define `template` which could be one of the following values\n' +
      `${Object.keys(SUITES)
        .map((suiteName) => {
          return `- ${suiteName}`;
        })
        .join('\n')}\n` +
      'Or it should be a handlebars template which defines and sets up your tests (see README.md)\n\n'
    );
  }

  const options = Object.assign(
    {},
    opts
  );

  // check if there's a suite for this template
  if (SUITES[options.template]) {
    options.template = SUITES[options.template];
  }

  // the following will get an array of all paths to lint
  const paths = getPaths(options);

  // now we want to run eslint  on all those paths we can assume that
  // an eslint config is setup
  const eslintEngine = new CLIEngine();
  const results = eslintEngine.executeOnFiles(paths).results;

  // now that we have results we want to JS some JS and return it
  return generateTests(options, results);
};

function getPaths(opts) {
  let paths = opts.paths;

  if (!Array.isArray(paths)) {
    paths = [paths];
  }

  return paths.reduce((allPaths, path) => {
    const newPaths = glob.sync(path);

    return allPaths.concat(newPaths);
  }, []);
}
