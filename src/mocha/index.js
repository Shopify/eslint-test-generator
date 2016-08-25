export default function(opts) {
  return Object.assign(
    {
      imports: [
        "import assert from 'assert';",
      ],
      suiteStart: "describe('lint all files', () => {",
      assert: "it('{{file}} should lint', () => {\n  assert.ok({{lintOK}}, '{{message}}');\n});",
      suiteEnd: '});',
    },
    opts
  );
};
