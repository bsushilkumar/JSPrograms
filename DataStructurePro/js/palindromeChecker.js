/***************************************************************************************************************************

    Description : Palindrome-Checker
                  Desc  -> A palindrome is a string that reads the same forward and backward, for example, radar, toot, and
                           madam. We would like to construct an algorithm to input a string of characters and check whether
                           it is a palindrome.
                  I/P   -> Take a String as an Input
                  Logic -> The solution to this problem will use a deque to store the characters of the string. We will
                           process the string from left to right and add each character to the rear of the deque.
                  O/P ->   True or False to Show if the String is Palindrome or not.


    @auther : Sushilkumar Bobade
    @Date   : 2.11.2017

******************************************************************************************************************************/


/**
 *    @Calling palindromeChecker()
 *    @This function will take input and separated do store in Queue.
 */

function palindromeChecker(){

var input=document.getElementById("input_name").value;
var updated_input=input.split("");
for (var i = 0; i < updated_input.length; i++) {
  /**
   *    @Calling enqueue method to store dada in queue.
   */
  Queue.prototype.enqueue(updated_input[i]);
}

Queue.prototype.palindrom();
}


/**
 *    @Queue() function.
 */
function Queue() {
    //window.front = 1;
  //  window.rear = 1;
  //  window.storage = {};
}
Queue.prototype.front = 1;
Queue.prototype.rear = 1;
Queue.prototype.storage = {};
Queue.prototype.size = function() {
    return this.rear - this.front;
};

Queue.prototype.enqueue = function(input) {
    this.storage[this.rear] = input;
    this.rear++;
};


/*
Queue.prototype.dequeue = function() {
    var front = this.front,
        rear = this.rear,
        deletedData;

    if (front !== rear) {
        deletedData = this.storage[front];
        delete this.storage[front];
        this.front++;

        return deletedData;
    }
};
*/
/**
 *    @Palindrome function to ckech word is palindrom or not.
 */
Queue.prototype.palindrom=function(){
if((this.rear-this.front)==1)
   {
     alert("Enter string...! ");
   }
   if(this.rear>=this.front)
   {  var result_flag=true;
        this.rear--;
       while (!(this.rear<this.front)) {

         if (this.storage[this.rear]!=this.storage[this.front]) {

                  result_flag=false;
         }
         this.front++;
         this.rear--;
       }

     if (result_flag) {
        alert("String is Palindrome");
     }
     else {
       alert("String is not Palindrome");
     }


   }

};
