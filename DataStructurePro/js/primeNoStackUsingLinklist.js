/********************************************************************************************

    Description : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack
                  using the Linked List and Print the Anagrams in the Reverse Order.



    @auther : Sushilkumar Bobade
    @Date   : 2.11.2017

*********************************************************************************************/
var anagram_numbers="";
var temporary_variable;

/**
 *  @ calculatePrimeNumbers() function calculate prime numbers from 2 to 1000.
 *    and store that number in Stack
 *
 */
function calculatePrimeNumbers() {
  var isPrime;

  /**     @ For every number between 2 to 1000, check
          @  whether it is prime number or not
   */
  for (var i = 2; i <=1000; i++) {
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
      Stack.prototype.push(i);
    }

  }

  for (var i = 0; i < Stack.prototype.size; i++) {
     /**
      *     @Take out result from queue to check it is Anagram or not.
      */
     Stack.prototype.pop();

  }
document.getElementById("display_result").innerHTML = "Anagram Numbers in Stack are <br>"+anagram_numbers;
}


/**
 *   @Declaring stack function.
 */
var Stack = function(){
  this.top = null;
//  this.size = 0;
};
Stack.prototype.size=0;
/**
 *   @Creating nodes to store in stack.
 */
var Node = function(data){
  this.data = data;
  this.previous = null;
};

/**
 *   @Creating push() method to insert into stack.
 */
Stack.prototype.push = function(data) {
  var node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;

};

/**
 *   @Creating pop() method to remove from  stack.
 */
Stack.prototype.pop = function() {
    temporary_variable= this.top.data;
  this.top = this.top.previous;

//  this.size -= 1;


/**
 *  @Take out number from Stack and check it is anagram of not.
 */
var number = new Array();
var num=temporary_variable;
while (temporary_variable > 0) {


  number.push(temporary_variable % 10);
  /**
   *   @Using floor function to calculate nearest integer number.
   */
  temporary_variable = Math.floor(temporary_variable / 10);

}
number = number.reverse();
if (number.length <= 3) {
  if (number.length == 3) {
    if (number[0] == number[1] == number[2]) {

    } else {
      anagram_numbers += " " + num;
    }
  }
  if (number.length == 2) {
    if (number[0] == number[1]) {

    } else {
      anagram_numbers += " " + num;
    }
  }
  if (number.length == 1) {


  }

}



};
