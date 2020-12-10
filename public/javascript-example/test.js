const a = 10;
const b = 10;

const p1 = process.argv[2];
const p2 = process.argv[3] || 0;

console.log('====================================');
console.log("Hey look!, I'm using javascript in your terminal");
console.log('====================================');

console.log('\x1b[36m%s\x1b[0m', a ** b);

console.log('\x1b[37m%s\x1b[0m', p1 ** p2);
