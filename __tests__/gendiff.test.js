import gendiff from '../src';

const before = '';
const after = '';
const result = '';

test('gendiff compares JSON', () => {
  expect(gendiff(before, after)).toBe(result);
});