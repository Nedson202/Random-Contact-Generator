import express from 'express';
import debug from 'debug';
import routes from './routes';
import {
  appUrl, sigterm, uncaughtException, port,
  exitZero, logType
} from './utils';

const app = express();
const logger = debug(logType);

app.use(routes);

app.listen(port, () => {
  logger(`Server started on port: ${port}`);
  logger(appUrl);
});

process.on(uncaughtException, () => {
  process.exit(exitZero);
});

process.on(sigterm, () => {
  process.exit(exitZero);
});

export default app;

