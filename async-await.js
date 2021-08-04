const isIt5Yet = false;

const workday = new Promise((resolve, reject) => {
    if (isIt5Yet) {
        const whatToDo = 'Go to the beach!';
        resolve(whatToDo);
    } else {
        reject(new Error("It's not 5:00 yet!"));
    }
});

const afterWork = (firstTask) => {
    return new Promise((resolve, reject) => {
        const toDo = `After work i will ${firstTask} Then walk the dog!`;
        resolve(toDo);
    });
};

const myDay = async () => {
    try {
        const canILeave = await workday;
        const whatNext = await afterWork (canILeave);
        console.log(whatNext);
    } catch (err) {
        console.log(err.message);
    }
}

myDay();