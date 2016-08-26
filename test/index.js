import testAPIPaths from './test-api-paths';
import testAPITemplate from './test-api-template';
import testCLI from './test-cli';
import testMocha from './test-mocha';
import testQunit from './test-qunit';
import testSuiteExists from './test-suite-exists';

describe('test api', () => {
  testAPITemplate();
  testAPIPaths();
  testSuiteExists();
});

describe('test diferent templates', () => {
  testQunit();
  testMocha();
});

describe('ensure that the cli is working properly', () => {
  testCLI();
});
