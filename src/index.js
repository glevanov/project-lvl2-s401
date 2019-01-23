import fs from 'fs';
import _ from 'lodash';

const gendiff = (firstConfig, secondConfig) => {
  const readJSON = filePath => JSON.parse(
    fs.readFileSync(filePath, 'utf-8'),
  );
  const firstFile = readJSON(firstConfig);
  const secondFile = readJSON(secondConfig);
  const keys = _.union(Object.keys(firstFile), Object.keys(secondFile));
  const acc = [];
  const getComparisonString = (key) => {
    if (_.has(firstFile, key) && _.has(secondFile, key)) {
      if (firstFile[key] === secondFile[key]) {
        return `    ${key}: ${firstFile[key]}`;
      }
      return `  + ${key}: ${secondFile[key]}`
      + '\n'
      + `  - ${key}: ${firstFile[key]}`;
    }
    if (_.has(firstFile, key) && !_.has(secondFile, key)) {
      return `  - ${key}: ${firstFile[key]}`;
    }
    if (!_.has(firstFile, key) && _.has(secondFile, key)) {
      return `  + ${key}: ${secondFile[key]}`;
    }
    return '';
  };

  keys.forEach(it => acc.push(getComparisonString(it)));
  acc.unshift('{');
  acc.push('}');

  return `${acc.join('\n')}\n`;
};

export default gendiff;
