// import the path module from node
import path from 'path';

// serve our HTML-file using its absolute path
app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/frontpage.html'));
});