const { linguagens } = require('../data/db');
module.exports = {
 languages({lang_id}){
        const sel = linguagens
              .filter(l => l.id === lang_id)
              return sel ? sel[0] : null;
}
}