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

// (function(){
//   setTimeout(()=> console.log(1),2000);
//   console.log(2);
//   setTimeout(()=> console.log(3),0);
//   console.log(4);
// })();


// function display()  
// {  
//   console.log("10"+20+30);  
// }  
// display();  


// let m = 129;
// let n = m--;
// let o = n++;
// let a = n--;
// let b = o++;
// let c = --m;

// console.log(m,n,o,a,b,c);



// console.log(3 - -"3");

// let a={name:"A"};
// let b={name:"A"};
// console.log(a===b);


// var x;

// console.log(x);
// x=10;


// const x = "sneha";

// let x1 = x.split('');
// x1[0] = 'k';
// x1[1] = 'u';
// x1[2] = 'n';
// x1[3] = 'a';
// x1[4] = 'l';
// // console.log(x1);
// let x2 = x1.join('');
// console.logc
// 
// console.log(3+'3'); //33
// console.log(3-'3'); //0

// console.log(3 + +'3'); //un
// console.log(3 - - '3'); //se

// console.log(typeof(NaN));

// let n=10;
// for(i=1;i<=n;i++){
//     console.log(i);
    
// }

// let n=10;
// let sum=0;
// for(let i=0;i<=n;i++){
//     sum+=i;
// }
// console.log(sum);

// let n=5;
// function multi(n){
//     for(let i=1;i<=10;i++){
//         console.log(n*i)
//     }
// }
// multi(5);


//factorial

// function fact(n){
//     if(n==0 || n==1){
//         return 1;
//     }else{
//         return n*fact(n-1);
//     }
// }
// var ans=fact(0);
// console.log(ans);

//a raised b
// function raisedOne(a){
//     return function(b){
//         return a**b;
//     }
// }
// var ans = raisedOne(2)(3)
// console.log(ans);


//reverse a number

// function reversed(n){
//     var reverse=0;
//     for(let i=n;i>0;i=Math.floor(i/10)){
//         reverse=reverse*10+i%10;
//     }
//     return reverse;
// }
// var ans=reversed(1452);
// console.log(ans);

//sum of even and odd integers.

// function evenOdd(...a){
//     var evenSum=0;
//     var oddSum=0;
//     for(var i=0;i<a.length;i++){
//         if(a[i]%2==0){
//             evenSum+=a[i];
//         }else{
//             oddSum+=a[i]
//         }
//     }
//     console.log("sum of even integers:"+evenSum );
//     console.log("sum of odd integers:"+oddSum );
// }
// evenOdd(1,2,3,4,5,6,7,8,9);


//prime number

// function prime(n){
//     if(n==1){
//         console.log(n,'neither a prime nor a composite number.');
//         return;
//     }else{
//         let flag=false;
//         for(let i=2;i<n;i++){
//             if(n%i==0){
//                 flag=true;
//                 break;
//             }
//         }
//         if(flag){
//             console.log(n,'not a prime');
//         }else{
//             console.log(n,"prime");
            
//         }
//     }
// }
// prime(400);


//HCF of two given numbers

// function hcf(a,b){
//     var num=1;
//     for(var i=1;i<a && i<b;i++){
//         if(a%i==0 && b%i==0){
//             num*=i;
//             // console.log(num);
            
//         }
//     }
//     return num;
    
// }
// var ans=hcf(10,30);
// console.log(ans);





