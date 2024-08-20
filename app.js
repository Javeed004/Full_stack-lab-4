const fs = require('fs');

// Path to the JSON file
const filePath = './data.json';

// Read JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse JSON data
    let jsonData = JSON.parse(data);

    console.log('Original Data:', jsonData);

    // Modify JSON data
    jsonData.name = 'John Wick';
    jsonData.age += 1; // Increment age by 1
    jsonData.city = 'New York'; // Change city

    // Convert JSON object back to a string
    const updatedData = JSON.stringify(jsonData, null, 2);

    // Write the updated data back to the JSON file
    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('File has been updated successfully.');

        // Read the updated JSON file to see the changes
        fs.readFile(filePath, 'utf8', (err, newData) => {
            if (err) {
                console.error('Error reading updated file:', err);
                return;
            }

            console.log('Updated Data:', JSON.parse(newData));
        });
    });
});
