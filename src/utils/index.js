export { default as errorHandler } from '../middleware/defaultErrorHandler';

export const generatedNumbersPath = 'src/generatedFiles/phoneNumbers.txt';
export const generatedFilesDirectory = 'src/generatedFiles';
export const attachmentName = 'phoneNumbers.txt';
export const lengthOfNumbers = 10000;
export const minimumSize = 100000000;
export const maximumSize = 999999999;
export const descendingOrder = 'descending';
export const ascendingOrder = 'ascending';
export const fileEncoding = 'utf8';
export const appUrl = 'App: http://localhost:4000';
export const uncaughtException = 'uncaughtException';
export const sigterm = 'SIGTERM';
export const port = process.env.PORT || 4000;
export const exitZero = 0;
export const logType = 'log';
export const defaultRoute = '/api/v1/generator';
export const getMinMaxMessage = 'Maximum and minimum generated number retrieved successfully';
