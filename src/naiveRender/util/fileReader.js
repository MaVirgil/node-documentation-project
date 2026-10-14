import fs from 'node:fs';

function readFromFile(path) {
  if (!path) {
    throw new Error('readFromFile(): must be given a valid path as argument');
  }
  const data = fs.readFileSync(path, 'utf8');

  return data;
}

export default {
  readFromFile,
};
