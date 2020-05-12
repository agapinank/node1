const fs = require('fs') //fs = file system  node package

fs.writeFile('some.txt', 'Hello World',( err )=> {
  if (err) {
    console.log(err)
  }
});
fs.appendFile('some.txt','Goodbye World!',( err )=> {
  if (err) {
    console.log(err)
  }
})
fs.readFile('some.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data);
})

fs.appendFile('food.js','food.push[,apple]',( err )=> {
  if (err) {
    console.log(err)
  }
})