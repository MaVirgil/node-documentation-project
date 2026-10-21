import express from 'express';
const app = express();

//serve our public path as a static directory
app.use(express.static('public'));

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log('An error occurred when starting server: ', error);
    return;
  }

  console.log('App listening on port ', PORT);
});