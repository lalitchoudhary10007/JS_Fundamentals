//synchronous and asynchronous programming


console.log("start");
setTimeout(() => {
    console.log("will execute after 3000");
}, 1000);
console.log("End");
//output start - End - will execute after 3000

//callback
function loadData(callback){
    setTimeout(() => {
        callback();
    }, 2000);
}

// loadData(function dataLoaded(){
//     console.log("data loaded");
// });
loadData(() => {
    console.log("data loaded 1");
    loadData(() => {
        console.log("data loaded 2");
        loadData(() => {
            console.log("data loaded 3");
            loadData(() => {
                console.log("data loaded 4");
                loadData(() => {
                    console.log("data loaded 5");
                });
            });
        });
    });
});
//above scenerio is called callback hell & pyramid of doom

//promise

let p = new Promise((resolve, reject) => {
     console.log("promise is pending")
     setTimeout(() => {
        resolve(true); 
     }, 5000);
});

let p1 = new Promise((resolve, reject) => {
    console.log("promise is pending")
    setTimeout(() => {
       reject(new Error("promise rejected"))
    }, 5000);
});

p.then(value => {
    console.log("promise is fulfiled"+value);
}, error => {
    console.log("promise is rejected "+error);
});

p1.catch(error => {
    console.log("promise is rejected"+error);
});

//promise chaining

let cp = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve(true); 
    }, 5000);
});

cp.then(value => {
    console.log("resolved "+value);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, 1000);
    })
}).then(value => {
    console.log("resolved "+value);
    return 200;
}).then(value => {
    console.log("resolved "+value);
})

//promise.all //if any promise is rejected will return reject
//promise.allSettled //if any promise is rejected will return all promise with reject and resolve
//promise.race //whichever completes first will return that may be that is rejected or resolved
//promise.any //will return first completed promise with resloved only will ignore rejected
//promise.resolve
//promise.reject


