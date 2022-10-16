// const person =
// {
//     name: "emma", lastname: "watson", age: 27,
//     education: true, married: false,
//     friends: ["ron", "daniel"],


//     greeting: function () { console.log("hey Arun") }
// }

// console.log(person);








// const value3 = 2 < 4;

// if (value3) {
//     console.log("hello");

// }
// else {
//     console.log("heyy");
// }






// // const value = false
// const value = true

// if (!value) {

//     console.log("hey");
// }




// const num1 = 12;
// const num2 = 32;



// if (num1 > num2) {

//     console.log("first greater sencond");
// }

// else if (num1 >= num2) {
//     console.log("both equal");
// }
// else {
//     console.log("second greater first");
// }

// const num3 = 2;
// const num4 = "2";
// const value1 = num3 == num4;
// const value2 = num3 === num4;
// console.log(value1);
// console.log(value2);


// const userName = "Emma";
// const age = 22;

// if (userName === "Emma" && age === 22) {
//     console.log("hey");
// }
// else {
//     console.log("wrong");
// }


// let amount = 10;

// do {
//     console.log("hey " + amount + " dollors");
//     amount++;
// } while (amount < 10)


// for (let i = 0; i <= 10; i++) {
//     console.log("the number:" + i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log("number is:" + i);
// }


// let text = "arunnnnnnnnn";

// const person = {
//     name: "arunsree",
//     greeting: function ()
//     {
//         console.log("hey");
//     },
// };
// console.log(person);
// console.log(person.name);
// console.log(person.greeting());


// const firstname = "emma"
// const age = "22"

// const value = `hey ${firstname} she is ${age}`;
// console.log(value);

// let i;

// for (i = 10; i >= 0; i--) {
//     console.log("the number is: " + i);
// }


// let products = ["apple", "banana", "orange"]
// // console.log(i);

// for (i = 0; i <= products.length - 1; i++) {
//     const product = products[i]
//     console.log(`the number is: ${product}`);
// }


// let fruitnames = ["apple", "banana", "cherries",];


// console.log(fruitnames.length);
// console.log(fruitnames[fruitnames.length - 1]);
// console.log(fruitnames[0]);



// const firstname = ["emma", "ron", "aru"];
// const allnames = fruitnames.concat(firstname);
// console.log(allnames);
// console.log(allnames.reverse());

// allnames.push("apple");
// allnames.push("black");
// console.log(allnames);

// allnames.pop();
// console.log(allnames);

// allnames.unshift("black");
// console.log(allnames);

// allnames.shift("black");
// console.log(allnames);


// const firstNames = ["emma", "dan", "ron"]
// let lastName = "watson"

// const newArray = []

// for (var i = 0; i < firstNames.length; i++) {

//     // console.log(i);
//     // console.log(firstNames[i]);
//     let fullname = `${firstNames[i]} ${lastName}`

//     newArray.push(fullname)
// }

// // console.log(firstNames);
// console.log(newArray);







// const gas = [10, 40];
// const food = [10, 20];

// function calculatetotal(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     return total;
// }

// calculatetotal(gas)
// console.log(calculatetotal(gas));

// // let gastotal = calculatetotal(gas);
// // let foodtotal = calculatetotal(food)
// // // console.log(gastotal);
// // console.log({ gas: gastotal });
// // console.log(foodtotal);









// function calculate(value) {

//     const newvalue = value + 2

//     return newvalue
//     alert = "welcome"
// }

// const wallwidth = 10

// const width = calculate(wallwidth)

// const dimensions = width

// console.log(dimensions)



// function addnumbers(num1, num2) {

//     return num1 + num2
// }


// const firstvalue = addnumbers(10, 5)
// const secondvalue = addnumbers(10, 20)

// const add = function (num1, num2) {
//     return num1 + num2
// }

// const thirdvalue = add(100, 200)

// const result = [firstvalue, secondvalue, thirdvalue]

// // const result = [firstvalue, secondvalue, add(100, 200)]

// console.log(result);









// // let number1 = "hi"
// // let number2 = number1
// // number2 = "hello"
// // console.log(`the first number is ${number1}`);
// // console.log(`second number is ${number2}`);

// // let person1 = { name: "emma" }
// // let person2 = { ...person1 }
// // person2.name = "harry"
// // console.log(`the first ${person1.name}`);
// // console.log(`the second ${person2.name}`);









// // let number1 = 20 + null
// // console.log(number1);

// // let number2 = 20 + undefined
// // console.log(number2);

// // let number3
// // console.log(number3);






// const bool = true;
// const bool2 = 2 > 1;

// let text = "";

// if (bool2) {
//     console.log("hey true");
// }

// else {
//     console.log("hey wrong");
// }





// const userName = "Emma";
// const age = 22;

// if (userName === "Emma" && age === 22) {
//     console.log("hey");
// }
// else {
//     console.log("wrong");
// }




// const first = "vihaan"

// const second = "sai"

// let result = first.concat(" ", second)


// console.log(result);






// let globalnumber = 0
// // let num1 = 0
// // let num2 = 10
// function add(num1, num2) {
//     globalnumber = 2
//     const result = num1 + num2 + globalnumber;

//     function multiply() {

//         const multiplyresult = result * globalnumber
//         console.log(multiplyresult);
//     }

//     multiply()
//     return result;
// }



// console.log(add(1, 1))



// function morning(firstname) {
//     return `good morning ${firstname}`
// }

// function greet(firstname, cb) {

//     const myname = "arun"
//     console.log(`${cb(firstname)},i am  ${myname}`)

// }
// greet("vihaan", morning)
// greet("sai", morning)


// let firstname = [{ 'name': 'arun', 'age': 30 }, { 'name': 'sai', 'age': 28 }]

// for (let i = 0; i < firstname.length; i++) {

// }
// console.log(firstname);




// let student_profiles = [
//     { name: 'one', age: 15, gender: 'male', 'address': '12122djsfdkfd', 'date': '3232' },
//     { 'name': 'two', 'age': 23, gender: 'jak', 'address': '12122djsfdkfd', 'date': '3232' },
//     { 'name': 'three', 'age': 14, 'gender': 'female', 'address': '12122djsfdkfd', 'date': '3232' },
//     { 'name': 'four', 'age': 43, 'gender': 'others', 'address': '12122djsfdkfd', 'date': '3232' },
//     { 'name': 'five', 'age': 53, 'gender': 'trans', 'address': '12122djsfdkfd', 'date': '3232' }
// ]

// for (let i = 0; i < student_profiles.length; i++) {

//     let profile = student_profiles[i]


//     profile.gender === 'female' || profile.gender === 'jak' ?
//         console.log(`Dear parent, student ${profile.name} is absent today gender: ${profile.gender}`)

//         : (profile.age > 25) ?
//             console.log(`Dear parent, student ${profile.name} is absent today gender: ${profile.gender}`)

//             : console.log("not")

// }



// if (userName === "Emma" || age === 22) {
//     console.log("hey");
// }

// else {
//     console.log("wrong");
// }

















// let products_list = [

//     { brand: "lux", rate: "10", quantity: 11, quality: "good" },
//     { brand: "santoor", rate: "10", quantity: 12, quality: "good" },
//     { brand: "detol", rate: "10", quantity: 13, quality: "good" },
//     { brand: "lifeboy", rate: "10", quantity: 14, quality: "good" },
//     { brand: "rexona", rate: "10", quantity: 15, quality: "poor" },
//     { brand: "sandal", rate: "10", quantity: 16, quality: "bad" }

// ]

// // console.log(products_list);

// for (let i = 0; i < products_list.length; i++) {
//     let product = products_list[i]

//     product.quantity <= 14 ?
//         console.log(`i need ${product.brand} quantity${product.quantity}`)

//         : product.quantity > 15 ?
//             console.log(`i need ${product.brand} quantity${product.quantity} `)

//             : console.log("not")
// }













// let people = [

//     { name: "lux", rate: "10", quantity: 11, quality: "good" },
//     { name: "santoor", rate: "10", quantity: 12, quality: "good" },
//     { name: "detol", rate: "10", quantity: 13, quality: "good" },
// ]


// function showperson(person) {
//     console.log(person.name);
// }

// people.forEach(showperson)



// people.forEach(function (iteam) {
//     console.log(iteam.name);
// })












// let people = [

//     { name: "lux", rate: "10", quantity: 11, quality: "good" },
//     { name: "santoor", rate: "10", quantity: 12, quality: "good" },
//     { name: "detol", rate: "10", quantity: 13, quality: "good" },
// ]

// const ages = people.map(function (person) {
//     console.log(person);
// })





// for (let i = 0; i < people.length; i++) {


















// iteam.gender === "male" ?

//     console.log(`this is arun ${iteam.gender}`)

//     : iteam.gender === "female" ?

//         console.log(`this is sai ${iteam.gender}`)

//         : console.log("not")
// });







// if (iteam.gender === "male") {

//     console.log(`this is arun ${iteam.gender}`)
// }

// else if (iteam.gender === "female") {
//     console.log(`this is sai ${iteam.gender}`);
// }
// else {
//     console.log("not");
// }




// let people = [

//     { name: "lux", age: 12, gender: "male" },
//     { name: "santoor", age: 13, gender: "female" },
//     { name: "lifeboy", age: 14, gender: "other" }
// ]

// // const ages = people.map(function (person) {

// //     console.log(person);
// //     // return person
// // });

// const newpeople = people.map(function (person) {
//     return {
//         firstname: person.name,
//         oldage: person.age,
//         gen: person.gender
//     }
// })

// console.log(newpeople);









// let people = [

//     { name: "santoor", age: 13, statues: "absent" },
//     { name: "lux", age: 14, statues: "absent" },
//     { name: "lifeboy", age: 15, statues: "present" },
//     { name: "sandal", age: 16, statues: "present" },
//     { name: "medimex", age: 17, statues: "failed" },

// ]
// people.forEach(function (iteam) {

//     // console.log(`The is ${iteam.name}, i am ${iteam.gender}, i am ${iteam.age} old`);

//     const newpeople = people.map(function (person) {
//         return {
//             firstname: person.name,
//             oldage: person.age,
//             gen: person.statues
//         }
//     })

//     console.log(newpeople);

//     if (iteam.statues === "absent") {

//         console.log(`this is  ${iteam.statues}`)
//     }

//     else if (iteam.statues === "present") {
//         console.log(`this is  ${iteam.statues}`);
//     }
//     else {
//         console.log("Is failed");
//     }

// })























// let people = [

//     { name: "santoor", age: 13, statues: "absent" },
//     { name: "lux", age: 14, statues: "absent" },
//     { name: "lifeboy", age: 15, statues: "present" },
//     { name: "sandal", age: 16, statues: "present" },
//     { name: "medimex", age: 17, statues: "failed" },

// ]


// people.forEach(function (person) {

//     console.log(person, person.name);


// })







// let people = [

//     { name: "santoor", age: 13, statues: "absent" },
//     { name: "lux", age: 14, statues: "absent" },
//     { name: "lifeboy", age: 15, statues: "present" },
//     { name: "sandal", age: 16, statues: "present" },
//     { name: "medimex", age: 17, statues: "failed" },

// ]
// const age = people.map(function (person) {

//     // console.log(person);
//     return person.age
// })


// console.log(age);

// const newarry = people.map(function (person) {
//     return {
//         first: person.name,
//         old: person.age,
//     }

// })
// console.log(newarry);








// let people = [

//     { name: "santoor", age: 13, statues: "absent" },
//     { name: "lux", age: 14, statues: "absent" },
//     { name: "lifeboy", age: 33, statues: "present" },
//     { name: "sandal", age: 44, statues: "present" },
//     { name: "medimex", age: 55, statues: "failed" }

// ]

// const youngpeople = people.filter(function (person) {
//     return person.age === 14
// })

// console.log(youngpeople);

// const newarray = people.filter(function (person) {
//     return person.statues === "present"
// })

// console.log(newarray);










// let people = [

//     { name: "santoor", age: 13, statues: "absent", id: 1 },
//     { name: "lux", age: 14, statues: "absent", id: 2 },
//     { name: "lifeboy", age: 33, statues: "present", id: 3 },
//     { name: "sandal", age: 44, statues: "present", id: 4 },
//     { name: "medimex", age: 55, statues: "failed", id: 5 }
// ]

// // console.log(people);

// const finding = people.find(function (person) {
//     return person.id === 4

// })

// console.log(finding);








// // filter
// // does return new array
// // can manipulate the size of new array
// // returns based on condition

// const people = [
//     { name: "Emma Watson", age: 27, position: "The Leader", id: 1 },
//     { name: "Daniel", age: 28, position: "Hero" },
//     { name: "Ron", age: 32, position: "Hero Friend" },
//     { name: "Ron", age: 32, position: "Hero Friend" },
// ];



// const findPeople = people.find(function (person) {
//     return person.id === 1

// });
// console.log(findPeople);
// // console.log(findPeople ? findPeople.name : findPeople);


// const youngPeople = people.filter(function (person) {
//     return person.position === "The Leader"

// });
// console.log(youngPeople[0].name);
// // console.log(youngPeople);








// const newnames = ["emma", "ron", "harry"]
// const findnewname = newnames.find(function (firstname) {
//     return firstname === "harry"
// })

// console.log(findnewname);










// Array Properties and Methods

// let fruitNames = ["apple", "banana", "cherries", "orange", "blueberries"];

// // length
// console.log(fruitNames.length);
// console.log(fruitNames[fruitNames.length - 1]);

// // concat
// const firstNames = ["Emma", "Ron", "Daniel"];
// const allNames = fruitNames.concat(firstNames);
// console.log(allNames);


// // reverse
// console.log(allNames.reverse());

// // push
// allNames.push("Grapes");
// allNames.push("blackberries");
// console.log(allNames);
// // pop
// allNames.pop();
// allNames.pop();
// console.log(allNames);

// // unshift
// allNames.unshift("BlackBerries");
// allNames.unshift("Grapes");
// console.log(allNames);
// // shift
// allNames.shift();
// allNames.shift();
// console.log(allNames);








// function morning(firstName) {
//     //   console.log(`Good Morning ${firstName}`);
//     return `Good Morning ${firstName}`;
//   }

//   function afternoon(firstName) {
//     return `Good Afternoon ${firstName}`;
//   }

//   function greet(firstName, cb) {
//     const myName = "Srikanth";
//     console.log(`${cb(firstName)}, My name is ${myName}`);
//   }

//   greet("Emma", morning);
//   greet("Harry", afternoon);

//   // Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens

//   // Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function (closure)

//   // Higher Order function - accepts another function as an argument or returns another function as a result

//   // Callback Function - passed to a another function as an an argument and executed inside that function

//   // function greetMorning(firstName) {
//   //   const myName = "Srikanth";
//   //   console.log(`Good Morning ${firstName}, My name is ${myName}`);
//   // }

//   // function greetAfternoon(firstName) {
//   //   const myName = "Srikanth";
//   //   console.log(`Good Afternoon ${firstName}, My name is ${myName}`);
//   // }






// forEach
// Does not return new Array

// const people = ["Emma", "Daniel", "Ron"]


//   function showPerson(person) {
//     console.log(person.name.toUpperCase());
//   }


// people.forEach(showPerson);


// people.forEach(function (item) {
//     console.log(item);
// });



// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''




// // map
// // does return new array
// // does not change the size of original array
// // use values from original array when making new one

// const people = [
//     { name: "Emma", age: 27, position: "The Leader" },
//     { name: "Daniel", age: 33, position: "Hero" },
//     { name: "Ron", age: 32, position: "Hero Friend" },
// ];
// console.log(people);

// const ages = people.map(function (person) {
//     console.log(person);
//     return person;
//     // return person.age;
// });
// console.log(ages);


// const newPeopleArray = people.map(function (person) {
//     return {
//         firstName: person.name,
//         oldAge: person.age,
//     };
// });
// console.log(newPeopleArray);


// // const renderNewArray = people.map(function (person) {
// //     return `<h1>${person.name}</h1>`;
// // });

// // document.body.innerHTML = renderNewArray.join("");

// // console.log(renderNewArray);




// const people2 = [
//     { name: "Emma Watson", age: 27, position: "The Leader", id: 1 },
//     { name: "Daniel", age: 28, position: "Hero" },
//     { name: "Ron", age: 32, position: "Hero Friend" },
//     { name: "Ron", age: 32, position: "Hero Friend" },
// ];

// const findPeople2 = people2.find(function (person2) {
//     return person2.id === 1

// });
// console.log(findPeople2);
// // console.log(findPeople ? findPeople.name : findPeople);


// const youngPeople2 = people2.filter(function (person2) {
//     return person2.position === "The Leader"

// });
// console.log(youngPeople2[0].name);
// // console.log(youngPeople);








// const people3 = [
//     { name: "Emma Watson", age: 27, position: "The Leader", id: 1, salary: 500 },
//     { name: "Daniel", age: 28, position: "Hero", id: 2, salary: 300 },
//     { name: "Ron", age: 32, position: "Hero Friend", id: 3, salary: 200 },
//     { name: "Ron", age: 32, position: "Hero Friend", id: 4, salary: 200 },
// ];

// const array = people3.reduce(function (acc, currperson) {

//     console.log(`Total salary : ${acc}`);

//     console.log(`current person salary : ${currperson.salary}`);

//     acc += currperson.salary

//     return acc

// }, 0)

// console.log(array);



// const array = people3.reduce(function (acc, currentperson) {
//     // acc += currentperson
//     console.log(`total salary: ${acc}`);
//     console.log(`cureent person salary: ${currentperson.salary}`);
//     acc += currentperson.salary
//     return acc

// }, 0)
// console.log(array);





// const number = 7.242112

// const result = Math.floor(4.213123)
// console.log(result);

// const result = Math.ceil(4.213123)
// console.log(result);

// const result = Math.sqrt(25)        // 5*5
// console.log(result);


// const result = Math.min(25, 3, 4, 5, 6, 77, 88)
// console.log(result);

// const result = Math.max(25, 3, 4, 5, 6, 77, 88)
// console.log(result);

// const result = Math.ceil(Math.random() * 10) + 5

// console.log(result);

// const result = Math.floor(Math.random() * 5) + 1

// console.log(result);





// var x = 10;
// x += 6;
// console.log(x);


// // multiply,by,minus dont need parseint.................................
// function add() {
//     let x = document.getElementById("demo").value
//     x *= 10
//     alert(x)
//     return
// }


// add.................................

// add = () =>
//     x = +document.getElementById("demo").value + 10
// alert(x)




// function add() {
//     let x = Number(document.getElementById("demo").value)
//     x += 10
//     return alert(x)
// }























// add.................................
// function add() {
//     let x = Number(document.getElementById("demo").value)
//     x += 10
//     return alert(x)
// }


// // add.................................
// function add() {
//     let x = parseInt(document.getElementById("demo").value)
//     x += 10
//     return alert(x)
// }










// let num2 = 10
// function add() {
//     const number1 = Number(document.getElementById("demo").value)
//     const total = number1 + num2
//     window.alert(total)
//     return
// }





// let num2 = 10
// function add() {
//     const number1 = document.getElementById("demo").value
//     alert(`total amount: ${parseInt(number1) + num2} `)
//     return
// }







// function myFunction() {

//     return Hello

// }
// document.getElementById("demo").value = myFunction();




// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
// }





// function add(p1, p2) {
//     const total = p1 + p2;
//     // window.alert(total)
//     document.getElementById("demo").value

// }









// // Take user input.
// var num1 = parseInt(prompt("Enter first number: "));
// var num2 = parseInt(prompt("Enter second number: "));
// // Add two numbers.
// var sum = num1 + num2;
// // Display output.
// console.log("The sum of " + num1 + " and " + num2 + " is: " + sum); 2





// const text = [
//     { name: "Hello", age: 22 },
//     { name: "Hllo", age: 23 },
//     { name: "Helo", age: 24 },
// ]


// for (let i = 0; i < text.length; i++) {
//     let product = text[i]
//     console.log(product.name);
// }


// text.forEach(function (iteam) {
//     console.log(iteam.name)
// });



// let text = "a,b,c"
// const arry = text.split(",")
// document.getElementById("demo").innerHTML = arry[0]


// let text = "a,b,c"
// document.getElementById("demo").innerHTML = text[0]






// const points = [40, 100, 1, 5, 25, 10];

// document.getElementById("demo").innerHTML = findmax(points);


// function findmax(arr) {

//     let len = arr.length;

//     let max = -Infinity;



//     while (len--) {

//         if (arr[len] > max) {

//             max = arr[len];
//         }
//     }

//     return max;
// }



// function myMax(arr) {
//     let len = arr.length
//     let max = -Infinity
//     while (len--) {
//         if (arr[len] > max) {
//             max = arr[len]
//         }
//     }
//     return max
// }







// function validnum() {
//     let x = document.getElementById("num").value
//     let text
//     isNaN(x) || x < 1 || x > 10 ? text = "not valid" : text = "ok"
//     document.getElementById("demo").innerHTML = text
// }

// function validnam() {
//     let x = document.getElementById("nam").value
//     let text
//     isNaN(x) || x < 1 || x > 10 ? text = "not valid" : text = "ok"
//     document.getElementById("demo").innerHTML = text
// }





// $(document).ready(function () {
//     $("#btn-load-data").click(function () {
//         var country = $("country").val()

//         var url = "https://restcountries.com/v3.1/name/" + country + "?fullText=true,";

//         $.ajax({
//             "url": url,
//             "success": function (response) {
//                 var capital = response[0].capital
//                 $("#capital").html(capital)

//             }
//         })
//     })
// })






