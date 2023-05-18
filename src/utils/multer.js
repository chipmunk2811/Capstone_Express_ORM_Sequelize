let multer = require('multer');
let storage1 = multer.diskStorage({
    destination: process.cwd() + '/public/imgs',
    filename: (req, file, callback) => {
        let newName = Date.now() + '_' + file.originalname;
        callback(null, `${newName}`)
    }
});

let storage2 = multer.diskStorage({
    destination: process.cwd() + '/public/imgs/avatar',
    filename: (req, file, callback) => {
        let newName = Date.now() + '_' + file.originalname;
        callback(null, `${newName}`)
    }
});

let upload = multer({
    storage: storage1
});
let uploadAvatar = multer({
    storage: storage2
});

module.exports = { upload, uploadAvatar };