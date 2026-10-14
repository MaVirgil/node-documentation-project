import express from 'express';
import 'dotenv/config';
import path from 'node:path';
import naiveRender from './naiveRender/index.js';

const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 8080;

const publicPath = path.resolve('public');
const pagesPath = path.resolve('src/pages');

const testPage = naiveRender.fromTemplate(`${pagesPath}/templates/base.html`)
  .withFragment(`${pagesPath}/content/frontpage.html`, 'content')
  .withProps({
    title: "Node Project"
  })
  .withStylesheet('/pages/frontpage/style/frontpage.css')
  .withScript('/global/scripts/test2.js', {
    defer: false,
  });


/***************
 * PAGE ROUTES *
 ***************/

app.get('/', (req, res) => {
  res.send(testPage.render());
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
