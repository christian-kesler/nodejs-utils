// HOW TO USE
// ================================================================

// ROUTE
// var formidable_improved = require('./utils/formidable_improved.js')
// 
// app.post('/upload', function (req, res) {
//   formidable_improved.upload(req, '/../../model/uploads/', res.render('pages/uploaded'))
// })

// FORM
// <form action="upload" method="POST" enctype="multipart/form-data">
//   <input type="file" name="filetoupload"><br>
//   <input type="submit">
// </form>

// ================================================================


var formidable = require('formidable');
var fs = require('fs')

var formidable_improved = {

  upload: function (req, location, view) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.filepath;
      var newpath = __dirname + location + files.filetoupload.originalFilename;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        view
      });
    });
  },
};

module.exports = formidable_improved;
