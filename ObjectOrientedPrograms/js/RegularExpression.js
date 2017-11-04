
/*********************************************************************************************************

    Description : Regular Expression Demonstration
                  Desc -> Read in the following message: Hello <<name>>, We have your full name as
                          <<full name>> in our system. your contact number is 91-xxxxxxxxxx. Please,let
                          us know in case of any clarification Thank you BridgeLabz 01/01/2016. Use Regex
                          to replace name, full name, Mobile#, and Date with proper value.




   @auther : Sushilkumar Bobade
   @Date   : 4.11.2017

*************************************************************************************************************/

/**
 *   @This function Have Details in the Record.Main aim of this function is to get name as input from user
 *     and check related details are present in record or not.
 */
function checkingRecords(){
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getYear();
var sushil='{"Sushil":[{"FullName":"Sushilkumar Bobade","MobileNo":"+91-8451840740"}]}';
  localStorage.setItem("Sushil",sushil);

  var name=document.getElementById("name").value;
  if (name==="sushil") {
    console.log(localStorage.getItem("Sushil"));
     obj = JSON.parse(localStorage.getItem("Sushil"));


    document.write("Full Name -->"+obj.Sushil[0].FullName+"<br> Mobile Number -->"+obj.Sushil[0].MobileNo+
                     "<br> Current Date - "+ day+"/"+month+"/"+year);
  }
  else {
    document.write("Your Details Not found in Record ");
  }
}
