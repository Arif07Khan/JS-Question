//Array of No.
arr_number=[5,2,6,9,7,4,5,1,2,3,8]
for(let i=0;i<arr_number.length;i++)
    if(arr_number[i]==5){
        continue;
    }else{
    console.log(arr_number[i]+" ");}
    
//Array of string 
arr_name=["arif","sharif","kaif","saif","zaid"]
for(let i=0;i<arr_name.length;i++){
if(i==1){continue;
}
    console.log(arr_name[i]+" ");
}
//Arr add and Remove'
const arr_list=[45,87,62,12,36,97,52,10]
    arr_list.push(39);
    arr_list.pop();
    arr_list.shift();
    arr_list.unshift(20);
    console.log(arr_list.toString());
    console.log(arr_list.join("*"));
    console.log(arr_list.slice(1,4));
    console.log(arr_list.splice(1,4));
    console.log(arr_list);


