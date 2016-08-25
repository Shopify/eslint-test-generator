import glob from 'glob';
import * as eslint from 'eslint';

import mocha from './mocha';
import qunit from './qunit';
import generateTests from './generate-tests';

const CLIEngine = eslint.CLIEngine;
const SUITES = {mocha, qunit};

export default (opts) => {

  if (!opts) {
    throw new Error('You must pass in an options object');
  }

  if (!opts.assert && !opts.suite) {
    throw new Error(`You should either pass a variable suite that's value is either:\n${Object.keys(SUITES).map((suite) => `- ${suite}`).join('\n')}\nOr pass in an assert template\n`);
  } else if (opts.suite && !SUITES[opts.suite]) {
    throw new Error(`suite should be one of the following values:\n${Object.keys(SUITES).map((suite) => `- ${suite}`).join('\n')}\n`);
  }

  if (!opts.paths) {
    throw new Error('You must pass in paths which either a String of files to lint or an Array of paths to lint');
  }

  let options = opts;

  // generate opts from suite
  if (opts.suite) {
    options = SUITES[opts.suite](opts);
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

export {mocha};
