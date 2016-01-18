import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transformFileSync } from 'babel-core';
import plugin from '../src';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('babel transform plugin', () => {
  for(let testName of fs.readdirSync(path.join(__dirname, 'fixtures'))) {
    it(`should transform ${testName}`, () => {
      const testDir = path.join(__dirname, 'fixtures', testName);
      const actual = transformFileSync(path.join(testDir, 'actual.js'), {
        plugins: [plugin]
      }).code;
      const expected = fs.readFileSync(path.join(testDir, 'expected.js')).toString();
      assert.equal(trim(actual), trim(expected));
    });
  }
  
});
