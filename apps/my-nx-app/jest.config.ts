process.env.POWERTOOLS_DEV = 'true';

import { type Config } from 'jest';
const config: Config = {
  displayName: 'my-nx-app',
  preset: '../../jest-bs.preset.js',
  globals: {},
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/tests/'],
  coverageDirectory: '../../coverage/apps/my-nx-app',
  setupFilesAfterEnv: [
    '<rootDir>/src/util/test.setup.ts',
    'jest-mock-console/dist/setupTestFramework.js',
  ],
};

export default config;
