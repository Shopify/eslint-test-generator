import testAPIPaths from './test-api-paths';
import testAPITemplate from './test-api-template';
import testCLI from './test-cli';
import testMocha from './test-mocha';
import testQunit from './test-qunit';

describe('test api', () => {
  testAPITemplate();
  testAPIPaths();
});

describe('test diferent templates', () => {
  testQunit();
  testMocha();
});

describe('ensure that the cli is working properly', () => {
  testCLI();
});
