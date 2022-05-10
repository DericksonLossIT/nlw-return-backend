import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.send('Hello world!')
})

app.listen(3333, () => {
    console.log('Server is running on port 3333!')
})

//SQLite
//Prisma