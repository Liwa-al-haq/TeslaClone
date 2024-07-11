// const express = require('express')
// const cors = require('cors');
// const middleware = require('./middleware/auth');
// const mongoose = require('mongoose')
// const usersRouter = require('./routes/users')

// mongoose.connect('mongodb+srv://liwa7:bkk2T2goTCyUdPWT@cluster0.jimegns.mongodb.net/?retryWrites=true&w=majority')
// const db = mongoose.connection
// db.on('error', (err) => { console.error(err) })
// db.once('open',()=>{console.log('Connected to Database')})

// const app = express();

// const port = 5000;
// app.use(express.json())
// app.use(cors())
// app.use(middleware.decodeToken)



// app.use('/users',usersRouter)
// app.get("/", (req, res) => {
//     console.log(req.headers);
// })


// app.listen(port, () => {
//     console.log("Server Up and Running")
// })

const express = require('express');
const cors = require('cors');
const middleware = require('./middleware/auth');
const sequelize = require('../config/sequelize-config'); // Import Sequelize instance
const usersRouter = require('./routes/users');
const app = express();

const port = 5000;
app.use(express.json());
app.use(cors());
app.use(middleware.decodeToken);

// Define your Sequelize models and relationships here
const user = require('../models/user');
// Define your routes
app.use('/users', usersRouter);

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send('Hello World');
});

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
  });
});
