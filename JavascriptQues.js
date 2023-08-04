// prime Number 
function p(n) {
    if(n==1){
        console.log( n + " it is neither prime nor composite");
        return;
    }else if(n>1){
    var n, i, flag=true ;
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag=false ;
            break;
        }
    if(flag == true){console.log(n + " is prime");}
        
    else{console.log(n + " is not prime");}
    
}
}

p(17)

//perfect square
function prsq(s,e){
var i;
for(i=s;i<e;i++){
    m=i** 0.5;
if(m==parseInt(m)){
    console.log(i + " it is perfect square");
}
}
}

prsq(1,100)

//fibonacci series
function fibb(e,n){


let n1 = 0, n2 = 1, nextTerm;
for ( i = e; i <= n; i++) {
    console.log(n1+"");
    nextTerm = n1 + n2;
    [n1,n2]=[n2,nextTerm];
}}
fibb(1,10)

//palindrome no. 

function palin(nbr)
{
    var tmp=0, x,y;
    y = nbr;
    while(nbr > 0)
    {
      x = nbr%10;
      nbr = parseInt(nbr/10);
      tmp = tmp*10+x;
    }
    if(tmp == y)
    {
        console.log( tmp+" The number is  a palindrome.");
    }
    else
    {
       console.log(tmp+" The number is not a palindrome.");
    }
}
palin(12521)

//divisible 3 not 6
function div(s,e){
    var i;
    for(i=s;i<e;i++){
        if(i%3==0 && !(i%6==0)){
            console.log(i+" It is divisible");
        }
    }}

    div(1,100)
    
//Arrays of prices and filter btw 1000 and 5000.
const arr=[1215,785,954,1258,1455,2545,321,1004,995,7896,6548,874,652,4589,4152,3654,5012];
const arr1=arr.filter((n)=> n>=1000 && n<=5000);
console.log(arr1);
const arr_money=arr1.map((n)=>'₹ '+n);
console.log(arr_money);

//Create an array containing first names from an array of full names
const name_arr=['Arif Khan','Sharif Khan','Zaid Khan','Saif ali khan','Harsh Pratap Singh','Mukul Srivastava']
const FirstName_arr=name_arr.map((n)=>{
        [first,last]=n.split(' ');
        return first;
        } 
    );
    console.log(FirstName_arr);

