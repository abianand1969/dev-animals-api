const express = require("express")

const app = express()

app.get('/', (req, res) => {

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
    res.send(animals)
})

app.get('/users', (req, res) => {
    res.send(users)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('Server Started and Listening at port 5000')
})