//   ||||| STACK AND HEAP||||

//STACK is for premative (string ,numbr and 6 other).This will give the copy 
//HEAP is used in non premative (object,string and function ) this will give you orgginal value

// EXAMPLE of stack   ......
// let myName = "Rehmat ullah";
// let myAnotherName = myName;
// myAnotherName = "khan"

// console.log(myAnotherName)//khan   
// console.log(myName)// Rehmat ullah

// ///EXAMPLE OF HEAP.....
// let userOne = {
//   name: "jhone",
//   email: "jhone@gmail.com"
// };
// let userTwo = userOne;
// userTwo.email = "smith@gmail.com"
// console.log(userOne.email);  // smith@gmail.com
// console.log(userTwo.email);  //smith@gmail.com
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//  DATE   .....date is object
// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

// //you can creat your own date 
// let myCreatedDate = new Date(2000, 4, 15)
// console.log(myCreatedDate.toDateString())
// let myCreatedDate2 = new Date(2000, 4, 15, 3, 4)
// console.log(myCreatedDate2.toLocaleString())
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// ARRAY  ...

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]//element inside can be nmber ,string and boo
// console.log(myArray[3])  //4

// // Array methods

// const buildArray = [1, 2, 3, 4, 5]
// buildArray.push(6)//this will add "6" to array
// buildArray.pop()//arrgument should be empty and last elemenet will be remove from array
// buildArray.unshift(9)//9 will bwe added to array but in first
// buildArray.unshift()//9 will be remove from array
// console.log(buildArray);
// console.log(buildArray.includes(4)) //if 4 are avialble in array i will give you true ..based on boolean
// console.log(buildArray.indexOf(3))
// const buildArray2 = buildArray.join();//join will get all the element from bulidarray and convert it into string with no braket
// console.log(buildArray2)
// console.log(buildArray)

// // COMBAINING TWO ARRAY

// const buildArray3 = ["shaktiman", "shaktiman1", "shaktiman2", "shaktiman3", "shaktiman4"]
//  const buildArray4 = ["spiderman", "spiderman1", "spiderman2", "spiderman3", "spiderman4"] //1st method
//  const buildArray5 = buildArray3.concat(buildArray4)
//  console.log(buildArray5)

//  const ARRAY1= [1,2,3,4];
//  const ARRAY2=[4,5,6,7];
//  const addArray= new Set ([...ARRAY1,...ARRAY2])// make new set of array and exclude duplicate value
//  console.log(addArray)

//  const ARRAY4= [1,2,3,4];
//  const ARRAY5=[4,5,6,7];
//  const addArray2=  [...ARRAY4,...ARRAY5] //spread methode will duplicate and copy of given two set
//    console.log(addArray2)

//  const ARRAY6= [1,2,3,4];
//  const ARRAY7=[4,5,6,7];
//  const addArray3= new Set ([...ARRAY6,...ARRAY7])
//  console.log(addArray3)
// const marvelHero = ["thor", "ironman", "spiderman", "idk"];
// const dcHero = ["superman", "flash", "batman", "idk"]//2nd method .there is also other method
//  const allHeros = [...marvelHero, ...dcHero]
//  console.log(allHeros)


// // extra info intresting for interviwe
// console.log(Array.isArray("Rehmat")) //flase
// console.log(Array.from("Rehmat"))   // ['R', 'e', 'h', 'm', 'a', 't']
// console.log(Array.from({ Name: "Rehmat" }))//  []  give empty array..js get confuse in should i make asrray of key(Name) or value(Rehmat)

// //converting number to string 
// score1 = 200;
// score2 = 300;
// score3 = 400;
// console.log(Array.of(score1, score2, score3)) // [200, 300, 400]

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// OBJECTS
const mySum = Symbol("myKey")  //using symbol in object
const instaUser = {
  name: "jhone",
  email: "jhone@gmail.com",
  age: 20,
  bio: "i am a student",
  "hobbies": "football",
  [mySum]: "mySum"

}
console.log(instaUser.name)// jhone
console.log(instaUser.email)// jhone@gmail.com
console.log(instaUser.age)// 20
console.log(instaUser.bio)// i am a student
console.log(instaUser["hobbies"])// football you have to do this if your key is in string
console.log(instaUser[mySum])// calling symbol this

// //changing value in object from outside
// instaUser.email="watson@gmail.com";
// Object.freeze(instaUser)//freeze will freez the object and you cannnot changevalue after freeze line .you can but before freeze codeline
// instaUser.email="cason@gmail.com";
// console.log(instaUser.email)

// OBJECT INSIDE OF OBJECT
// const instaUser = {
//   id: "012",
//   userName: {
//     userFullName: {
//       userFirstName: "Nichal",
//       userLastName: "watson"

//     }
//   }
// }

// console.log(instaUser.userName.userFullName.userFirstName+" "+instaUser.userName.userFullName.userLastName)

// OBJECT IN ARRAY

// const tinderUser={
//   id:"02",
//   name:"jennay",
//   loggedIn:true
// }

// const fbUser=[
//   {
//     id:"1",
//     gmail:"king@gamil.com",

//   },
//   {
//     id:"2",
//     gmail:"queen@gamil.com",
    
//   }
// ]
// console.log(tinderUser)
// console.log(fbUser[0].gmail)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("name"))

// DESTRUCTION IN OBJECT

//    const subject={
//     course:"Web Devlopment",
//     courseInstructor: "Jhonevick",
//     price:"$999"
//    }

 
//   //  const{courseInstructor}=subject;
//   //console.log(courseInstructor)

//   /////// Or make it more simple u can do both method

//   const{courseInstructor:teacher}=subject;
//    console.log(teacher)