module('lint all files');

{{#each results}}
test('{{file}}', (assert) => {
  assert.ok({{lintOK}}, '{{message}}');
});

{{/each}}