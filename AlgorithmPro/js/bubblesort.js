
/********************************************************************************
   
    Description : Bubble sortig of number and string


   @auther : Sushilkumar Bobade	
   @Date   : 25.10.2017

**********************************************************************************/
/**
 *  @Giving call to function as per input. String or Integer.
 */

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



/**
 *  @function to sort string as accending order
 */
function  bubble_sorting_for_string()
{
 
var variable_to_hold_string_input=new Array();
var array_string=new Array();
var temp;
var string_result="";
var total_string=parseInt(prompt("Enter how many string u want to enter"));
variable_to_hold_string_input=prompt("enter string with space","0");
array_string=variable_to_hold_string_input.split(" ");


/**
 *  @Bubble Sortin logic for string.
 */
for(var i=0;i<=total_string-1;i++)
  {
  for(var j=0;j<=total_string-i-1;j++)
     {   var result_flag=array_string[j].localeCompare(array_string[j+1]);
           
        if(result_flag==1){
       temp=array_string[j];
       array_string[j]=array_string[j+1];
       array_string[j+1]=temp;

    }
     }
   }
  
 /**
 *  @Printing sortd result  using loop
 */

 for(var q=0;q<array_string.length;q++)
        {

        string_result +=array_string[q]+" ";
        
      
   } document.getElementById("display_result").innerHTML="Bubble Sorting = "+string_result;

}





/**
 *  @Function to Sort Integer Number.
 */
function  bubble_sorting_for_integer(){

var variable_to_hold_input=new Array();
var variable_to_hold_convertedArray=new Array();
var temp;
var result;
var total_number_inserted=parseInt(prompt("Enter how many number u want to enter"));
variable_to_hold_input=prompt("enter values","0");
variable_to_hold_convertedArray=variable_to_hold_input.split(" ");

/**
 *  @Bubble Sort Logic for Integer number.
 */
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

 /**
 *  @Printing Sortd numbers.
 */
   for(var p=0;p<variable_to_hold_convertedArray.length;p++)
        {

        result +=variable_to_hold_convertedArray[p]+" ";

}
     document.getElementById("display_result").innerHTML="Bubble Sorting = "+result;

}
