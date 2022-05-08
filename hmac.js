const { createHmac } = require('crypto');

const password = 'secret';
const message = 'Hello World!';

const hmac = createHmac('sha256', password).update(message).digest('hex');

console.log(hmac)

