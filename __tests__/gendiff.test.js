import gendiff from '../src';
import fs from 'fs';

const before = '__tests__/__fixtures__/before.json';
const after = '__tests__/__fixtures__/after.json';
const result = fs.readFileSync('__tests__/__fixtures__/result', 'utf8');

test('gendiff compares JSON', () => {
  expect(gendiff(before, after)).toBe(result);
});