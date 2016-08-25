test('lint all files', (assert) => {
  {{#each results}}
  assert.ok({{lintOK}}, '{{message}}');
  {{/each}}
});