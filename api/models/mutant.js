const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MutantSchema = new Schema({
  dna: {
    type: [{
       type: String
    }],
    required: "No dna given, please enter a dna sequence"
  },
  isMutant: {
    type: Boolean
  },
  rawDna: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }  
});

module.exports = mongoose.model('Mutant', MutantSchema);