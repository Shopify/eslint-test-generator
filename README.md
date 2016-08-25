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
  ]
});

console.log(output); // generated JS source for tests using mocha
```

When the above is done `src` and `test` directories will be linted by `eslint` and the output would look something like this:

```javascript
describe('lint all files', () => {
  it('src/a.js should lint', () => {
    assert.ok(true, 'test/test-src-to-lint/some-warnings.js should pass lint.');
  });

  it('src/b.js should lint', () => {
    assert.ok(false, 'test/test-src-to-lint/some-errors.js should pass lint.\n1:4 - Parsing error: Unexpected token ');
  });
});
```

## API Documentation

The following options can be passed to `eslint-test-generator`:
- `template` - This can be a `handlebars` template string or one of the following values:
  + `'mocha'`
  + `'qunit'`
- `paths` - Either a glob String or Array an array of globs. eg:
  + `src/` 
  + `['src/filesToLint/**.js', 'test/'']`
  + etc.

## CLI Usage

`eslint-test-generator` also provides a CLI api. The CLI takes two arguments:
- `template` - A path to a `handlebars` template or one of the or one of the following values:
  + `'mocha'`
  + `'qunit'`
- `paths` - either one path or a list of paths eg.
  + `src/`
  + `src/,test/`

A typical CLI call looks like this:
```bash
$ eslint-test-generator mocha src/,test/ > eslint-tests.js
```

Using a different `handlebars` template:
```bash
$ eslint-test-generator template/yourFavouritTestSuite.hbs src/ > eslint-tests.js
```


## License

MIT, see [LICENSE.md](http://github.com/mikkoh/eslint-test-generator/blob/master/LICENSE.md) for details.
