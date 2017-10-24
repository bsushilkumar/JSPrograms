/********************************************************************************
   
    Description : WindChill



   @auther : Sushilkumar Bobade	
   @Date   : 19.10.2017

**********************************************************************************/

function windCal(){

  var t=parseInt(document.getElementById("temp").value);
  var v=parseInt(document.getElementById("speed").value);
 
  var result=35.74 + 0.6215*t + (0.4275*t - 35.75) * Math.pow(v, 0.16);
   
   document.getElementById("show").innerHTML=result;

}
