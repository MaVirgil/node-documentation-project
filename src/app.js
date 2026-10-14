import express from 'express';
import 'dotenv/config';
import { pages } from './pageBuilder.js';

const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

//TODO: move routes into seperate module

/***************
 * PAGE ROUTES *
 ***************/

app.get('/', (req, res) => {
  res.send(pages.frontPage.render());
});

app.get('/basics', (req, res) => {
  res.send(pages.basics.render());
});

/**************
 * API ROUTES *
 **************/

app.get('/api/health', (req, res) => {
  res.send({
    data: 'OK',
  });
});

app.listen(PORT, (error) => {
  if (error) {
    console.error('Failed to start server:', error);
    return;
  }

  console.log('Server listening on port', Number(PORT));
});
