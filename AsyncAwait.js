//Async / Await

console.log("Async start");
async function test(){
    return 10;
}
//async function returns values as a promise so we can use then 
test().then(value => {
    //console.log("test :- "+value);
});

//function1 call 5 sec return 10 = 5 sec 
//function2 call functoin1 value use 10 * 2 = 2 sec
//function3 call 20 + 50  1 sec 

async function addTwo(){

    let data = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });

    let data1 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(20);
        }, 4000);
    });

    console.log("fetching data first");
    let d = await data;
    console.log("data fetched first");

    console.log("fetching data second");
    let d1 = await data1;
    console.log("data fetched second");
    return [d , d1];
}

async function addFour(){
    console.log("second method start")
    let data = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(10);
        }, 3000);
    });

    let data1 = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(20);
        }, 7000);
    });
    console.log("second fetching data first");
    let d = await data;
    console.log("second data fetched first");

    console.log("second fetching data second");
    let d1 = await data1;
    console.log("second data fetched second");
    return [d , d1];
}

// let d = addTwo();
// console.log(d)
// let d1 = addFour();


// addTwo().then(value => {
//     addFour();
// });

async function call(){
    let d = await addTwo();
    let d1 = await addFour();    
}

call();





