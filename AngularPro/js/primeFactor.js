function primeFact(){

  
 var i, j, isPrime, n;
  var result="";      
 var no=document.getElementById("num").value;
       
        // For every number between 2 to N, check
        //  whether it is prime number or not
        for (i = 2; i <= no; i++) {
            isPrime = 0;
            // Check whether i is prime or not
            for (j = 2; j <i; j++) {
                // If any number between 2 to i/2 divides i
                // completely then i cannot be prime number
                if (i % j == 0) {
                    isPrime = 1;
                    break;
                }
            }
 
            if (isPrime == 0)
              result +=i+" ";
            
       

}
       document.getElementById("print").innerHTML="Prime Factors of Given number are : " +result;
}
