import testAPIPaths from './test-api-paths';
import testAPITemplate from './test-api-template';
import testAPIMaxWarnings from './test-api-max-warnings';
import testMocha from './test-mocha';
import testQunit from './test-qunit';
import testSuiteExists from './test-suite-exists';

describe('test api', () => {
  testAPITemplate();
  testAPIPaths();
  testAPIMaxWarnings();
  testSuiteExists();
});

describe('test diferent templates', () => {
  testQunit();
  testMocha();
});

