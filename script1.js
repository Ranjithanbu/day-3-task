//country flags

const URL="https://restcountries.com/v3.1/all";

const req= new XMLHttpRequest();

req.open("GET",URL);

req.send();

req.onload = () => {
const arr=JSON.parse(req.response)
 
for(i=0; i<arr.length; i++){
    console.log(arr[i].flags.png)
}


}

