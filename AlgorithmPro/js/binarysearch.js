/********************************************************************************

    Description : Binary Search


   @auther : Sushilkumar Bobade
   @Date   : 25.10.2017

**********************************************************************************/

function binary_Number_Searching() {

  var variable_to_hold_string_input = new Array();
  var array_string = new Array();
  variable_to_hold_string_input = prompt("Enter Number in Accending Order ", "0");
  array_string = variable_to_hold_string_input.split(" ");
  var key_to_search = parseInt(prompt("Enter Number to search"));


  var first = 0;
  var last = array_string.length - 1;
  console.log(array_string.length);
  var middle = Math.round((first + last) / 2);

  while (first <= last) {
    if (array_string[middle] < key_to_search)
      first = middle + 1;
    else if (array_string[middle] == key_to_search) {
      var index = middle + 1
      document.getElementById("display_result").innerHTML = key_to_search + " found at location " + index;
      break;
    } else
      last = middle - 1;

    middle = Math.round((first + last) / 2);
  }
  if (first > last)

    document.getElementById("display_result").innerHTML = key_to_search + " not found in the List ";



}
