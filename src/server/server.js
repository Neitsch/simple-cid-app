import express from 'express';
import morgan from 'morgan';
import logger, { write } from './util/logger';

const app = express();
app.use(morgan('combined', { stream: write }));

app.get('/', (req, res) => {
  res.send('hello, world!');
  logger.debug('Call');
});

app.listen(3000);
