let name = 'lalit';
let number = 30;
let isAvailabe = true;
let fName = undefined;
let lName = null;

const pie = 22;
//pie = 34;

console.log(pie);

//Assignment operator
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2", comp1 == comp2); // checks only value 
console.log("comp1 === comp2", comp1 === comp2); // checks value and type as well 

// ternary operator
let ter = 12;
console.log(ter == 10 ? "is 10" : "not 10");



//user defined 
//object
//array

let person = {
    //key & value
    pName : 'lalit',
    pAge : 30,
    pAddress : {
        street : '134',
        landmark : 'test'
    } 
};

//for in loop
for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) { //check key in object
        const element = person[key];
        console.log("key ", key + " element / value "+element);    
    }
}

//for of loop
for (const iterator of "Lalit") {
    console.log("iterator ", iterator);
}

//Template literals
let a = 'Abc';
let x = 'XYZ';
console.log("literals use ", `${a} is opposite to ${x}`); // after using ${} will pick value of variable

//Higher order functions map,reduce,filter
let array1 = [45,23,21,22,66];
//for each
array1.forEach((value) => {
   console.log("for each :- ", value);
});
//map method
let mapArray = array1.map((value, index, array) => {
   return value + 1;
});
console.log("Map array :- ", mapArray);
//difference between map & for each is map creates a new array of returned values and foreach just returns value

let filterArray = [5, 6, 7, 8, 9, 4, 3, 2];
let fArray = filterArray.filter((value) => {
    return value > 5;
});
console.log("Filtered Array:- ", fArray);

//Reduce method
let arr3 = [1,2,3,4];
let arry3 = arr3.reduce((v1, v2)=> {
    return v1 + v2;
});
console.log("Reduce array :- ", arry3);


let arr = ['lalit', 'kumar', 123];

console.log(arr.length);


function myFunction(a , b){
   return a * b;
}

//window is a global object
//bom - browser object model
//dom - document object model, complete html page javascript object
console.log(document.body);
//additional objects provided by host environment
//alert confirm prompt etc. are bom objects

console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

//parent node & parent element 
console.log(document.documentElement.parentElement) // return null because there is not parent element of html element
console.log(document.documentElement.parentNode) //return document because document node is availabe of html element
//documentElement = html element


//element only naviagtion
console.log(document.body.firstChild)//return first child can be node(text, comment etc.) and element 
console.log(document.body.firstElementChild)//return first element only will ignore nodes

//searching dom
//document.getElementById() // search element from gived id
//document.getElementsByClassName() // search elements from given class name...multiple class names can be provided using space
//document.getElementsByTagName() // return elements with given tag name
//document.getElementsByName() // return elements with given name attribute

//matches, contains, colsest
//element.matches(css) = to check if element matches given css selector
//element.closest(css) = to look for the nearest ancestor that matches the given css-selector. the element itself is also checked
//elemA.contains(elemB) = Returns true if elemB is inside elemA (a descendent of elemA) or when elemA == elemB
let id1 = document.getElementById("id1");
console.log(id1.matches(".class"));//returns false because it's checking .class of classname
console.log(id1.matches(".box")); // returns true because elements class name is box
let sp1 = document.getElementById("sp1");
console.log(sp1.closest(".box"));//will return div because closest div with class box is closest
console.log(sp1.closest("#sp1"));//will return self because sp1 id matches with self
//. is used for class and # is used for id
console.log(id1.contains(sp1));//return true because sp1 is child of id1

let id2 = document.getElementById("id2");
console.log(id2.contains(sp1));//return false because sp1 id not there


console.dir(sp1); //dir shows elements as a object with it's properties
//inner html property returns html inside the element as a string, will valid only for elements
//outer html property return html inside the element as well element itself also

//Attribute methods
//hasAttribute - to check existence of an attribute
//getAttribute - to get value of an attribute
//setAtrribute(attribute , value) - to set attribute
//removeAtrribute - to remove atrribute of an element
//data-attributes is used to create custom attributes
//dataset is used to get custom atrributes













