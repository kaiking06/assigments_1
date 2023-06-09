//Array

//const students=['luther','jerry','mende','rosemary']

//students[0]='king'
//console.log(students)

const towns= ['kumba','limbe','tiko','buea']
//console.log(towns)

towns[2]='douala'
console.log(towns)

towns[4]= 'matoh';
console.log(towns)


const cars= ['rav4', 'mercedes', 'bmw'];
cars.map((item)=>1)

function crazySum(a,b) {
    const sum =a + b;
    if(a===b){
        return 3*sum
    }else{return sum}
}
console.log(crazySum(2,4));

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1)


const  input = [
    { name: "John", age: 21, city: "New York" },
    { name: "Mike", age: 28, city: "Moscow" },
    { name: "Danny", age: 30, city: "London" },
    { name: "Lisa", age: 26, city: "Paris" },
    { name: "Sophie", age: 19,},
  ];
  /*
  const newData = input.map(({name, age}) => ({[name]: age}));
  console.log(newData)

  const result = input.filter(item => item.city==='Paris' );
console.log(result);
*/

const array2 = [22, 33, 44, 55];
const map2 = array2.map((items)=>items *70);
console.log(map2);

const array3 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const map3 = array3.filter((items)=>items.length> 3);
console.log(map3);

const array4 = ['phone', 'television', 'fan','plate'];
array4.map((item)=>item);


const dataList=array4.filter((items)=>items.length>4);
console.log(dataList);