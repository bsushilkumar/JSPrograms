/*********************************************************************************************************

    Description :Inventory Management Program
                 Desc -> Extend the above program to Create InventoryManager to manage the Inventory.
                         The Inventory Manager will use InventoryFactory to create Inventory Object from
                         JSON. The InventoryManager will call each Inventory Object in its list to calculate
                         the Inventory Price and then call the Inventory Object to return the JSON String.
                         The main program will be with InventoryManager
                 I/P  -> read in JSON File
                Logic -> Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON.
                         Calculate the value for every Inventory.
                O/P -> Create the JSON from Inventory Object and output the JSON String.




   @auther : Sushilkumar Bobade
   @Date   : 4.11.2017

*************************************************************************************************************/


/**
 *     @Declare variables with global scope.
 */

 stock_count=0;

 stock=[];
 result=0;
 count = 0;
totallShareCount=0;
tottalShareAmount=0
/**
 *   @ inputStock() function take stocks and its details. and print total number of shares stock contain
 *     and total amount of the stack.
 */


function inputStock(){
if (count==0) {
  stock_count= parseInt(document.getElementById("stock_count").value);
}
 document.getElementById("stock_count").disabled = true;

inputDetails();

}

function inputDetails(){

  while (count <stock_count) {
       var share_name=document.getElementById("share_name").value;
       var number_of_share=document.getElementById("number_of_share").value;
       var share_price=document.getElementById("share_price").value;
       result={"Share_Name":share_name,"Share_Number":number_of_share,"Share_Price":share_price};
      stock[count]=JSON.stringify(result);

      document.getElementById("share_name").value="";
      document.getElementById("number_of_share").value="";
      document.getElementById("share_price").value="";
      document.getElementById("result").innerHTML="Enter another stock details";
      count++
      break;
  }


/**
 *   @This block is to print the result.
 */
if (count>=stock_count) {
  for (var i = 0; i <stock_count; i++) {
    var myObj = JSON.parse(stock[i]);
    tottalShareAmount +=parseInt((myObj.Share_Price*myObj.Share_Number));
    totallShareCount +=parseInt(myObj.Share_Number);

    document.write("Share Name -->"+myObj.Share_Name+"<br>"+"Number of Share-->"+myObj.Share_Number+"<br>"+"Share Price -->"+myObj.Share_Price);
    document.write("<br><br>");
  }

  document.write("---------------------------------")
  document.write("<br>Total Share -->"+totallShareCount);
  document.write("<br>Total Share Amount -->"+tottalShareAmount);
}



}
