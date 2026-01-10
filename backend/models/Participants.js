const mongoose = require('mongoose')

const ParticipantsSchema = new mongoose.Schema({
  teamName: String,
  member1Name: String,
  member1Email: String,
  member1Phone: String,
  member2Name: String,
  member2Email: String,
  member2Phone: String,
  member3Name: String,
  member3Email: String,
  member3Phone: String,
})

const ParticipantsModel = mongoose.model("Participants",ParticipantsSchema)
module.exports = ParticipantsModel