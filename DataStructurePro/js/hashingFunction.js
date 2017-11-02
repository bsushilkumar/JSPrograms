
function hashFunction(){
var number_set=document.getElementById("text").value;
   creatingLinkList(number_set);

}

function creatingLinkList(data) {
  var list_data = data.split(" ").sort();

  for (var i = 0; i < 10; i++) {
    SinglyList.prototype.add(i);
  }

 for (var i = 0; i < list_data.length; i++) {

   var result=division(list_data[i]);
   SinglyList.prototype.add_value(list_data[i],result);
 }


  alert("read data from the file and stored in link list are...");
   SinglyList.prototype.printList();
  document.getElementById("beforupdate").innerHTML= "Data present in file = "+print;


}


function Node(data) {
  this.data = data;
  this.next = null;
   this.node_head=null;
   var counter=0;
}

function Value(data){
this.value=value;
this.value_next=null;

}

function SinglyList() {
  this._length = 0;
  this.head = null;
}





/**
 *   @ SinglyList.prototype.add() this functin will create new node and into link list
 */
SinglyList.prototype.add = function(value) {
  var node = new Node(value);
    currentNode = this.head;

  // 1st use-case: an empty list
  if (!currentNode) {
    this.head = node;
    this._length++;

    return node;
  }

  // 2nd use-case: a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;

  this._length++;

  return node;
};


/**
 *   @ SinglyList.prototype.add_value() this functin will create new node and link to it's
        currentNode of linkList.
 */

SinglyList.prototype.add_value=function(data,position){
var value= new value(data);

/**
 *   @Main link list
 */
currentNode = SinglyList.head;
while (!(currentNode.data==data)) {
                if (currentNode.data==data) {
                  /**
                   *   @Sub link list inside main list.
                   */
                  var current_node=this.Node.node_head;
                  if (!current_Node) {
                    this.Node.node_head = value;
                    this.Node.counter++;

                  }

                  // 2nd use-case: a non-empty list
                  while (current_node.next) {
                    current_node = current_Node.next;
                  }

                  current_node.next = value;

                  this.Node.counter++;

                }
  currentNode = currentNode.next;
}


};



function division(value){
  return Math.round(value/11);
}
