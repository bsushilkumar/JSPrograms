/********************************************************************************
   
    Description : Distance



    @auther : Sushilkumar Bobade	
    @Date   : 19.10.2017

**********************************************************************************/

function calDistance(){

   var X1=parseInt(document.getElementById("x1").value);
  var Y1=parseInt(document.getElementById("y1").value);
    var X2=parseInt(document.getElementById("x2").value);
  var Y2=parseInt(document.getElementById("y2").value);

    var dis=Math.sqrt(Math.pow((X2-X1),2) + Math.pow((Y2-Y1),2));
    
   	 document.getElementById("result").innerHTML="Distance between"+"("+X1+","+Y1+")"+"-"+"("+X2+","+Y2+") = "+ dis;

 }

