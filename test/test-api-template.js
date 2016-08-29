import fs from 'fs';
import path from 'path';
import assert from 'assert';

import generator from '../src/';

const TEMPLATE =
`describe('lint all files', () => {
  {{#each results}}
  it('{{file}} should lint', () => {
    assert.ok({{lintOK}}, '{{message}}');
  });
  
  {{/each}}
});
`;

export default () => {
  it('mocha should template correctly from template string', () => {
    const expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'expect-test-mocha'), 'utf8');

    const generatedTests = generator({
      template: TEMPLATE,
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
