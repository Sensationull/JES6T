const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.static('client/dist'));

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}~!?`);
});