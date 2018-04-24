const fs = require('fs');

fs.watchFile('log.txt', (curr, prev) => {
  console.log('%j', curr)
  console.log(`the current mtime is: ${curr.mtime}`);
  console.log(`the previous mtime was: ${prev.mtime}`);
});
