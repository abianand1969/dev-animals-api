const express = require("express")
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

const app = express()

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://brainbeam:micron123@tainingcluster.wxbiw.mongodb.net/spantech';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        () => console.log('MongoDB Connected')
    )
    .catch(err => console.log("Error connecting MongoDB"))

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.on('open', () => {
    console.log('Mongo DB Connection Success')
})

require('./models/User')
const User = mongoose.model('users')

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
        // Sending the response
    res.send('Hello World!')

    // Ending the response
    res.end()
})

const animals = [{
        "id": 1,
        "name": "Abul-Abbas",
        "note": "An elephant given to Carolingian emperor Charlemagne by the Abbasid caliph Harun al-Rashid.",
        "marked": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerjCKD4sKi-CQWyPzxoo1QrslZdOqvvl70Q&usqp=CAU"
    },
    {
        "name": "Spoofy 1234",
        "note": "dfdfdf dv df saf dsf dfd fdsf sdfd",
        "marked": true,
        "id": 2
    },
    {
        "id": 3,
        "name": "Goofy",
        "note": "An elephant given to Carolingian emperor Charlemagne by the Abbasid caliph Harun al-Rashid.",
        "marked": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSerjCKD4sKi-CQWyPzxoo1QrslZdOqvvl70Q&usqp=CAU"
    },
    {
        "name": "Doofy",
        "note": "dfdfdf dv df saf dsf dfd fdsf sdfd",
        "marked": true,
        "id": 4
    }
]

const users = [{
        "id": 1,
        "firstName": "Anandan",
        "lastName": "Subbiah",
        "email": "subbiah.anandan@gmail.com",
        "password": "pass@123"
    },
    {
        "id": 2,
        "firstName": "Raghav",
        "lastName": "Anandan",
        "email": "raghav.anandan@gmail.com",
        "password": "pass@123"
    },
    {
        "firstName": "Dheeraj",
        "lastName": "Subbiah",
        "email": "dheeraj.anandan@gmail.com",
        "password": "dheer@123",
        "id": 3
    }
]

app.get('/animals', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(animals)
})

app.get('/users', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(users)
})

app.post('/users', (req, res) => {
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        imgUrl: req.body.imgUrl
    }
    new User(newUser).save().then(user => {
        console.log(user);
        res.send(user)
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server Started and Listening at port 5000')
})