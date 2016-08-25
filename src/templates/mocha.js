describe('lint all files', () => {
  {{#each results}}
  it('{{file}} should lint', () => {
    assert.ok({{lintOK}}, '{{message}}');
  });
  
  {{/each}}
});
