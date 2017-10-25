/********************************************************************************
   
    Description : Insertion sortig of number and string


   @auther : Sushilkumar Bobade	
   @Date   : 18.10.2017

**********************************************************************************/

function calculate_distinct_Triplet(){


var variable_to_hold_input=new Array();
var array_input=new Array();

var total_array_size=parseInt(prompt("Enter size of number to be inserted"));
variable_to_hold_input=prompt("enter value","0");
array_input=parseInt(variable_to_hold_input.split(" "));


var i;
var j;
var k,count=0;
	for(i=0;i<total_array_size;i++){
		for(j=i+1;j<total_array_size;j++)
		{
                  for(k=j+1;k<total_array_size;k++)
		{// printing distinct triples (i, j, k) where a[i] + a[j] + a[k] = 0
			if (array_input[i] + array_input[j] + array_input[k] == 0)
				{
			    document.getElementById("show").innerHTML=array_input[i] + " " + array_input[j] + " " +array_input[k];
                             
				count++;
				}
				}
			}
}



}
