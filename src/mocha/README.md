# Mocha Generator

Example usage using Mocha Generator:
```javascript
import eslintTestGenerator from 'eslint-test-generator';

const output = eslintTestGenerator({
  suite: 'mocha',
  paths: [
    'test/**/*.js',
    'src/**/*.js',
  ],
});
```

Example output from Mocha generator:
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

  it('mocha.js should lint', () => {
    assert.ok(true, 'mocha.js should pass lint.');
  });
});
```
