suite('lint all files', () => {
  {{#each results}}
  test('{{file}} should lint', () => {
    assert.ok({{lintOK}}, '{{message}}');
  });

  {{/each}}
});
