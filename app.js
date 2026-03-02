const fs = require('fs'); // Import the fs module to interact with the filesystem

// Asynchronously read the file 'myfile.txt' with UTF-8 encoding
fs.readFile('myfile.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error("Error reading file:" + err); // Handle any errors during file reading
    return; // Exit if an error occurs
  }
  console.log('File content:' + data); // Log the file content
});

// This line is logged immediately before the file is read
console.log("Reading file ...(this runs first !)");