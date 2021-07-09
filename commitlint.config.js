module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-min-length': [2, 'always', 10], // subject内容的最小长度为10, 'type: ' + subject
  },
};
