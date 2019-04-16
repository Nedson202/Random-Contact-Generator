import express from 'express';
import routes from './routes';
import { errorHandler, defaultRoute } from '../utils';

const app = express();

app.use(defaultRoute, routes);
app.use(errorHandler);

export default app;
