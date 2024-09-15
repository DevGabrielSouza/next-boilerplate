module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'type-case': [0],
    'subject-case': [0]
  }
}
