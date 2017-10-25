
/********************************************************************************
   
    Description : Bubble sortig of number and string


   @auther : Sushilkumar Bobade	
   @Date   : 25.10.2017

**********************************************************************************/
function select_value_check_Function(){

   var data_type = document.getElementById("dataType");
         var selectedValue=data_type.options[data_type.selectedIndex].value
if (selectedValue == "string") {
   bubble_sorting_for_string();
}

if (selectedValue == "integer") {
   bubble_sorting_for_integer();
}


}




function  bubble_sorting_for_string()
{
 
var variable_to_hold_string_input=new Array();
var array_string=new Array();
var temp;
var string_result="";
var total_string=parseInt(prompt("Enter how many number u want to enter"));
variable_to_hold_string_input=prompt("enter values","0");
array_string=variable_to_hold_string_input.split(" ");
for(var i=0;i<=total_string-1;i++)
  {
  for(var j=0;j<=total_string-i-1;j++)
     {   if((array_string[j].localeCompare(array_string[j+1]))==1){
       temp=array_string[j];
       array_string[j]=array_string[j+1];
       array_string[j+1]=temp;

    }
     }
   }


 for(var p=0;p<total_string.length;p++)
        {

        string_result +=array_string[p]+" ";

}
     document.getElementById("display_result").innerHTML="Bubble Sorting = "+string_result;


}

function  bubble_sorting_for_integer(){

var variable_to_hold_input=new Array();
var variable_to_hold_convertedArray=new Array();
var temp;
var result;
var total_number_inserted=parseInt(prompt("Enter how many number u want to enter"));
variable_to_hold_input=prompt("enter values","0");
variable_to_hold_convertedArray=variable_to_hold_input.split(" ");
for(i=0;i<=total_number_inserted-1;i++)
  {
  for(j=0;j<=total_number_inserted-i-1;j++)
     {  if(variable_to_hold_convertedArray[j]>variable_to_hold_convertedArray[j+1])
        {
       temp=variable_to_hold_convertedArray[j];
      variable_to_hold_convertedArray[j]=variable_to_hold_convertedArray[j+1];
       variable_to_hold_convertedArray[j+1]=temp;
       }
     }
   }

 
   for(var p=0;p<variable_to_hold_convertedArray.length;p++)
        {

        result +=variable_to_hold_convertedArray[p]+" ";

}
     document.getElementById("display_result").innerHTML="Bubble Sorting = "+result;

}
