/********************************************************************************
   
    Description : Harmonic Number calculator



   @auther : Sushilkumar Bobade	
   @Date   : 18.10.2017

**********************************************************************************/





function callFun(){
  
  var num = parseInt(document.getElementById("num").value);
    if(num>0)
   {
        var sum=0;
       for(var i=1; i<=num;i++)
           {
             
                 sum +=1/i;
              
                 document.write( "1/"+i);
                   if(i!=num)
                      {
                               
                      document.write(" + ");
                     }
           }
           document.write(" = " + sum);
  }
   else{

     document.write("N<sup>th</sup> value should be positive");
 
 }

  
   
 }


 
