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

const carProperties= {
    brand: 'mercedes',
    model: 'Glk',
    licensePlate: 34567,

}
console.log(carProperties)

const cars= ['mercedes', 'bmw', 'lexus', 'suzuki'];

console.log(cars)

const animals= ['goat', 'sheep', 'dog', 'cat', 'duck', 'chiken'];
console.log(animals)

animals.pop()
animals.shift()
console.log(animals)
