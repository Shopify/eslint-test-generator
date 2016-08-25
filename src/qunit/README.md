# QUnit Generator

Example usage using QUnit Generator:
```javascript
import eslintTestGenerator from 'eslint-test-generator';

const output = eslintTestGenerator({
  suite: 'qunit',
  paths: [
    'test/**/*.js',
    'src/**/*.js',
  ],
});
```

Example output from QUnit generator:
```javascript
import assert from 'assert';

describe('lint all files', () => {
  it('../test/index.js should lint', () => {
    assert.ok(false, '../test/index.js should pass lint.\n3:1 - Unexpected console statement. (no-console)');
  });

  it('generate-tests.js should lint', () => {
    assert.ok(true, 'generate-tests.js should pass lint.');
  });

  it('index.js should lint', () => {
    assert.ok(true, 'index.js should pass lint.');
  });

  it('QUnit.js should lint', () => {
    assert.ok(true, 'QUnit.js should pass lint.');
  });
});
```
