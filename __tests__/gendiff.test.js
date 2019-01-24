import fs from 'fs';
import gendiff from '../src';

test('JSON comparison', () => {
  const before = '__tests__/__fixtures__/before.json';
  const after = '__tests__/__fixtures__/after.json';
  const result = fs.readFileSync('__tests__/__fixtures__/result', 'utf8');

  expect(gendiff(before, after)).toBe(result);
});

test('YML comparison', () => {
  const before = '__tests__/__fixtures__/before.yml';
  const after = '__tests__/__fixtures__/after.yml';
  const result = fs.readFileSync('__tests__/__fixtures__/result', 'utf8');

  expect(gendiff(before, after)).toBe(result);
});
