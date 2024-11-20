export { };
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts',
    '!**/vendor/**', '!src/**/*.stories.tsx','!src/**/index{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  moduleNameMapper:{
    "\\.(css)$": "identity-obj-proxy"
  },
  transform: {
    ".(ts|tsx)": "ts-jest",
   
  },

  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/coverage",
    "package.json",
    "package-lock.json",
    "reportWebVitals.ts",
    "setupTests.ts",
    "index.tsx",
    "index.ts"
  ],
  coverageThreshold: {
    global: {
      branches:50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
}