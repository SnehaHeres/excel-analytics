const path = require('path');
const xlsx = require('xlsx');
const fs = require('fs');


exports.processExcelFile = (req, res) => {
    
    if (!req.file) {
        return res.status(400).json({ message: 'No Excel file uploaded.' });
    }

    const filePath = req.file.path; 
    console.log('File received for processing:', req.file.originalname, 'at', filePath);

    try {
        
        const workbook = xlsx.readFile(filePath);
        const sheetNameList = workbook.SheetNames;

        if (sheetNameList.length === 0) {
            
            fs.unlink(filePath, (err) => {
                if (err) console.error('Error deleting temporary file:', err);
            });
            return res.status(400).json({ message: 'Excel file contains no sheets.' });
        }

        
        const sheet = workbook.Sheets[sheetNameList[0]];
        const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        if (jsonData.length === 0) {
            fs.unlink(filePath, (err) => {
                if (err) console.error('Error deleting temporary file:', err);
            });
            return res.status(400).json({ message: 'Excel sheet is empty or has no data.' });
        }

        const columnHeaders = jsonData[0];
        const dataRows = jsonData.slice(1);

        fs.unlink(filePath, (err) => {
            if (err) console.error('Error deleting temporary file:', err);
            else console.log('Temporary file deleted successfully.');
        });

       
        res.status(200).json({
            message: 'Excel file parsed successfully.',
            fileName: req.file.originalname,
            columnHeaders: columnHeaders,
            data: dataRows
        });

    } catch (error) {
        
        console.error('Error parsing Excel file:', error);

        fs.unlink(filePath, (err) => {
            if (err) console.error('Error deleting temporary file after parse failure:', err);
        });
        res.status(500).json({ message: 'Error processing Excel file.', error: error.message });
    }
};
