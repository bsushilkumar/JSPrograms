/********************************************************************************************
   
    Description : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 




   @auther : Sushilkumar Bobade	
   @Date   : 25.10.2017

*********************************************************************************************/

function prime_number_calculation_function(){

  
 var isPrime, n;
  var result_storing_variable="";      
 
       
/**     @ For every number between 2 to 1000, check
        @  whether it is prime number or not
 */
        for (var i = 2; i <=1000; i++) {
            isPrime = 0;
        
/** 
 *    @ Check whether i is prime or not
 */   

            for (var j = 2; j <i; j++) {


/**
 *      @ If any number between 2 to i/2 divides i
 */               
               
                if (i % j == 0) {
                    isPrime = 1;
                    break;
                }
            }
 
            if (isPrime == 0)
/**
 *     @Storing Prime number result in result_storing_variable.
 */
              result_storing_variable +=i+" ";
            
       

}
/**    @Code to find Palindrome for prime Numbers 
 * 
 */

  var array=result_storing_variable.split(" ");
   var hold_palindrome;
  for(var i=0;i<array.length;i++)
       {
            
/**
 *     @call checkPalindrom function to find which number is palindrome
 */
       var flag_variable=checkPalindrom(array[i]);
       if(flag_variable==1)
          {
                
              if(array[i]>10)
            {
/**
 *      @Storing Palindrome number in hold_palindrome variable.
 */
                hold_palindrome +=" <br>"+ array[i];
             }
        }
 }


   document.getElementById("display_result").innerHTML="Prime Factors of Given number are : " +result_storing_variable+"<br>"+"palendrome Numbers are "+hold_palindrome;



}




/** 
 *  @Palindrome Function to check which number is palindrome.
 */

function checkPalindrom(number){

var temp=0;
var b=number;
while(number>0)
{

a=number%10;
number=parseInt(number/10);
temp=temp*10+a;
}
if(temp==b)
{
   return 1;

}
else
{
    return 0;

}
return 0;

}
