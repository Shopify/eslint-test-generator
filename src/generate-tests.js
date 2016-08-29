import handlebars from 'handlebars';
import jsStringEscape from 'js-string-escape';
import path from 'path';

import resolveTemplate from './resolve-template';

export default (opts, results) => {
  const handleBarsData = {
    results: results.map((lintResult) => {
      const file = path.relative(process.cwd(), lintResult.filePath);
      const lintOK = lintResult.errorCount === 0;
      let message;

      if (lintResult.errorCount > 0) {
        message = `${file} should pass lint.\\n${jsStringEscape(renderErrors(lintResult.messages))}`;
      } else {
        message = `${file} should pass lint.`;
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
