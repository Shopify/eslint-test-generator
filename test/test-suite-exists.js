import assert from 'assert';

import {suites} from '../src/';


export default () => {
  // this test exists cause some other modules depend on this
  it('suites is exported', () => {
    const keys = Object.keys(suites);

    assert.ok(suites, 'suites exists');
    assert.ok(!Array.isArray(suites), 'suites is not an Array');
    assert.equal(typeof suites, 'object', 'suites is an object');
    assert.ok(keys.indexOf('mocha') > -1, 'mocha exists in suites');
    assert.ok(keys.indexOf('qunit') > -1, 'qunit exists in suites');
  });
};
