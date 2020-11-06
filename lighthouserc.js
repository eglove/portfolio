module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',
    },
    assert: {
      assertMatrix: [
        {
          matchingUrlPattern: 'https://[^/]+/blog',
          assertions: {
            'categories:performance': ['error', { minScore: 0.9 }],
            'categories:accessibility': ['error', { minScore: 1 }],
            'categories:bestPractices': ['error', { minScore: 1 }],
            'categories:seo': ['error', { minScore: 1 }],
          },
        },
        {
          matchingUrlPattern: 'https://[^/]+/portfolio',
          assertions: {
            'categories:performance': ['error', { minScore: 0.9 }],
            'categories:accessibility': ['error', { minScore: 1 }],
            'categories:bestPractices': ['error', { minScore: 1 }],
            'categories:seo': ['error', { minScore: 1 }],
          },
        },
      ],
    },
  },
};
