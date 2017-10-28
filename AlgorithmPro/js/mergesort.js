/********************************************************************************
   
    Description :Sortig of string by merge sorting.


   @auther : Sushilkumar Bobade	
   @Date   : 26.10.2017

**********************************************************************************/

/**
 *   @function to take input and call mergeSort().
 */
function mergeSortFunction(){


var string_input=new Array();
var array_string=new Array();
var result="";
string_input=prompt("Enter String to sort ","0");
array_string=string_input.split(" ");

/*
 *   Calling mergeSort() function  
 */
var sorted_array=mergeSort(array_string);


 for(var p=0;p<sorted_array.length;p++)
        {

        result +=sorted_array[p]+" ";

}
     document.getElementById("display_result").innerHTML="Merge Sorting = "+result;

}



/*
 *   @Actual Merge Sort Logic and break array into parts to sort
 *   @Return sored array to mergeSortFunction() function. 
 */
function mergeSort(array) {
 
    var length = array.length,
        mid    = Math.floor(length / 2),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);
 
    if(length === 1) {
      return array;
    }
 
    return merge(mergeSort(left), mergeSort(right));
 
}
 



/*
 *   @Merge array with sorting order. 
 *   @Return sored array to mergeSort() function. 
 */
function merge(left, right) {
 
  var sorted = [], i = 0, j = 0;
 
  while (i < left.length || j < right.length) {
    if (i < left.length && j < right.length){
      if (left[i] < right[j]){
        sorted.push(left[i]);
        i++;
      }else{
        sorted.push(right[j]);
        j++
      }
    }else if (i < left.length){
      sorted.push(left[i]);
      i++;
    }else{
      sorted.push(right[j]);
      j++;
    }
  }
 
  return sorted;
}
