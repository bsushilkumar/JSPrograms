/********************************************************************************

    Description : Vending Machine


   @auther : Sushilkumar Bobade
   @Date   : 28.10.2017

**********************************************************************************/

function withdrawingCash() {

  var amount = parseInt(document.getElementById("amount").value);
  var number = new Array();
  var print="";
  while (amount > 0) {

    number.push(amount % 10);
    amount = Math.floor(amount / 10);

  }
  number = number.reverse();
var i=0;
if(number.length==4)
{i=1;}
else if (number.length==3) {
  i=2;
}
else if (number.length==2) {
  i=3;
}
else if (number.length==1) {
  i=4;
}
  for (; i < number.length; i++) {

    
    if (i == 1) {
      if (number[i] < 10 && number[i] > 0) {

      print+=number[i] + "- 1000 Rs Notes<br>";
        //document.getElementById("thousend").innerHTML = number[i] + "- 1000 Rs Notes<br>";
        //    document.write(number[i] + "- 1000 Rs Notes<br>");
      }
    } else if (i == 2) {
      if (number[i] >= 5 && number[i] > 0) {
        if (number[i] == 5) {
            var demo=number[i];

         print+="1- 500 Rs Note<br>";
        //  document.getElementById("hundred").innerHTML = "1- 500 Rs Note<br>";
          //document.write("1- 500 Rs Note<br>");
        } else {
          var no2;
          if (number[i] > 5) {
            no2 = number[i] - 5;
           print+="1- 500 Rs Note<br>" + no2 + "- 100 Rs Notes";
          //  document.getElementById("hundred").innerHTML = "1- 500 Rs Note<br>" + no2 + "- 100 Rs Notes";
            //  document.write("1- 500 Rs Note<br>" + no2 + "- 100 Rs Notes");
          }
          if (number[i] < 5) {

           print+=no2 + "- 100 Rs Notes";
          //  document.getElementById("hundred").innerHTML = no2 + "- 100 Rs Notes";
            //  document.write(no2 + "- 100 Rs Notes");
          }

        }
      }

    } else if (i == 3) {
      var no2;
      if (number[i] >= 5 || number[i] > 0) {

        if (number[i] == 5) {
   print+="<br>1- 50 Rs Notes";
          //  document.getElementById("ten").innerHTML = "<br>1- 50 Rs Notes";
          //  document.write( "1- 50 Rs Notes");
        }
        if (number[i] > 5) {
          no2 = number[i] - 5;
          print+="1- 50 Rs Note<br>" + no2 + "- 10 Rs Notes";
        //  document.getElementById("ten").innerHTML = "1- 50 Rs Note<br>" + no2 + "- 10 Rs Notes";
          //  document.write("1- 50 Rs Note<br>" + no2 + "- 10 Rs Notes");

        }

      }

    } else if (i == 4) {
      var no2;
      var no3;
      if (number[i] >= 5 || number[i] < 0) {
        if (number[i] == 5) {
          no2 = number[i] - 5;
          print+="1- 5 Rs Note";
        //  document.getElementById("unit").innerHTML = "1- 5 Rs Note";
          //  document.write("1- 5 Rs Note");
        }
        if (number[i] > 5) {
          no2 = number[i] - 5;
          if (no2 > 2 && no2 == 4) {
            if (no2 == 4) {
            print+="2- 2 Rs Note<br>";
            //  document.getElementById("unit").innerHTML = "2- 2 Rs Note<br>";
              //  document.write("2- 2 Rs Note<br>" );
            } else if (no2 > 2) {
              no3 = no2 - 2;
              no2 = number[i] - 5;
               print+="1- 2 Rs Note<br>" + no2 + "- 1 Rs Notes";
            //  document.getElementById("unit").innerHTML = "1- 2 Rs Note<br>" + no2 + "- 1 Rs Notes";
              //  document.write("1- 2 Rs Note<br>" + no2 + "- 1 Rs Notes");
            }
          }
        }
      }
    }

  }

}
