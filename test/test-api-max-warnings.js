import fs from 'fs';
import path from 'path';
import assert from 'assert';

import generator from '../src/';

export default () => {
  it('should allow a max warnings value to be passed', () => {
    const expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'expect-test-warning-mocha'), 'utf8');

    const generatedTests = generator({
      template: 'mocha',
      paths: [
        'test/test-src-to-lint/**/*.js',
      ],
      maxWarnings: 0,
      optsEslint: {
        configFile: path.resolve(__dirname, '..', '.eslintrc.json'),
        ignore: false,
      },
    });

    assert.equal(generatedTests, expected, 'generated source matched expected source');
  });

  it('should actually allow the max number of warnings', () => {
    const expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'expect-test-two-passed-warning-mocha'), 'utf8');

    const generatedTests = generator({
      template: 'mocha',
      paths: [
        'test/test-src-to-lint/**/*.js',
      ],
      maxWarnings: 2,
      optsEslint: {
        configFile: path.resolve(__dirname, '..', '.eslintrc.json'),
        ignore: false,
      },
    });

    assert.equal(generatedTests, expected, 'generated source matched expected source');
  });
};
