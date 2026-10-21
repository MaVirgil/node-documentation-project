import express from 'express';

const app = express();

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log('An error occurred when starting server: ', error);
    return;
  }

  console.log('App listening on port ', PORT);
});