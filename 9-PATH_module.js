const path = require('path')

// for getting the path separator
console.log(path.sep);

//
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

// to get the last file name in the path - basically the filename of the file we are referencing
const base = path.basename(filePath);
console.log(base);

// to get the absolute path of the file and not relative path that we were using earlier
// we need this becauase our files may also be used in different environments 
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);