
/********************************************************************************************

    Description : Take a range of 0 - 1000 Numbers and find the Prime numbers in that range
                  and also find anagram and palindrom numbers.


    

    @auther : Sushilkumar Bobade
    @Date   : 1.11.2017

*********************************************************************************************/


/**
 *   @balancedExpression() funtion to check equation is balanced or not.
 */
function balancedExpression(){
var equation_string=document.getElementById("equation").value;
 var equation_array=equation_string.split("");
var Stack=[] ;

for (var i = 0; i < equation_array.length; i++) {
     if (equation_array[i] == "(") {
           Stack.push(equation_array[i]);
     }
     if (equation_array[i] == ")") {
       Stack.pop();
     }


}

   if (Stack.length>= 1) {
        document.getElementById("output").innerHTML="Equation is not balanced Expression.";
   }
else {

   document.getElementById("output").innerHTML="Equation is balanced Expression.";
}


}

/**
 *   @Creating stack.
 */
var Stack = function(){
  this.top = null;
  this.size = 0;
};

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

  this.top = this.top.previous;
  this.size -= 1;

};
