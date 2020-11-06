module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 1 }],
        'categories:bestPractices': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 1 }],
      },
      assertMatrix: [
        {
          matchingUrlPattern: '/404.html',
          assertions: {
            'categories:performance': 'off',
            'categories:accessibility': 'off',
            'categories:bestPractices': 'off',
            'categories:seo': 'off',
          },
        },
      ],
    },
  },
};
