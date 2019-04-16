import fs from 'fs';
import path from 'path';
import { generatedNumbersPath, fileEncoding } from '../utils';

const readFile = () => {
  let parsedResponse;
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(generatedNumbersPath), fileEncoding, (error, fileResponse) => {
      if (error) throw reject(error);
      parsedResponse = JSON.parse(fileResponse);
      resolve(parsedResponse);
    });
  });
};

export default readFile;
