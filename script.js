/* START JAVASCRIPT FUNCTION */
function convertToRoman(num) {          // L1

    let map = { M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }; // L2
    let roman ='';                        // L3
  
    for(let i in map){                    // L4 
      while(num >= map[i]){               // L5
        roman += i;                       // L6
        num -= map[i];                    // L7
      }
    }
  
    return roman;                         // L8
  }
  
  // TEST 
  console.log(convertToRoman(55));
  
  
  /* NOTES
  L1 - name of function is 'convertToRoman'. 'num' is name of input. 
  
  L2 - create an object with keys as the roman numerals, and the values as the numbers. We use this as reference to build our roman numeral ouput. 
  
  L3 - create a variable called 'roman', where it's a blank placeholder where we can store our for loop items. 
  
  L4 - for/in used to Loop through the properties of an object. for/of is used to Loop elements of an array. 
  Block of code inside the loop will be executed once for each property.
  
  L5 - 'while loop' must finish entire sequence before 'for loop' moves onto it's next 'i' aka the next property inside the object 'map'.
  
  L6 -  e.g. num is 55. While loop will run through all properties[value] in the map object until num aka 55 is greater than or equal to the property[value]. 
  Will run until 55 >= 50, and then next line will execute
  Our empty placeholder 'roman' will now add the i value that our previous line just encountered. Roman = 0 + L -> L
  'i' acts as the property. 
  'map[i]' acts as the value. 
  
  L7 - In the next 'while loop' iteration, our num is now adjusted to 'num = num - map[i]', where we subtract the original num value to the property value we already operated on. 
  55 - 50 = 5
  The iteration runs again, where eventually '5 >= 5', and then 'roman = L + V -> LV' 
  
  L8 - We return our placeholder variable after all adjustments. 
  
  */
  
  /* END JAVASCRIPT FUNCTION */
  
  
  /* START WEB API */
  let submitButtonEvent = document.getElementById("submitButton");       
  
  submitButtonEvent.addEventListener("click", function() { 
      'use strict';                                                       
  
      let value = document.getElementById("inputString").value;  
      let notification = document.getElementById("notification");         
    
      if(convertToRoman(value >= 1 && value <= 1000 )) {                                      
        notification.innerHTML = convertToRoman(value);     
        
      } else {
        notification.innerHTML = 'Enter a number between 1 and 1000'; 
      }
  });
  /* END WEB API */