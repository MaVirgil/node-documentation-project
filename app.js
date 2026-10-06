import express from 'express';
const app = express();

app.get('/health', (req, res) => {
  res.send({
    data: 'OK'
  });
});

app.listen(8080, (error) => {
  if (error) {
    console.error('Failed to start server: ', error);
    return;
  }

  console.log('Server listening on port ', 8080);
})