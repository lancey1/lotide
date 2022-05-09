const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  const arr = ['Hello', 'Lighthouse', 'Labs']
  it("returns ['Lighthouse', 'Labs'] for tail(['Hello', 'Lighthouse', 'Labs'])", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns 2 for tail(arr).length", () => {
    assert.strictEqual(tail(arr).length, 2); 
  });
});