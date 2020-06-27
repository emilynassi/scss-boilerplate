const run = async () => {
  const create = require('./lib/foldercreate')
  const fileCreate = require('./lib/filecreate')
  const partials = require('./lib/scss-content/partials')
  const structure = require('./lib/structure')
  const gulpfile = require('./lib/scss-content/gulpcontent')
  const indexCreate = require('./lib/indexcreate')
  const scss = require('./lib/scss-content/stylescss')
  const path = require('path')


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

      //create scss partials and index files
      const partialsArr = Object.entries(partials).map(([key, value]) => {
        return {
          category: key,
          files: value,
        }
      });


      const targetPath = process.cwd();

      //check for index file object config and create
      partialsArr.forEach(arr => {
        let content = indexCreate(arr.files);
        arr.files.forEach(file => {
          if (file.type === 'index') {
            fileCreate(path.join(targetPath, file.filename), content)
          }
          else {
            fileCreate(path.join(targetPath, file.filename), file.content)

          }
        })
      })

      //create styles.scss and styles.css file
      fileCreate(path.join(targetPath, scss.filename), scss.content);
      fileCreate(path.join(targetPath, './scss/styles.css'), '');

    }, function (err) {
      console.log(err);
    }
    
    )}
  initFunction();
}

run();





