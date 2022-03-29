const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./front-end/dist/angular-app-practical-test'));
app.get('/*', function(req,res) {res.sendFile(path.join('./front-end/dist/angular-app-practical-test/index.html'));
});
app.listen(process.env.PORT || 8080);
