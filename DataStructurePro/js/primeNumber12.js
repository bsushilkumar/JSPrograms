/********************************************************************************************

    Description : Extend the Prime Number Program and store only the numbers in that range
                  that are Anagrams. For e.g. 17 and 71 are both Prime and Anagrams in the
                  0 to 1000 range. Further store in a 2D Array the numbers that are Anagram
                  and numbers that are not Anagram.





    @auther : Sushilkumar Bobade
    @Date   : 25.10.2017

*********************************************************************************************/
result_storing_variable="";
 palindromNumber="";
 reverseNonprimeNumber="";
 reversedPrimeNumber="";
 primeNumber="";
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
findingNumberPrimeAndAnagramBoth(palindromNumber);
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

function findingNumberPrimeAndAnagramBoth(array){

var variableToHoldArray=array.split(" ");
var temporaryVariable;
for (var i = 1; i < variableToHoldArray.length; i++) {

  var reversed = 0;
  temporaryVariable=variableToHoldArray[i];
 while (temporaryVariable != 0) {
  reversed *= 10;
  reversed += temporaryVariable % 10;
  temporaryVariable -= temporaryVariable % 10;
  temporaryVariable /= 10;
 }

  var resultFlag=checkPrimeOrNot(reversed);
  if (resultFlag==0 &&reversed<1000) {

       reversedPrimeNumber +=" "+reversed;
       primeNumber +=variableToHoldArray[i]; //last time modification.
  }
  if (resultFlag==1) {
     reverseNonprimeNumber += " "+variableToHoldArray[i];
  }

}




}

function checkPrimeOrNot(data){
  var count=0;
  var value=parseInt(data);
  for(i=2; i<data; i++)
         {
             if(value%i == 0)
             {
                 count++;
                 break;
             }
         }
         if(count == 0)
         {
             return 0;
         }
         else
         {
             return 1;
         }

}
