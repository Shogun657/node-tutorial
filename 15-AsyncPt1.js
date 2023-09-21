const { readFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    else {
        const first = data;
        readFile('./content/second.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            else {
                const second = data;
                console.log(`This is the result : ${first} ; ${second}`);
            }
        })
    }
})

// The code you've provided is a JavaScript code snippet that uses the Node.js `fs` (file system) 
// module to read the contents of two files, 'first.txt' and 'second.txt', and then log the 
// contents of both files in the console.

// Here's a breakdown of what the code does:

// 1. It imports the `readFile` function from the 'fs' module using destructuring assignment.

// 2. It uses the `readFile` function to read the contents of 'first.txt' with the 'utf8' encoding.
//    When the file reading is complete or encounters an error, it executes a callback function.

// 3. In the callback function for reading 'first.txt', it checks for errors. If an error occurs,
//  it logs the error message to the console and returns, indicating that the operation is complete.

// 4. If there is no error in reading 'first.txt', it stores the contents of 'first.txt' in the
//  `first` variable.

// 5. It then proceeds to read the contents of 'second.txt' using the `readFile` function with 
// the same error-checking and callback mechanism as for 'first.txt'.

// 6. In the callback function for reading 'second.txt', it again checks for errors. If an error 
// occurs, it logs the error message to the console and returns.

// 7. If there is no error in reading 'second.txt', it stores the contents of 'second.txt' in the 
// `second` variable.

// 8. Finally, it logs a message to the console, combining the contents of both files using string
//  interpolation (`${}`).

// This code essentially reads the contents of two files sequentially and logs them to the 
// console. If any errors occur during file reading, it logs the error message. Otherwise, it 
// combines and logs the contents of both files.

// Make sure that the file paths 'first.txt' and 'second.txt' are correct and that these files 
// exist in the specified locations. Also, ensure that you have the necessary permissions to read 
// these files.