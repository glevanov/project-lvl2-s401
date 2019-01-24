import fs from 'fs';
import _ from 'lodash';

const gendiff = (firstConfig, secondConfig) => {
  const readJSON = filePath => JSON.parse(
    fs.readFileSync(filePath, 'utf-8'),
  );
  const firstFile = readJSON(firstConfig);
  const secondFile = readJSON(secondConfig);
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
