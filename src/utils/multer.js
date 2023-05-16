let multer = require('multer');
let storage = multer.diskStorage({
    destination: process.cwd() + '/public/imgs',
    filename: (req, file, callback) => {
        let newName = Date.now() + '_' + file.originalname;
        callback(null, `${newName}`)
    }
})
let upload = multer({
    storage
});

module.exports = { upload };