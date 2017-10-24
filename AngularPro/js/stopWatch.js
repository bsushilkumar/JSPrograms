/********************************************************************************
   
    Description : Stop Watch



   @auther : Sushilkumar Bobade	
   @Date   : 19.10.2017

**********************************************************************************/
function startWatch(){

  var d=new Date();
  var time=d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
   document.write(time);
}
