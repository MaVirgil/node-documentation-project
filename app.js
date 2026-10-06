import express from 'express';
import path from 'path';

const app = express();
app.use(express.static('public'));
const publicPath = path.resolve('public');

/***************
 * PAGE ROUTES *
 ***************/

app.get('/', (req, res) => {
  res.sendFile(publicPath + '/pages/frontpage/frontpage.html');
});

/**************
 * API ROUTES *
 **************/

app.get('/api/health', (req, res) => {
  res.send({
    data: 'OK',
  });
});

app.listen(8080, (error) => {
  if (error) {
    console.error('Failed to start server: ', error);
    return;
  }

  console.log('Server listening on port ', 8080);
});
