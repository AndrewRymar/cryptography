const { createHash } = require('crypto');
const password = 'Hello World';

function hash(str) {
    return createHash('sha256').update(str).digest('hex');
}

console.log(hash(password));

