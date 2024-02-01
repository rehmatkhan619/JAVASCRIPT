      //   ||||| STACK AND HEAP||||

      //STACK is for premative (string ,numbr and 6 other).This will give the copy 
      //HEAP is used in non premative (object,string and function ) this will give you orgginal value
       
      // EXAMPLE of stack   ......
      let myName   ="Rehmat ullah";
      let myAnotherName  =myName;
      myAnotherName   ="khan"

      console.log(myAnotherName)//khan   
      console.log(myName)// Rehmat ullah

      ///EXAMPLE OF HEAP.....
      let userOne={
        name:  "jhone",
        email : "jhone@gmail.com"
      };
      let userTwo=userOne;
      userTwo.email="smith@gmail.com"
      console.log(userOne.email);  // smith@gmail.com
      console.log(userTwo.email);  //smith@gmail.com
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
            //  DATE   .....date is object
          let myDate= new Date()
          console.log(myDate.toString())  
          console.log(myDate.toISOString()) 
          console.log(myDate.toJSON())   
          console.log(myDate.toLocaleString())  
          
          //you can creat your own date 
          let myCreatedDate=new Date(2000 ,4,15)
          console.log(myCreatedDate.toDateString())
          let myCreatedDate2=new Date(2000 ,4,15 ,3,4)
          console.log(myCreatedDate2 .toLocaleString())
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
     // ARRAY  ...

     const myArray= [1,2,3,4,5,6,7,8,9]//element inside can be nmber ,string and boo
     console.log(myArray[3])  //4

       // Array methods

const buildArray=[1,2,3,4,5]
buildArray.push(6)//this will add "6" to array
buildArray.pop()//arrgument should be empty and last elemenet will be remove from array
buildArray.unshift(9)//9 will bwe added to array but in first
buildArray.unshift()//9 will be remove from array
console.log(buildArray);
console.log(buildArray.includes(4)) //if 4 are avialble in array i will give you true ..based on boolean
console.log(buildArray.indexOf(3))