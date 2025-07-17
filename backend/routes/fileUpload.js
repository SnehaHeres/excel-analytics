const express = require('express');
const multer = require('multer');
const parsing = require('../controllers/parsing'); 

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.mimetype === 'application/vnd.ms-excel') {
        cb(null, true);
    } else {
        
        cb(new Error('Only .xls and .xlsx files are allowed!'), false);
    }
};


const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 1024 * 1024 * 5 } // Limit file size to 5MB (1024 KB * 1024 Bytes * 5)
});


router.post('/upload-excel', upload.single('excelFile'), parsing.processExcelFile);

module.exports = router;
