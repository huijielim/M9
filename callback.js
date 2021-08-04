const greeting = (fullname) => {
    return `Hello ${fullname}! Nice too meet you!`;
}

const helloUser = (firstName, lastName, callback) => {
    const name = `${firstName} ${lastName}`;

    return callback(name);
}

console.log(helloUser('John', 'Jones', greeting));