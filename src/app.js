import express from 'express';
import 'dotenv/config';
import pageRouter from './routes/pages.route.js';

const app = express();
app.use(express.static('public'));

const PORT = Number(process.env.PORT) || 8080;

// Page routes
app.use('/', pageRouter);

// API routes (move these to own router if more routes are added in future)
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

  console.log('Server listening on port', PORT);
});
