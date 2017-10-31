/********************************************************************************************

    Description : To the Util Class add dayOfWeek static function that takes a date as input
                  and prints the day of the week that date falls on. Your program should take
                  three command-line arguments: m (month), d (day), and y (year). For m use 1
                  for January, 2 for February, and so forth. For output print 0 for Sunday, 1
                  for Monday, 2 for Tuesday, and so forth. Use the following formulas, for the
                  Gregorian calendar (where / denotes integer division):




    @auther : Sushilkumar Bobade
    @Date   : 31.10.2017

*********************************************************************************************/

function dayOfWeekCalculator(){

var day=parseInt(document.getElementById("day").value);
  var month=parseInt(document.getElementById("month").value);
  var year=parseInt(document.getElementById("year").value);

  var y0 =Math.round(year - (14 - month) / 12);
      var x = Math.round(y0 + y0/4 - y0/100 + y0/400);
      var m0 = month + 12 * ((14 - month) / 12) - 2;
      var d0 = (day + x + (31*m0)/12) % 7;

   if (d0==0) {
       document.getElementById("result").innerHTML="Week of the day is Sunday";

   }
   if (d0==1) {
       document.getElementById("result").innerHTML="Week of the day is Monday";

   }
   if (d0==2) {
       document.getElementById("result").innerHTML="Week of the day is Tuesday";

   }
   if (d0==3) {
       document.getElementById("result").innerHTML="Week of the day is Wednesday";

   }
   if (d0==4) {
       document.getElementById("result").innerHTML="Week of the day is Thursday";

   }
   if (d0==5) {
       document.getElementById("result").innerHTML="Week of the day is Friday";

   }

   if (d0==6) {
       document.getElementById("result").innerHTML="Week of the day is Saturday";

   }

}
