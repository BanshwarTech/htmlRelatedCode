const str = "The Quick Browen  Fox Jumps Over The Azy Dog ";

const obj = {};
for (let x of str) {
    if (obj[x]) {
        obj[x] += 1;
    } else {
        obj[x] = 1;
    }
}