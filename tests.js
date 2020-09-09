const happybytes = require("./happybytes.js");

let a = [1337, 1333, 85869345, 33305495, 1, 55555];   //throw as many sizes as you like in here, of course in bytes

for (let b of a)
{
    console.log(happybytes(b));
}
