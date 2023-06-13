const router = require('express').Router();
const MultimediaController = require('../src/controllers/MultimediaController');
const controller = new MultimediaController();
const PATH_UPLOAD_IMAGES = './src/assets/img';
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH_UPLOAD_IMAGES);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.get('/', controller.index);
router.post('/resize-image', upload.single('image') , controller.resizeImage);

module.exports = router