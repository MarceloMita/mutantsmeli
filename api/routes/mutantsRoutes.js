'use strict';

module.exports = (app) => {
  const mutant = require('../controllers/mutantsController');
  
  app.route('/mutant').
    post(mutant.createMutant);
  
  app.route('/stats').
    get(mutant.getStats);
}