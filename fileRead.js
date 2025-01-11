//file1 read
//file2 read
//file3 read
import fs from 'fs';
//here below it reads data from file.md file suppose its contents are numerous.
//in the callback of readfile is called unlink so that for non blocking
fs.readFile('/file1.md', (err, data) => {
  if (err) throw err;
  console.log(data);
  fs.unlink('/file1.md', unlinkErr => {
    if (unlinkErr) throw unlinkErr;
  });
});
console.log("file read 1 completed");
//reading another file ensuring the task 1 that is file reading is completed.
fs.readFile('/file2.md', (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.unlink('/file2.md', unlinkErr => {
      if (unlinkErr) throw unlinkErr;
    });
  });
  
  console.log("file read 2 completed");
  fs.readFile('/file3.md', (err, data) => {
    if (err) throw err;
    console.log(data);
    fs.unlink('/file3.md', unlinkErr => {
      if (unlinkErr) throw unlinkErr;
    });
  });
  console.log("file read 3 completed");