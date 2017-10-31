/***************************************************************************************************

    Description :Write Binary.java to read an integer as an Input, convert to Binary u
                 sing toBinary function and perform the following functions.
                 i. Swap nibbles and find the new number.
                ii. Find the resultant number is the number is a power of 2.
                A nibble is a four-bit aggregation, or half an octet. There are two nibbles
                in a byte. Given a byte, swap the two nibbles in it. For example 100 is to
                be represented as 01100100 in a byte (or 8 bits). The two nibbles are (0110)
                and (0100). If we swap the two nibbles, we get 01000110 which is 70 in decimal.
 .


   @auther : Sushilkumar Bobade
   @Date   : 31.10.2017

***************************************************************************************************/

/**
 *   @convertToBinnary() function which converts decimal number into binary.
 */
          var bits = [];
          var first_half,second_half;
          var newNumber=0;
          var result;


       function ConvertToBinary() {

            var decimal_number=prompt("Enter Decimal Number", "");
            var bits = [];

            var dividend = decimal_number;
            var remainder = 0;
            while (dividend >= 2) {
                remainder = dividend % 2;
                bits.push(remainder);
                dividend = (dividend - remainder) / 2;
            }
            bits.push(dividend);
            result=bits.reverse();
           swapFindNewNumber(result);



        }

      function swapFindNewNumber(result){

      if(result.length <8)
      {
        var addZeros=8-result.length;
        for (var i = 0; i < addZeros; i++) {
/**
 *    @Unshift function used to add  zeros at starting of result to make length 8 in size
 */
          result.unshift(0);
        }

       first_half= result.slice(0, 4);
       second_half=result.slice(4,8);
       var swaped_array=second_half.concat(first_half);
       var revers_swaped_array=swaped_array.reverse();
         var j=swaped_array.length;
        for (var i = 0; i < revers_swaped_array.length; i++)
        {
          if (revers_swaped_array[i]==1 ) {
            newNumber+= Math.pow(2,i);

          }
            j--;
        }

      }

document.getElementById("display_result").innerHTML="Decimal to binary = "+ newNumber;


      }
