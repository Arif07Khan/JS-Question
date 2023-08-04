function CGPA(a,b,c,d,e,n){
    c=(a+b+c+d+e)/n;
    return c;
}

var c1=CGPA(91,87,87,83,79,5);
console.log("My CGPA is " + c1);

function age(by,cy){
    T_age=cy-by;
    return T_age;
}

T_age1=age(1997,2022)
console.log("My Age is " + T_age1);

function Details(name,phoneNo,rollNo){
    console.log("My Name is"+" " + name);
    console.log("My Phone Number is" + " " + phoneNo);
    console.log("My Roll Number is"+ " " + rollNo);
}
Details('arif khan',6390876272,201610101110039);

function age(n)
if(n>18){
    console.log("you can drink bear");
}else{
    console.log("you cannot drink bear");
}
age(24);