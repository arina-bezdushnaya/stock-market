import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  // moduleNameMapper: {
  //   axios: '<rootDir>/src/node_modules/axios/dist/node/axios.cjs',
  // },
  notify: true,
  preset: 'ts-jest',
  rootDir: 'src',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(antd)/)',
    'node_modules/(?!react-resize-detector)',
    // 'node_modules/(?!axios)',
  ],
  verbose: true,
};

export default config;
