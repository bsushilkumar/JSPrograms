
/********************************************************************************
   
    Description : Insertion sortig of number and string


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
   insertion_sorting_for_string();
}

if (selectedValue == "integer") {
   insertion_sorting_for_integer();
}


}


/**
 *    @Function to Sort integer number by using Insertion Sort.
 */
function  insertion_sorting_for_integer(){

var variable_to_hold_input=new Array();
var variable_to_hold_convertedArray=new Array();
var temp;
var result="";
var total_number_inserted=parseInt(prompt("Enter how many number u want to enter"));
variable_to_hold_input=prompt("enter values","0");
variable_to_hold_convertedArray=variable_to_hold_input.split(" ");


/**
 *    @Insertion logic .
 */
   for( var i = 0 ;i < total_number_inserted ; i++ ) {
 
/** 
 *   @storing current element whose left side is checked for its 
 *    correct position .
 */

       temp = variable_to_hold_convertedArray[ i ];    
      var j = i;

/**  @check whether the adjacent element in left side is greater or
 *    less than the current element. 
 */

          while(  j > 0  && temp < variable_to_hold_convertedArray[ j -1]) {

/**
 *  @ moving the left side element to one position forward.
 */
  

              variable_to_hold_convertedArray[ j ] = variable_to_hold_convertedArray[ j-1];   
                j= j - 1;

           }
/**
 *   @moving current element to its  correct position.
 */
           variable_to_hold_convertedArray[ j ] = temp;       
     }  






   for(var p=0;p<variable_to_hold_convertedArray.length;p++)
        {

        result +=variable_to_hold_convertedArray[p]+" ";

}
     document.getElementById("display_result").innerHTML="Insertion Sorting = "+result;

}




/**
 *    @Stirng Sorting Function i.e insertion_sorting_string()
 */
function insertion_sorting_for_string(){




var variable_to_hold_input=new Array();
var variable_to_hold_convertedArray=new Array();
var temp="";
var i,j;
var result="";
var total_number_inserted=parseInt(prompt("Enter how many number u want to enter"));
variable_to_hold_input=prompt("enter values","0");
variable_to_hold_convertedArray=variable_to_hold_input.split(" ");



/**
 *    @Insertion sorting Logic for String nuput
 */
for (j = 1; j < variable_to_hold_convertedArray.length; j++) {
        temp = variable_to_hold_convertedArray[j];
        i = j - 1;
        while (i >= 0) {
            if (temp.localeCompare(variable_to_hold_convertedArray[i]) < 0) { 
            }
            variable_to_hold_convertedArray[i + 1] = variable_to_hold_convertedArray[i];
            i--;
        }
        variable_to_hold_convertedArray[i + 1] = temp;
   
    }
  


   for(var p=0;p<variable_to_hold_convertedArray.length;p++)
        {

        result +=variable_to_hold_convertedArray[p]+" ";

}
     document.getElementById("display_result").innerHTML="Insertion Sorting = "+result;

}























