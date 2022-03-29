const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/angular-app-practical-test'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/angular-app-practical-test/'});
});
app.listen(process.env.PORT || 8080);
