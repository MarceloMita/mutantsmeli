'use strict';

const MUTANT_MARKERS = ['AAAA', 'TTTT', 'CCCC', 'GGGG'];

exports.isMutant = (dna) => {
  let counter = 0;
  for(let i = 0; i < dna.length; i++) {
    const line = dna[i];
    for(let j = 0; j < line.length; j++) {
      if(j < line.length - 3) {
        // Check horizontal right
        const r = line.substring(j, j + 4);
        counter += MUTANT_MARKERS.includes(r) ? 1 : 0;
        console.log('r',i, j, ': ', r);
        
        // Check diagonal right/down
        if(i < dna.length - 3) {
          console.log('i: ', i, 'dna.length: ', dna.length);
          let rd = '';
          for(let k = 0; k < 4; k++){
            rd += dna[i + k][j + k];
          }
          counter += MUTANT_MARKERS.includes(rd) ? 1 : 0;
          console.log('rd',i, j, ': ', rd);
        }
        
        // Check diagonal right/up
        if(i >= 3) {
          let ru = '';
          for(let k = 0; k < 4; k++) {
            ru += dna[i - k][j + k];
          }
          counter += MUTANT_MARKERS.includes(ru) ? 1 : 0;
          console.log('ru', i, j, ': ', ru);
        }
      } 
      
      // Check vertical down
      if(i < dna.length - 3) {
        let d = '';
        for(let k = 0; k < 4; k++) {
          d += dna[i + k][j];
        }
        counter += MUTANT_MARKERS.includes(d) ? 1 : 0;
        console.log('d', i, j, ': ', d);
      }
      
      if(counter > 1) {
        return true;
      }
    }
  }
  return false;
}
