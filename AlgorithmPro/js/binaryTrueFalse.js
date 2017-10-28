/********************************************************************************

    Description : Binary Search with true/false


   @auther : Sushilkumar Bobade
   @Date   : 28.10.2017

**********************************************************************************/

/**
 * @Declaring global variales
 */
var middle = 0;
var first = 0;
var last = 0;
var binary_input;
var array_string;
var mid_value;


function binarySearchTrueFlase() {

  binary_input = new Array();
  array_string = new Array();
  binary_input = prompt("Enter Number in Accending Order ", "0");
  array_string = binary_input.split(" ").sort();


  last = array_string.length - 1;
  console.log(array_string.length);
  middle = Math.round((first + last) / 2);
  mid_value = array_string[middle];
  document.write("mid value of list is " + mid_value + "<br>" + "<h2>Number you are seaching is greater than midd value ? <br if yes press true button and if not then click false></h2>" +
    "<input type='button' id='true' value='true' onClick='incermentFirst()'>" + "<br>" +
    "<input type='button' id='false' value='false' onClick='decrementLast()'> ");


}


/**
 * @If number not found this function will execute
 */
function numberFound() {

  document.write(mid_value + " is number you are searching");
}

/**
 * @if number is gerater than middle value then incermentFirst() get executed
 */
function incermentFirst() {
  if (first <= last) {
    first = middle + 1;
    middle = Math.round((first + last) / 2);
    mid_value = array_string[middle];
    document.write("<br><br>mid value of list is " + mid_value + "<br>" + "<h2>Number you are seaching is greater than midd value ? <br if yes press true button and if not then click false></h2>" +
      "<input type='button' id='true' value='true' onClick='incermentFirst()'>" +
      "<br>" + "<input type='button' id='false' value='false' onClick='decrementLast()'>" +
      "<br>" + "if number found click OK button" + "<input type='button' id='ok' value='ok' onClick='numberFound()'><br><br>");
  } else {
    document.write("Number not found");
  }

}

/**
 * @if number is smaller than middle value then decrementLast() get executed
 */
function decrementLast() {
  if (first <= last) {


    last = middle - 1;
    middle = Math.round((first + last) / 2);
    mid_value = array_string[middle];
    document.write("<br><br>mid value of list is <br>" + mid_value + "<br>" + "<h2>Number you are seaching is greater than midd value ? <br if yes press true button and if not then click false></h2>" +
      "<input type='button' id='true' value='true' onClick='incermentFirst()'>" + "<br>" +
      "<input type='button' id='false' value='false' onClick='decrementLast()'>" +
      "<br>" + "if number found click OK button" + "<input type='button' id='ok' value='ok' onClick='numberFound()'><br><br>");
  } else {
    document.write("Number not found");
  }

}
