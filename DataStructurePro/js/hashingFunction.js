/**************************************************************************************************************************

    Description : Hashing Function to search a Number in a slot
                  Desc  -> Create a Slot of 10 to store Chain of Numbers that belong to each Slot to efficiently search a
                           number from a given set of number
                  I/P   -> read a set of numbers from a file and take user input to search a number
                  Logic -> Firstly store the numbers in the Slot. Since there are 10 Numbers divide each number by 11 and
                           the reminder put in the appropriate slot. Create a Chain for each Slot to avoid Collision. If a number searched is found then pop it or else push it. Use Map of Slot Numbers and Ordered LinkedList to solve the problem. In the Figure Below, you can see number 77/11 reminder is 0 hence sits in the 0 slot while 26/11 remainder is 4 hence sits in slot 4
                  O/P   -> Save the numbers in a file.





    @auther : Sushilkumar Bobade
    @Date   : 3.11.2017

********************************************************************************************************************************/


/**
 *   @This function read set of data from screen and store in the 0-9 nodes as per result
 *     (value%2)
 *   @
 */

function hashFunction() {
  var number_set = document.getElementById("text").value;
  /**
   *   @calling creatingLinkList() function.
   */
  creatingLinkList(number_set);

}
/**
 *    @creatingLinkList() function to create node value of 0-9
 *    @And perform %2 operation on data and store that data as per its
 *     result.
 */
function creatingLinkList(data) {
  var list_data = data.split(" ").sort();

  for (var i = 0; i < 10; i++) {
    SinglyList.prototype.add(i);
  }

  for (var i = 0; i < list_data.length; i++) {

    var result = division(list_data[i]);
    Node.prototype.add_value(list_data[i], result);
  }
}

/**
 *    @Creating Node() function.
 */
function Node(data) {
  this.data = data;
  this.next = null;
  this.node_head = null;
  var counter = 0;
}

/**
 *    @Creating Value() function.
 */
function Value(data) {
  this.value = data;
  this.value_next = null;

}

/**
 *    @Creating SinglyList() function.
 */
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

Node.prototype.add_value = function(data, position) {
  var sub_value = new Value(data);

  /**
   *   @Main link list
   */
  var currentNode = SinglyList.prototype.head;
  while (currentNode.next) {
    if (currentNode.data == position) {
      /**
       *   @Sub link list inside main list.
       */
      var current_node = currentNode.node_head;
      if (!current_node) {
        currentNode.node_head = sub_value;
        this.counter++;
        return;
      }

      // 2nd use-case: a non-empty list
      while (current_node.value_next) {
        current_node = current_node.value_next;
      }

      current_node.value_next = sub_value;

      this.counter++;
      return;

    }
    currentNode = currentNode.next;
  }


};

/**
 *    @Creating division function which returns result with round value.
 */
function division(value) {
  return Math.round(value % 2);
}

SinglyList.prototype.display = function() {


};
