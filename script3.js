//comparision of two objects

	const person1= { 
		name: 'gopal', 
		age: 21 
	}; 

	const person2 = { 
		age:21,
 		name:"gopal"
		
	}; 

    flag=true;
    
    if(Object.keys(person1).length==Object.keys(person2).length){
        
        for(let a in person1){
            if(person1[a]==person2[a]){
              continue;
            }
            else{flag=false}
            break;
        }
        
    }
    
    
    else{flag=false}
    console.log(flag) 