/*********************************************************************************************************

    Description :Stock Report
                 Desc -> Write a program to read in Stock Names, Number of Share, Share Price. Print a
                         Stock Report with total value of each Stock and the total value of Stock.
                 I/P -> N number of Stocks, for Each Stock Read In the Share Name, Number of Share,
                        and Share Price
                 Logic -> Calculate the value of each stock and the total value
                 O/P -> Print the Stock Report.
                 Hint -> Create Stock and Stock Portfolio Class holding the list of Stocks read from the input file. Have functions in the Class to calculate the value of each stock and the value of total stocks




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
    tottalShareAmount +=parseInt(myObj.Share_Price);
    totallShareCount +=parseInt(myObj.Share_Number);

    document.write("Share Name -->"+myObj.Share_Name+"<br>"+"Number of Share-->"+myObj.Share_Number+"<br>"+"Share Price -->"+myObj.Share_Price);
    document.write("<br><br>");
  }

  document.write("---------------------------------")
  document.write("<br>Total Share -->"+totallShareCount);
  document.write("<br>Total Share Amount -->"+tottalShareAmount);
}



}
