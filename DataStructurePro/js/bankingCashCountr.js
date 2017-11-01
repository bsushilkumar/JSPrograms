
var amount=0;

function withdrwa(){
var data=parseInt(document.getElementById("withdraw").value);

if(data > amount)
{
    alert("no sufficiant balance to withdraw");
}
 if(data<amount){
  Queue.prototype.dequeue();
  alert("you successfuly withdraw amount");
 }

}


function Deposite(){
var data=parseInt(document.getElementById("deposit").value);
 amount +=data;
    Queue.prototype.enqueue(data);
    recursion();
 }


function count()
{
  if(Queue.prototype.size>0)
   {
     alert("Peoples standing in Queue are ="+Queue.prototype.size);
   }
   else {
     alert("No one in the Queue");
   }
}



/*
function count(){

}
*/

var Queue = function() {
  this.first = null;
//  this.count = 0;

};
Queue.prototype.size=0;
var Node = function(data) {
  this.data = data;
  this.next = null;
};


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
  return node;
};

Queue.prototype.dequeue = function() {
  temp = this.first;
  this.first = this.first.next;
  this.size -=1;
  return temp;
};


function recursion(){
 document.write("<html> <head><meta charset='utf-8'><h3>Bank Cash Counter</h3></head><body> <table border='2' > <tr><th>To withdraw</th><th>To Deposite</th><th>People In Queue</th> </tr><td><input type='text' id='withdraw' value='' ></td><td><input type='text' id='deposit' value='' ></td><td colspan='2'><input type='button' id='count' value='Count' onclick='count()'></td> <tr> <td><input type='button' name='' value='Withdraw' onclick='withdrwa()'></td> <td><input type='button' name='' value='Deposite' onclick='Deposite()'></td> </tr></table></body> </html>");



}
