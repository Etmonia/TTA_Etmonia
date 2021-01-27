function lengthRange()
{  	
   var userInput = inputtxt.value;  
   if(userInput.length >= 5 && userInput.length <= 10)
      {  	
        return true;  	
      }
   else
      {  	
	alert("Please input between " +5+ " and " +10+ " characters");  		
        return false;  	
      }  
}

console.log("Acceptable");