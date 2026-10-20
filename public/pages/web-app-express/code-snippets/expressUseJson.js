import express from 'express';

const app = express();

// Use the built-in JSON middleware
app.use(express.json());

// Routes [...

// ...]

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log('An error occured when starting server: ', error);
    return;
  }

  console.log('App listening on port ', PORT);
});