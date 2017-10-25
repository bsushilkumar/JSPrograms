/********************************************************************************
   
    Description : Program to check two string are anagram or not.



    @auther : Sushilkumar Bobade	
    @Date   : 25.10.2017

**********************************************************************************/


function anagram_checking_function() {
     var first_string=document.getElementById("string_first").value;
     var second_string=document.getElementById("string_second").value;
     var loop_counting=0;
 
// @Applying split method to remove space between words and convert string into Array. 
// @Applying sorting on converted array to sort element by alphabeticaly 
 var temporary_variable_y = first_string.split("").sort();
  var temporary_variable_z = second_string.split("").sort();

// @Applay Loop to  check strings are anagram or not
  for (var i=0; i<temporary_variable_y.length; i++) {
    if(temporary_variable_y.length===temporary_variable_z.length) {
      if (temporary_variable_y[i]===temporary_variable_z[i]){
             
// @loop_counting variable used to take count of i'th location in loop;
                       loop_counting++;
                                
            if(loop_counting == temporary_variable_y.length)
                         {
                           document.getElementById("display_result").innerHTML= first_string+" and "+second_string + "are anagram !";
                               break;
                           }
 
              continue;
               
       //document.getElementById("display_result").innerHTML= first_string+" and "+second_string + "are anagram !"; 
    
        break;
      }
      else {
      document.getElementById("display_result").innerHTML= first_string+" and "+second_string + "are not anagram !";   
     
        break;
      }
    }
    else {
          document.getElementById("display_result").innerHTML= first_string + " has a different amount of letters than " + second_string; 
     // console.log(a + " has a different amount of letters than " + b);
    }
    break;
  }
}
