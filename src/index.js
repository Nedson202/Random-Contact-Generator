import express from 'express';
import fs from 'fs';
import debug from 'debug';
import routes from './routes';
import { appUrl, port, logType, generatedFilesDirectory } from './utils';

const app = express();
const logger = debug(logType);

app.use(routes);

app.listen(port, () => {
  logger(`Server started on port: ${port}`);
  logger(appUrl);
});

app.use('*', (req, res) => res.status(404).json({
  message: 'Welcome! Check the documentation https://github.com/Nedson202/Random-Contact-Generator/blob/develop/README.md for valid routes',
}));

if (!fs.existsSync(generatedFilesDirectory)) {
  fs.mkdirSync(generatedFilesDirectory);
}

export default app;

