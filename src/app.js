const express = require ('express');
const app = express();

// serve static file 
app.use(express.static('public'));

// setup server && PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server up and running on http://127.0.0.1:${port}`);
})
