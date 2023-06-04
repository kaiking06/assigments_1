const a = 16;
const b = 8;

const sum = a+b
const diff = a-b
if(a===8 || b===8 || sum===8 || diff===8){
    console.log(true)
}else{
    console.log(fals)
}


var first = "my name is first ";
var second = "my name is second";
console.log(first +' ,' + second)


const c = 4
const d = 5
const e = 7
if(c===4 && d===5 && e===7){
    console.log(true)
}else{
    console.log(false)
}


const g = 1
const f = 3
if(f<g){
    console.log(g+f)
}else{
    console.log(g+f/2)
}

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

const mukete = {
    name: 'magna',
    surname: 'muke',
    email:'kaiking.fr',
    address:'kumba',
    age:26
};
console.log(mukete)
 if('magna does not have a driver license'){
    console.log('does not have a driver license')
 }else{
    console.log(false)
 }


/*Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

const cars ={
    brand:'toyota',
    model:'2007',
    licensplate:'az',
 }
 console.log('toyota')

 //spread operator method for cloning
 const Car1 ={...cars, licensplate:'az'}
 
 


/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

/* WRITE YOUR CODE HERE */



/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/
/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if