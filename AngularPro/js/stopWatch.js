


function staWatch(){
   
 startTime = new Date();
	alert("Watch Started");

}

function stoWatch(){
   	alert("Watch Stop");
endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;
     // get seconds 
  var seconds = Math.round(timeDiff);
   document.write("<h3>elapsed time </h3>"+seconds+ " seconds")
}










/********************************************************************************
   
    Description : Stop Watch



   @auther : Sushilkumar Bobade	
   @Date   : 19.10.2017

**********************************************************************************/


