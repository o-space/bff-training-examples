const fs = require('fs');

const timeScheduled = Date.now();

const wait = (milliseconds) => {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {}
}

setTimeout(() => {
    const delay = Date.now() - timeScheduled;
    console.log(`${delay}ms`);
}, 100);

fs.readFile('4-input.txt', () => {
    wait(200);
})
