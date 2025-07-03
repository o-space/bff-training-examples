const fs = require('fs');

const timeScheduled = Date.now();

const wait = (milliseconds) => {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {}
}

const callback = () => {
    const delay = Date.now() - timeScheduled;
    console.log(`${delay}ms`);
}

setTimeout(callback, 100);

fs.readFile('4-input.txt', () => {
    wait(200);
})
