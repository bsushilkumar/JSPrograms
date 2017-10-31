/********************************************************************************

    Description :Decimal to Binary conversion.


   @auther : Sushilkumar Bobade
   @Date   : 26.10.2017

**********************************************************************************/

/**
 *   @convertToBinnary() function which converts decimal number into binary.
 */ 

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
            bits.reverse();


            document.getElementById("display_result").innerHTML="Decimal to binary = "+ bits.join("");

        }
