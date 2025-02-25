const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 11000;

//middleware
app.use(cors());
app.use(express.json())

const users = [
      {id: 1, name: 'sabana', email: 'sabaedna@gmail.com'},
      {id: 2, name: 'sabnusw', email: 'sabaedna@gmail.com'},
      {id: 3, name: 'sabilade', email: 'sabedana@gmail.com'},
]


app.get('/',(req,res) =>{
      res.send('Users Management server is running')
});

app.get('/users' , (req,res)=>{
      res.send(users);
})

app.post('/users',(req,res) =>{
      console.log('post api hitting')
      console.log(req.body);
      const newUser = req.body;
      newUser.id = users.length + 1;
      users.push(newUser);
      res.send(newUser);
})



app.listen(port,() =>{
      console.log(`server is running on POST:${port}`)
})



/**
 * 1. create a post api on the server side
 * 2. client side send data via post
 * 3. set fetch method inside the fetch options (second parameter) 
 * 4. option will have three things: method
 * 5. options will have headers: 'content-type':'application/json'
 * 6. don't forget to send data dy JSON. Stringify in the body:
 * 7.on the server side: don't forget to use express.json()
 * 
 */