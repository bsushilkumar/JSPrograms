/**************************************************************************************************************************

    Description : Simulate Banking Cash Counter
                  Desc  -> Create a Program which creates Banking Cash Counter where people come in to deposit Cash and
                           withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw money and
                           dequeue the people. Maintain the Cash Balance.
                  I/P   -> Panel to add People to Queue to Deposit or Withdraw Money and dequeue
                  Logic -> Write a Queue Class to enqueue and dequeue people to either deposit or withdraw money and maintain
                           the cash balance
                  O/P   -> True or False to Show Arithmetic Expression is balanced or not.



    

    @auther : Sushilkumar Bobade
    @Date   : 1.11.2017

********************************************************************************************************************************/

var amount=0;
var cash_withdraw;
var cash_deposit;

/**
 *   @withdraw() method to withdraw cash.
 */
function withdraw(){
 cash_withdraw=parseInt(document.getElementById("withdraw").value);

if(cash_withdraw > amount)
{
    alert("no sufficiant balance to withdraw");
}
 if(cash_withdraw <amount){
   amount=amount-cash_withdraw;
  Queue.prototype.dequeue();
  alert("you successfuly withdraw amount");
 }

 document.getElementById("withdraw").value="";
 document.getElementById("deposit").value="";

}

/**
 *   @deposit() method to credit cash.
 */
function Deposite(){
 cash_deposit=parseInt(document.getElementById("deposit").value);
 amount +=cash_deposit;
    Queue.prototype.enqueue(cash_deposit);
    document.getElementById("withdraw").value="";
    document.getElementById("deposit").value="";

 }

 /**
  *   @count() function will return how many Peoples waiting in queue.
  */
function count()
{
  if(Queue.prototype.size>0)
   {
     alert("Peoples standing in Queue are ="+Queue.prototype.size);
     document.getElementById("withdraw").value="";
     document.getElementById("deposit").value="";

   }
   else {
     alert("No one in the Queue");
     document.getElementById("withdraw").value="";
     document.getElementById("deposit").value="";

   }
}

/**
 *   @Queue method to define Queue
 */
var Queue = function() {
  this.first = null;
};

Queue.prototype.size=0;
var Node = function(data) {
  this.data = data;
  this.next = null;
};


/**
 *   @enqueue() method insert data into queue.
 */

Queue.prototype.enqueue = function(data) {
  var node = new Node(data);

  if (!this.first){
    this.first = node;
  } else {
    n = this.first;
    while (n.next) {
      n = n.next;
    }
    n.next = node;
  }

  this.size +=1;
  return ;
};
/**
 *   @dnqueue() method delete data from queue.
 */
Queue.prototype.dequeue = function() {
  temp = this.first;
  this.first = this.first.next;
  this.size -=1;
  return ;
};
