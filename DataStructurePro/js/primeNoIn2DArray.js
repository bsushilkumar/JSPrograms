/**************************************************************************************************************************

    Description : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store the prime numbers
                  in a 2D Array, the first dimension represents the range 0-100, 100-200, and so on. While the second
                   dimension represents the prime numbers in that range




    @auther : Sushilkumar Bobade
    @Date   : 3.11.2017

********************************************************************************************************************************/

/**
 *   @primeNo2DArray() function which print the 0-1000 prime numbers in 2-Dimensional Array.
 */
function primeNo2DArray(){

  var isPrime;
  var primeNo=0;
  var count=1;
  var primeResult;
/**
 *  @Creating one dimensional array.
 */
    var array=new Array();
  /**     @ For every number between 2 to 1000, check
          @  whether it is prime number or not
   */
  for (var i = 2; i <= 1000; i++) {
    isPrime = 0;

    /**
     *    @ Check whether i is prime or not
     */

    for (var j = 2; j < i; j++) {


      /**
       *      @ If any number between 2 to i/2 divides i
       */

      if (i % j == 0) {
        isPrime = 1;
        break;
      }
    }

    if (isPrime == 0) {
      /**
       *     @Storing Prime number result in Queue.
       */
    primeNo +=" "+i;


    }

  }

/**
 *     @Creating two dimensional Array.
 */
for(var i=0;i<10;i++)
 {

       array[i]=new Array(30);


  }

 primeResult=primeNo.split(" ");

/**
 *     @Code to display Result in 2-Dimensional Array.
 */
  for(var i=0;i<10;i++){

    for(var j=0;j<29;j++)
        {
             if(primeResult[count]<=100 || i==0)
             {  if(j==0){
               document.write("0-100 -->");
             }

                if(primeResult[count]>100 ){
                  count++;
                  break;
                }
                document.write(" "+primeResult[count]);
             }
             if((primeResult[count]>100&&primeResult[count]<=200)|| i==1)
             {if(j==0){
               document.write("100-200 -->");
             }

               if(primeResult[count]>200){
                 count++;
                 break;
               }
                document.write(" "+primeResult[count]);
             }
             if((primeResult[count]>200&&primeResult[count]<=300) || i==2)
             {
               if(j==0){
                 document.write("200-300 -->");
               }

               if(primeResult[count]>300){
                 count++;
                 break;
               }
               document.write(" "+primeResult[count]);
             }
             if((primeResult[count]>300&&primeResult[count]<=400)|| i==3)
             { if(j==0){
               document.write("300-400 -->");
             }
               document.write(" "+primeResult[count]);
               if(primeResult[count]>400){
                 count++;
                 break;
               }
                document.write(" "+primeResult[count]);
             }
             if((primeResult[count]>400&&primeResult[count]<=500)|| i==4)
             { if(j==0){
               document.write("400-500 -->");
             }

               if(primeResult[count]>500){
                 count++;
                 break;
               }
                document.write(" "+primeResult[count]);
             }
             if((primeResult[count]>500&&primeResult[count]<=600)|| i==5)
             {
               if(j==0){
                 document.write("500-600 -->");
               }

               if(primeResult[count]>600){
                 count++;
                 break;
               }
                document.write(" "+primeResult[count]);
             }
             if((primeResult[count]>600&&primeResult[count]<=700)|| i==6)
             {
               if(j==0){
                 document.write("600-700 -->");
               }

               if(primeResult[count]>700){
                 count++;
                 break;
               }
                  document.write(" "+primeResult[count]);
             }
             if((primeResult[count]>700&&primeResult[count]<=800)|| i==7)
             {
               if(j==0){
                 document.write("700-800 -->");
               }

               if(primeResult[count]>800){
                 count++;
                 break;
               }
                document.write(" "+primeResult[count]);
             }
             if((primeResult[count]>800&&primeResult[count]<=900)|| i==8)
             {
               if(j==0){
                 document.write("800-900 -->");
               }

               if(primeResult[count]>900){
                 count++;
                 break;
               }
                document.write(" "+primeResult[count]);
             }
             if((primeResult[count]>900&&primeResult[count]<=1000)|| i==9)
             { if(j==0){
               document.write("900-1000 -->");
             }
             if (primeResult[count]>900&&primeResult[count]<=1000) {
                document.write(" "+primeResult[count]);
             }else {
               break;
             }

             }
             count++;
        }

        document.write("<br><br><br>");

  }

}
