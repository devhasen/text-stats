import fs from 'fs';

const file = process.argv[2];
const text = file ? fs.readFileSync(file, 'utf8') : fs.readFileSync(0, 'utf8');
const lines = text.split('\n').length;
const words = text.trim() ? text.trim().split(/\s+/).length : 0;
const chars = text.length;
console.log(lines, words, chars, file || '-');
