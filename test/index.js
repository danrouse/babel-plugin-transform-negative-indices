import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transformFileSync } from 'babel-core';
import plugin from '../src';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('babel transform plugin', () => {
  it('should transform negative array indices', () => {
    const testDir = path.join(__dirname, 'negative-indices');
    const actual = transformFileSync(path.join(testDir, 'actual.js'), {
      plugins: [plugin]
    }).code;
    const expected = fs.readFileSync(path.join(testDir, 'expected.js')).toString();

    console.log('rendered', actual);
    assert.equal(trim(actual), trim(expected));
  });
});
