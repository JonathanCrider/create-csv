const fs = require('fs');
const data = require('./test-data');

const options = {
  encoding: 'utf8',
  flag: 'a+',
  mode: 0o666,
};

data.forEach(obj => {
  const newRow = `${obj.id},${obj.oktaId},${obj.email},${obj.password},${obj.name}\n`;
  console.log(newRow);
  fs.writeFileSync('data.csv', newRow, options);
});

console.log('File successfully updated');
console.log(fs.readFileSync('data.csv', 'utf8'));
