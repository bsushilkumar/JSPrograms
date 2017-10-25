/********************************************************************************************
   
    Description : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 




   @auther : Sushilkumar Bobade	
   @Date   : 25.10.2017

*********************************************************************************************/

function prime_number_calculation_function(){

  
 var isPrime, n;
  var result_storing_variable="";      
 
       
        // For every number between 2 to 1000, check
        //  whether it is prime number or not
        for (var i = 2; i <=1000; i++) {
            isPrime = 0;
            // Check whether i is prime or not
            for (var j = 2; j <i; j++) {
                // If any number between 2 to i/2 divides i
                // completely then i cannot be prime number
                if (i % j == 0) {
                    isPrime = 1;
                    break;
                }
            }
 
            if (isPrime == 0)
              result_storing_variable +=i+" ";
            
       

}
       document.getElementById("display_result").innerHTML="Prime Factors of Given number are : " +result_storing_variable;
}
