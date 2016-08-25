export default function(opts) {
  return Object.assign(
    {
      suiteStart: "test('lint all files', (assert) => {",
      assert: "assert.ok({{lintOK}}, '{{message}}');",
      suiteEnd: '});',
    },
    opts
  );
};
