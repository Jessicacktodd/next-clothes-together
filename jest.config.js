// jest.config.js

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path to your Next.js application
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom', // Set up a test environment that mimics the browser
};

module.exports = createJestConfig(customJestConfig);
