//creating the function and applying all possiblities logic  for the output

function fevicol(arr,char)
{
      if(char == undefined){
        char = ",";
      }
      var bag="";
      for(var i=0; i<arr.length; i++){
        if (i!=arr.length-1){
            bag = bag +arr[i] + char;
        }
        else{
        
            bag = bag + arr[i];
    }
      }
      return bag;
}
var arr =["M","A","N"];
var char  = "";
console.log(fevicol(arr , char));


//arr.slice(start); arr.slice(start, end); to slice the array from the index given og the array

var num1 = [1,2,3,4];
num1=num1.slice(1,3);
console.log(num1);


// arr.toUpperCase(); arr.toLowerCase

var sent ="rohit ghanshyam ingole kaise hai aap log?"
console.log(sent.toUpperCase());
console.log(sent.toLowerCase());
