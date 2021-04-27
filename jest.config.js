module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  coverageReporters: ['lcov'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
      '<rootDir>/node_modules/jest-transform-stub',
    '^.+\\.(jsx|js)?$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      '<rootDir>/node_modules/jest-transform-stub',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/*'],
}
