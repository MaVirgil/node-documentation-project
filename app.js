import express from 'express';
import 'dotenv/config';
import path from 'path';

const app = express();
app.use(express.static('public'));

const publicPath = path.resolve('public');
const PORT = process.env.PORT || 8080;


/***************
 * PAGE ROUTES *
 ***************/

app.get('/', (req, res) => {
  res.sendFile(publicPath + '/pages/frontpage/frontpage.html');
});

app.get('/basics', (req, res) => {
  res.sendFile(publicPath + '/pages/basics/basics.html');
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
