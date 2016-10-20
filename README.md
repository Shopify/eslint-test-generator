# eslint-test-generator

Will create test scripts based on eslint output. Basically developers can't ignore linting if it's integrated into ci. `eslint-test-generator` out of the box currently supports:

- `mocha`
- `qunit`

But can be easily extended by passing custom `handlebars` templates.

## Usage

[![NPM](https://nodei.co/npm/eslint-test-generator.png)](https://www.npmjs.com/package/eslint-test-generator)

## Example
The following is an example of how to use `eslint-test-generator` with Mocha:
```javascript
import generator from 'eslint-test-generator';

const output = generator({
  template: 'mocha',
  paths: [
    'src/',
    'test/**/*.js'
  ],
  maxWarnings: 0
});

console.log(output); // generated JS source for tests using mocha
```

When the above is done `src` and `test` directories will be linted by `eslint` and the output would look something like this:

```javascript
suite('lint all files', () => {
  test('src/a.js should lint', () => {
    assert.ok(true, 'test/test-src-to-lint/some-warnings.js should pass lint.');
  });

  test('src/b.js should lint', () => {
    assert.ok(false, 'test/test-src-to-lint/some-errors.js should pass lint.\n1:4 - Parsing error: Unexpected token ');
  });
});
```

## API Documentation

The following options can be passed to `eslint-test-generator`:
- `template` - Can be one of three things. A path to a `handlebars` template file or a `handlebars` template string or one of the following values:
  + `'mocha'`
  + `'qunit'`
- `paths` - Either a glob String or Array an array of globs. eg:
  + `src/` 
  + `['src/filesToLint/**.js', 'test/'']`
  + etc.
- `maxWarnings` - Optional (default: -1), equivalent to `--max-warnings` on
  eslint's CLI. `-1` means there is no maximum.

## License

MIT, see [LICENSE.md](http://github.com/mikkoh/eslint-test-generator/blob/master/LICENSE.md) for details.

<img src="https://cdn.shopify.com/shopify-marketing_assets/builds/19.0.0/shopify-full-color-black.svg" width="200" />
