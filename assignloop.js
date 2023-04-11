// Q.1 write a program to print Number,bers from 1 to 10


// for(a=1;a<=10;a++){
//     console.log(a)
// }

// Q.2 write a program to calculate the sum of first 10 natural numbers

// function naturalsum(){
//     var sum=0;
//     for(a=1;a<=10;a++){
//          sum+=a;
//     }
//     return sum;
// }
// var ans=naturalsum(10);
// console.log("The sum of first 10 natural numbers is: "+ans);


// Q.3 Write the multiplication table of 5
// function table(b){
//     for(a=1;a<=10;a++){
//         console.log(b*a);
//     }
// }
// table(5);

// Q.4 write a program to find the factorail of any number
// function fact(num){
//         var sum=1;
//         for(a=1;a<=num;a++){
//              sum*=a;
//         }
//         return sum;
//     }
//     var ans=fact(5);
//     console.log("The sum of first 10 natural numbers is: "+ans);

// Q.5 program to find the value of one  number raised to the power of another

// function raised(first,another){
//     var raise=1;
//     for(a=1;a<=another;a++){
//         raise*=first;
//     }
//     return raise;
// }
// var ans=raised(3,3);
// console.log(ans);

// Q.6 reverse the digit

// function reversenumber(num){
//     var reverse=0;
//     while( num !==0){
//         reverse=reverse*10+ num%10;
//         num=Math.floor(num/10);
//     }
//     return reverse;
// }
// var ans= reversenumber(2432);
// console.log(ans);

// Q.7 write a program which print the sum of the even and odd numbers

// function evenodd(start,end){
//     var evenadd=0;
//     var oddadd=0;
//     for(a=start;a<=end;a++){
//         if(a%2==0){
//             evenadd+=a;
//         }
//         else{
//             oddadd+=a;
//         }
//     }
//     return[evenadd,oddadd];
// }
// var ans=evenodd(1,3);
// console.log(ans);

// Q.8 print number is prime or not

// function prime(n){
//     flag=true;
//     for (i=2;i<=n-1;i++){
//         if(n % i==0){
//             flag=false;
//             break;
//         }
//     }
//         if(flag==true){
//             console.log("prime"+n);
//         }
//         else{
//             console.log("not prime"+n)
//         }
    
// }
// var ans=prime(29);


// Q.9 calculate HCF of two given number

// function hcf(num1,num2){
//     for(a=1;a<=num1 && a<=num2; a++){
//         if(num1 % a==0 && num2 % a==0){
//             hcf=a;
//         }
//     }
//     return hcf;
// }
// var ans=hcf(60,72);
// console.log(ans);

// Q.10 write the cod eto display the count of PromiseRejectionEvent, negative and zero

// function pnz(a,b,c,d,e){
//     // var num;
//     var num=[a,b,c,d,e];
//     var countpositive;
//     var countnegative;
//     var countzero;
//     if(num>0){
//         countpositive++;
//     }
//     else if(num<0){
//         countnegative++;
//     }
//     else{
//         countzero;
//     }
// }
// var ans=pnz(-1,2,4,0,-4);
// console.log(ans);