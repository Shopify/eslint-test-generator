import fs from 'fs';
import path from 'path';
import assert from 'assert';

export default () => {
  it('cli generated source should match expected mocha output', () => {
    const expected = fs.readFileSync(path.join(__dirname, 'fixtures', 'expect-test-mocha'), 'utf8');
    const generatedTests = fs.readFileSync(path.join(__dirname, 'out-cli.js'), 'utf8');

    assert(generatedTests, expected, 'generated source matched expected source');
  });
};
