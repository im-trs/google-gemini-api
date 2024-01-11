const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

/**
 * Saves a string to a new file with a GUID as filename.
 * @param {string} content - The string content to be saved.
 */
async function saveStringToFile(content, type) {

    function createTimestampUuidString() {
        // return file name
        const timestamp = Date.now();
        if(type === undefined)
        {
            type = uuidv4();
        }
        return `${timestamp}_${type}.txt`;
    }

    const outputDir = path.join(__dirname, '../output');
    if (!fs.existsSync(outputDir)){
        fs.mkdirSync(outputDir);
    }

    const filePath = path.join(outputDir, createTimestampUuidString());

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log(`File was saved successfully: ${filePath}`);
    });
}

module.exports = saveStringToFile;