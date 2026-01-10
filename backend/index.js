const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ParticipantsModel = require('./models/Participants');

const app = express();
const port = 5000;
app.use(cors({
    origin: ['https://ativerse-3-0-hackathon.vercel.app', 'http://localhost:5173/'],
    methods: 'GET,POST,PUT',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true
}))

app.use(bodyParser.json({limit : '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

mongoose.connect("mongodb+srv://rishirakesh587_db_user:P89GrZ3GatR6Cysa@artiverse.st1etfp.mongodb.net/", {},6000000)
  .then(console.log("connected to server"))
  .catch((err) => console.log(err));


app.get('/', (req,res) => {
    res.json("Hello");
})

app.post('/addParticipants', async (req, res) => {
    const participantData = {
        teamName: req.body.teamName,
        member1Name: req.body.member1Name,
        member1Email: req.body.member1Email,
        member1Phone: req.body.member1Phone,
        member2Name: req.body.member2Name,
        member2Email: req.body.member2Email,
        member2Phone: req.body.member2Phone,
        member3Name: req.body.member3Name,
        member3Email: req.body.member3Email,
        member3Phone: req.body.member3Phone,
    };

    console.log("Participant:", participantData);

    try {
        const participant = await ParticipantsModel.create(participantData);
        res.status(200).json(participant);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while adding participant' });
    }
});

app.get('/participants', (req, res) => {
    ParticipantsModel.find({})
        .then(participant => res.json(participant))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'An error occurred while fetching foods' });
        });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
