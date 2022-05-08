const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');
const users = [];

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}` }
  
    users.push(user);

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);
  
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
  
    const keyBuffer = Buffer.from(key, 'hex');
    
    if (timingSafeEqual(hashedBuffer, keyBuffer)) return true;
    
    return false;
}


console.log(signup('helo@bar.com', 'pa$$word'));
console.log(login('hello@bar.com', 'password'));

