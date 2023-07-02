const router = require('express').Router();
const MultimediaController = require('../src/controllers/MultimediaController');
const Multimedia = require('../src/Multimedia');
const controller = new MultimediaController();
const multer = require('multer');
const { validateResizeImageController } = require('../src/validators/MultimediaValidator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, Multimedia.PATH_UPLOAD_IMAGES);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.get('/', controller.index);
router.post('/resizeImage', upload.single('image'), validateResizeImageController, controller.resizeImage);

module.exports = router