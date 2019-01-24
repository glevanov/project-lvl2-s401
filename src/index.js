import _ from 'lodash';
import parse from './parsers';

const gendiff = (firstConfig, secondConfig) => {
  const firstFile = parse(firstConfig);
  const secondFile = parse(secondConfig);
  const keys = _.union(Object.keys(firstFile), Object.keys(secondFile));

  const result = keys.reduce((acc, key) => {
    if (_.has(firstFile, key) && _.has(secondFile, key)) {
      if (firstFile[key] === secondFile[key]) {
        return `${acc}\n    ${key}: ${firstFile[key]}`;
      }
      return `${acc}\n  + ${key}: ${secondFile[key]}\n  - ${key}: ${firstFile[key]}`;
    }
    if (_.has(firstFile, key) && !_.has(secondFile, key)) {
      return `${acc}\n  - ${key}: ${firstFile[key]}`;
    }
    return `${acc}\n  + ${key}: ${secondFile[key]}`;
  }, '');

  return `{${result}\n}\n`;
};

export default gendiff;
