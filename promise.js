const isIt5Yet = true;

const workday = new Promise((resolve, reject) => {
    if (isIt5Yet) {
        const whatToDo = 'Go to the beach!';
        resolve(whatToDo);
    } else {
        reject(new Error("It's not 5:00 yet!"));
    }
});

workday
.then((result) => console.log(result))
.catch((err) => console.log(err.message));