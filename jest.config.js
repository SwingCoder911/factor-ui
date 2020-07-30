module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    'js',
    'json',
    // tell Jest to handle `*.vue` files
    'vue',
    'svg',
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.svg$': '<rootDir>/src/test/mocks/svgTransform.js',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '.*\\.svg$': './src/test/mocks/svgMock.js',
  },
  testMatch: ['**/*.spec.(js|jsx|ts|tsx)'],
  setupFilesAfterEnv: ['./src/test/jest.setup.js'],
};
