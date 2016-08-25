import path from 'path';
import jsStringEscape from 'js-string-escape';

export default (opts, results) => {
  // opts defines the following we can use to generate tests
  // suiteStart - A String that defines the start of a test suite or a series of assertions
  // assert - A String that defines a single assertion or lint rolled into an assertion
  // suiteEnd - A String that defines the end of the test suite (eg function close)
  const generateAssertWithOpts = generateAssert.bind(null, opts);
  const imports = generateImports(opts);
  const suiteStart = generateSuiteStart(opts);
  const suiteEnd = generateSuiteEnd(opts);
  const assertions = results.map(generateAssertWithOpts)
    .join('\n');

  return `${imports}${suiteStart}${assertions}${suiteEnd}`;
};

function generateImports(opts) {
  if (!opts.imports) {
    return '';
  }

  return `${opts.imports.join('\n')}\n\n`;
}

function generateSuiteStart(opts) {
  if (!opts.suiteStart) {
    return '';
  }

  return `${opts.suiteStart}\n`;
}

function generateSuiteEnd(opts) {
  if (!opts.suiteEnd) {
    return '';
  }

  return `${opts.suiteEnd}\n`;
}

function generateAssert(opts, lint) {
  const relativePath = path.relative('src', lint.filePath);
  const errors = lint.messages;

  const regexFile = /\{\{ *file *\}\}/;
  const regexLintOk = /\{\{ *lintOK *\}\}/;
  const regexMessage = /\{\{ *message *\}\}/;

  let assertMessage = opts.assert;
  let message;

  if (lint.errorCount > 0) {
    message = `${relativePath} should pass lint.\\n${jsStringEscape(renderErrors(errors))}`;
  } else {
    message = `${relativePath} should pass lint.`;
  }

  // drop in templated values
  assertMessage = assertMessage.replace(regexFile, relativePath);
  assertMessage = assertMessage.replace(regexLintOk, lint.errorCount === 0);
  assertMessage = assertMessage.replace(regexMessage, message);
  assertMessage = assertMessage.split('\n')
    .map((messageLine) => {
      return `  ${messageLine}`;
    })
    .join('\n');

  return `${assertMessage}\n`;
}

function renderErrors(errors) {
  if (!errors) {
    return '';
  }

  return errors.map((error) => {
    return `${error.line}:${error.column} - ${error.message} (${error.ruleId})`;
  }).join('\n');
}
