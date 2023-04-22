module.exports = {
  extends: ["next", "prettier"],
  rules: {
    'no-console': 'off',
    'no-bitwise': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'object-curly-newline': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 0,
    'import/order': [
      'warn',
      {
        warnOnUnassignedImports: true,
        pathGroupsExcludedImportTypes: ['type'],
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
  }
}
