// console.log("outside the function");
// function add(){
//     var a=1;
//     var b=2;
//     return a+b;
// }
// var aa= add();
// console.log("aa"+aa);


// function sub(){
//     var a=1;
//     var b=2;
//     console.log("addition is:" +(a-b));
// }
// sub();

// var a=20;
// var b=4;
// function multi(num1,num2){
//    console.log("Multiplication is:"+(num1*num2));
// }
// function divide(num1,num2){
//     console.log("division is:"+(num1/num2));
//  }
//  function add(num1,num2){
//     console.log("Addition is:"+(num1+num2));
//  }
//  function sub(num1,num2){
//     console.log("Substraction is:"+(num1-num2));
//  }
// multi(a,b);
// divide(a,b);
// add(a,b);
// sub(a,b);


// var a=50;
// var b=15;
// function greater(num1,num2){
//     if(num1>num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }


// }
// var great=greater(a,b);
// console.log("greater number is "+great);

// var a=400025;
// function leapyear(year){
//     if(year%4==0 || year%400==0){
//        console.log("leap year" +year);
   
//     }
//     else {
//         console.log(" Not aleap year" +year);
//     }
// }
// var leap=leapyear(a);

// Q.Find the greater number and multiply by 2

// var a=2;
// var b=10;
// function greatmulti(a,b){
//     var big;
//     if(a>b){
//         bigger=a;
//     }
//     else{
//         bigger=b;
//     }
//     bigger=bigger*2;
//     return bigger;
// }
// var ans=greatmulti(a,b);
// console.log("multiplication of greater value is: " +ans)

// Q.number is even or odd?
// var a=21;
// function oddeven(num){
//     if((num%2) == 0){
//        console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }
// oddeven(a);

// Q. grater number from three numbers

// var a=5;
// var b=2;
// var c=10;
// function greaterthree(a,b,c){
//     if(a>b && a>c){
//         return a;
//     }
//     else if(b>a && b>c){
//         return b;
//     }
//     else {
//         return c;
//     }
// }
// var ans=greaterthree(a,b,c);
// console.log("greater number is: " +ans)

// Q. between the range og 5 to 25
// var a=30;
function range(a){
    if(a>=5 && a<=25){
        return a;
    }
    else{
        return 0;
    }
}
var ans=range(50);
console.log("between the range: " +ans);
