import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const extensions = {
  '.json': file => JSON.parse(file),
  '.yml': file => yaml.safeLoad(file),
};

const getFile = filePath => fs.readFileSync(filePath, 'utf-8');
const getExtension = filePath => path.extname(filePath);

const parse = filePath => extensions[getExtension(filePath)](getFile(filePath));

export default parse;
