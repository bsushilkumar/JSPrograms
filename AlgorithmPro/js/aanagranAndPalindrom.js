/********************************************************************************************

    Description : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range
                  and also find anagram and palindrom numbers.




    @auther : Sushilkumar Bobade
    @Date   : 25.10.2017

*********************************************************************************************/
var result_storing_variable="";
 var palindromNumber="";
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
document.write("Prime Factors of Given number are : " +result_storing_variable);
anagramCheckingFunction(result_storing_variable);
      // document.getElementById("display_result").innerHTML="Prime Factors of Given number are : " +result_storing_variable;
}


function anagramCheckingFunction(data){
 var anagranNumber;

 var primeNumbers=data.split(" ");

  for (var i = 0; i < primeNumbers.length; i++) {

      palindrom(primeNumbers[i]);
  }

document.write("<br><br>"+"Anagram Numbers are --><br>"+palindromNumber);

}


function palindrom(data){
 var number=[];

   var localVarialble=data;
      while (localVarialble > 0) {


        number.push(localVarialble % 10);
      /**
      *   @Using floor function to calculate nearest integer number.
      */
        localVarialble = Math.floor(localVarialble / 10);

      }
      number = number.reverse();
      var variable=number;

     if(number.length==3)
     {
           if (number[0]==number[1]==number[3]) {

           }else {
                 palindromNumber +=" "+data;
           }

     }
     if(number.length==2)
     {
           if (number[0]==number[1]) {

           }else {
                 palindromNumber +=" "+data;
           }

     }
     if(number.length==1)
     {


     }

return;

}
