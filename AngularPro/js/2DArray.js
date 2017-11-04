/********************************************************************************

    Description : 2DArray program



   @auther : Sushilkumar Bobade
   @Date   : 19.10.2017

**********************************************************************************/



function Two_Dimensional_Array(){



 var row_of_array=parseInt(prompt("Total row ","Enter number here"));
 var col_of_array=parseInt(prompt("Total Column ","Enter number here"));

/**
 *    @Creating 2-Dimensional array
 */
    var array=new Array(row_of_array);
  for(var i=0;i<row_of_array;i++)
   {

         array[i]=new Array(col_of_array);


    }

/**
 *    @Taking input in array
 */

    for(var i=0;i<row_of_array;i++){
      for(var j=0;j<col_of_array;j++)
          {
                array[i][j]=prompt("Enter value");

          }

  }

    document.write(row_of_array+" * "+col_of_array+" Dimensional Array"+"<br><br>");

/**
 *    @Displaying array
 */
 for(var i=0;i<row_of_array;i++){
      for(var j=0;j<col_of_array;j++)
          {
                document.write(array[i][j]+" ");
          }
           document.write("<br><br>");

  }







}
