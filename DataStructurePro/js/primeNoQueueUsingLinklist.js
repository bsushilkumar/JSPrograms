/**************************************************************************************************************************

    Description : Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue using the Linked List and
                  Print the Anagrams from the Queue.




    @auther : Sushilkumar Bobade
    @Date   : 2.11.2017

********************************************************************************************************************************/

var anagram_numbers="";
var temp;

/**
 *  @ calculatePrimeNumbers() function calculate prime numbers from 2 to 1000. and store that number in Queue.
 *
 */
function calculatePrimeNumbers() {
  var isPrime;

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
      Queue.prototype.enqueue(i);
    }

  }

  for (var i = 0; i < Queue.prototype.size; i++) {
     /**
      *     @Take out result from queue to check it is Anagram or not.
      */
     Queue.prototype.dequeue();

  }
document.getElementById("display_result").innerHTML = "Anagram Numbers in Queue are <br>"+anagram_numbers;
}


  var Queue = function() {
    this.first = null;
  };

  Queue.prototype.size = 0;
  var Node = function(data) {
    this.data = data;
    this.next = null;
  };


  /**
   *   @enqueue() method insert data into queue.
   */

  Queue.prototype.enqueue = function(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
    } else {
      n = this.first;
      while (n.next) {
        n = n.next;
      }
      n.next = node;
    }

    this.size += 1;
    return;
  };
  /**
   *   @dnqueue() method delete data from queue.
   */
  Queue.prototype.dequeue = function() {
    temp = this.first.data;
    this.first = this.first.next;


    /**
     *  @Take out number from queue and check it is anagram of not.
     */
    var number = new Array();
    var num=temp;
    while (temp > 0) {


      number.push(temp % 10);
      /**
       *   @Using floor function to calculate nearest integer number.
       */
      temp = Math.floor(temp / 10);

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
