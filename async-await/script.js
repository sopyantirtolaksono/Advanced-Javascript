// ASYNC & AWAIT

// Create a Function that Returns a Promise
function tryPromise() {
    return new Promise((resolve, reject) => {
        const time = 1000;
        if(time <= 3000) {
            setTimeout(() => {
                resolve("Resolve...");
            }, time);
        } else {
            setTimeout(() => {
                reject("Reject...");
            }, time);
        }
    });
}

// 1. Without Async & Await
// tryPromise()
//     .then(res => console.info(res))
//     .catch(res => console.info(res));

// 2. With Async & Await
async function tryAsync() {
    try {
        const promise = await tryPromise();
        console.info(promise);
    } catch(res) {
        console.info(res);
    }
}

tryAsync();