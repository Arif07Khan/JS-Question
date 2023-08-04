//Fibonacci Series
let a = 0,
  b = 1,
  temp;
for (let i = 0; i < 10; i++) {
  console.log(a);
  temp = a + b;
  [a, b] = [b, temp];
}
// Prime NO.
var flag = true,
  n = 17;
for (let i = 2; i < n - 1; i++)
  if (n % i == 0) {
    flag = false;
    break;
  }
if (flag == true) {
  console.log("It is a prime no.");
} else {
  console.log("Not a prime no.");
}
//Prime No. Btn 1 and 100
let count = 0;

for (let i = 2; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) count++;
  }
  if (count == 2) 
    console.log(i + "Is Prime ");
    count = 0;
}


//divisibility by 7 btn 1 - 100
for( let i=1;i<=100;i++)
    if(i%7==0){
        console.log(i);
    }


//divisible by 3 not by 6 btn 1 - 100
for( let i=1;i<=100;i++)
    if(i%3==0&&i%6!==0){
        console.log(i);
    }

//Perfect No.
let m=8128,sum=0,i;
for(i=1;i<m;i++){
if(m%i==0)
{sum=sum+i;}
}if(sum==i){
    console.log(m+"  is perfect ");
}else{console.log(m+" is not perfect ");}