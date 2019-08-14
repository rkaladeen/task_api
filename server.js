const express = require('express'),
         port = 8000,
      DB_NAME = "tasks",
           bp = require('body-parser'),
          app = express();

const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

app.use(bp.json());
app.use(express.static(__dirname + "/client/dist/client"));


require('./server/utils/dbcon')(DB_NAME);
require('./server/utils/routes')(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});