/********************************************************************************
   
    Description : Distinct CouponNumber Generation

    Remark : not completed 

   @auther : Sushilkumar Bobade	
   @Date   : 19.10.2017

**********************************************************************************/

function couponFun(){

  var num=parseInt(document.getElementById("number").value);
   var arr=new Array();
   var rep=0;
   var count=0;
   var current=0;
    while(arr.length < num)
    {  
     

       count++;
         var cnumber=Math.random()*100;
          
     
          if(arr[0]==null)
             { 

                 arr[0]=cnumber;
                 current++;
               }    
 
               else
               {  var flag=false;
                      for(i=0;i<arr.length;i++)
                        {    
                           if(cnumber==arr[i])
                                   {flag=true;
                                      
                                      break;
                                     }
                           else{ flag=false;}
           

                          }
                        if(flag==false)
                         {
                             arr[current]=cnumber;
                                current++; 

                          }else{rep++;}
 
               }
      
           
}


document.getElementById("result").innerHTML="Total Randome number needed are "+count+"<br>"+"Repeted generated numbers ="+rep;





}
