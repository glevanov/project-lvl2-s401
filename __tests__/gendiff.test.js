import fs from 'fs';
import gendiff from '../src';

test('gendiff compares JSON', () => {
  const before = '__tests__/__fixtures__/before.json';
  const after = '__tests__/__fixtures__/after.json';
  const result = fs.readFileSync('__tests__/__fixtures__/result', 'utf8');

  expect(gendiff(before, after)).toBe(result);
});
