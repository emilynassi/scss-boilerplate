const run = async () => {
  const create = require('./lib/foldercreate')
  const fileCreate = require('./lib/filecreate')
  const structure = require('./lib/structure')
  const gulpfile = require('./lib/scss-content/gulpcontent')
  const scss = require('./lib/scss-content/stylescss')
  const path = require('path');

  function createFolderInit() {
    return new Promise(function (resolve, reject) {
      //create folders first and return promise in order to put files in proper place
      create(process.cwd(), structure, err => {
        if (err) {
          reject(err);
          console.log(err)
        } else {
          resolve(console.log("Folders Created"));
        }
      });

    })

  }

  function initFunction() {
    let folderPromise = createFolderInit();
    folderPromise.then(function (result) {
      
      //create gulpfile
      fileCreate(gulpfile.filename, gulpfile.content);

      const targetPath = process.cwd();

      //create styles.scss file
      fileCreate(path.join(targetPath, scss.filename), scss.content);
    }, function (err) {
      console.log(err);
    })
  }
  initFunction();
}

run();




