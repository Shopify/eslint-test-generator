import fs from 'fs';
import path from 'path';
import assert from 'assert';

import generator from '../src/';


export default () => {
  it('mocha should template correctly', () => {
    const expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'expect-test-mocha'), 'utf8');

    const generatedTests = generator({
      template: 'mocha',
      paths: [
        'test/test-src-to-lint/**/*.js',
      ],
      optsEslint: {
        configFile: path.resolve(__dirname, '..', '.eslintrc.json'),
        ignore: false,
      },
    });

    assert.equal(generatedTests, expected, 'generated source matched expected source');
  });
};
