const fs = require('fs');

const fileCreate = (filename, content) => { 

    return fs.appendFileSync(filename, content);
}


module.exports = fileCreate;