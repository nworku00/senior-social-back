var express = require('express');
var router = express.Router();

const users = {
  1: {
    id: 001,
    username: 'Bartholomew D. Lester',
  },
  2: {
    id: 002,
    username: 'Frances Grayson'
    },
};

const posts = {
  1: {
    id: 001,
    date:"" ,
    text: "" ,
    userID:"",
  },
  2: {
    id: 002,
    date:"" ,
    text: "" ,
    userID:"",
  },
};


/* GET users listing. */

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
  
})

app.listen(process.env.PORT,() => 
  res.send(`your post has been uploaded ${process.env.PORT}!`),
);

module.exports = router;
