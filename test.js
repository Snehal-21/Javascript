//doubt

// 



// let message = {
//   "p1" : "John",
//   "p2" : "Doe",
//   "p3" : "User"
// }
 
// //* Output : "JohnDoeUser"
// let empt = ""
// for(let key in message){
//   empt += message[key];
// }
// console.log(empt);

// let x = 10

// {
//   let x = 20;
//   console.log(x);
// }

// const fruits = ['apple', 'mango', 'orange'];

// const [first, second, third] = fruits;

// console.log(first, second, third);


// async function logJSONData() {
//   const response = await fetch("http://example.com/");
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

// logJSONData();

// let array=[4323,3212,200,1];

// // for(let i=0;i<array.length;){
// //     if(array[i]==array[i+1]){
// //         array.splice(i,1)
// //     }else{
// //         i++;
// //     }
// // }
// console.log(array.sort());

// function func1(){
//   setTimeout(
//         ()=>{
//         console.log(x);
//         console.log(y);
//   },3000);
//   var x = 2;
//   let y = 12;
// }
// func1();


// function func2(){
//   for(let i = 0; i < 3; i++){

//     setTimeout(()=> console.log(i),2000);
// }
// }
// func2();

(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();