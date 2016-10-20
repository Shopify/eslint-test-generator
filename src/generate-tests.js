import handlebars from 'handlebars';
import jsStringEscape from 'js-string-escape';
import path from 'path';

import resolveTemplate from './resolve-template';

function isLintOk(opts, results) {
  if (opts.maxWarnings === -1) {
    return results.errorCount === 0;
  }

  return results.errorCount === 0 && results.warningCount <= opts.maxWarnings;
}

export default (opts, results) => {
  const handleBarsData = {
    results: results.map((lintResult) => {
      const file = path.relative(process.cwd(), lintResult.filePath);
      const lintOK = isLintOk(opts, lintResult);
      let message;

      if (lintOK) {
        message = `${file} should pass lint.`;
      } else {
        message = `${file} should pass lint.\\n${jsStringEscape(renderErrors(lintResult.messages))}`;
      }

      return {file, lintOK, message};
    }),
  };

  const template = handlebars.compile(resolveTemplate(opts));

  return template(handleBarsData);
};

function renderErrors(errors) {
  if (!errors) {
    return '';
  }

  return errors.map((error) => {
    return `${error.line}:${error.column} - ${error.message} ${error.ruleId !== null ? error.ruleId : ''}`;
  }).join('\n');
}
