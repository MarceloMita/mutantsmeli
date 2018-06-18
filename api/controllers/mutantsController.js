'use strict';

const mongoose = require('mongoose');
const Mutant = mongoose.model('Mutant');
const mutantService = require('../services/mutants');

exports.createMutant = (req, res) => {
  const dna = req.body.dna;
  const rawDna = dna.join('');
  
  Mutant.findOne({ rawDna: rawDna }, (err, mutant) => {
    if(err) {
      res.send(err);
    }
    if(mutant) {
      const status = mutant.isMutant ? 200 : 403;
      console.log("mutant exists: ", mutant);
      res.status(status).send();
    } else {
      let newMutant = new Mutant(req.body);
      newMutant.isMutant = mutantService.isMutant(dna);  
      newMutant.rawDna = rawDna;
      newMutant.save((err, createdMutant) => {
        if(err) {
          res.send(err);
        }
        console.log("mutant doesnt exists: ", createdMutant);
        const status = createdMutant.isMutant ? 200 : 403;
        res.status(status).send();
      });
    }
  });
}