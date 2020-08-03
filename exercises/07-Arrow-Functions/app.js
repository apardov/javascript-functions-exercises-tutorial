function rapid(parametro) {             
    let stringCase = " ";                            
    for (let i = 0; i < parameter.length; i++)  
{           
      if (parametro[i] !== "a" && parametro[i] !== "e" && parametro[i] !== "i" && parametro[i] !== "o" && parametro[i] !== "u")                                   
       {           
       stringCase += parametro[i];         
      };   
    };   
    return stringCase.toUpperCase();   
  };          
   // From this line up Do not change code below
   let str = "John";
   console.log(rapid(str));