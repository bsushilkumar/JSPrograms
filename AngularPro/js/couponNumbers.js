/********************************************************************************
   
    Description : Distinct CouponNumber Generation

    Remark : not completed 

   @auther : Sushilkumar Bobade	
   @Date   : 19.10.2017

**********************************************************************************/

function couponGeneration(){

  var input_to_generat_coupon=parseInt(document.getElementById("number").value);
   var array_hold_uniqe_coupons=new Array();
   var repeated_coupon_count=0;
   var coupon_generated_count=0;
   var array_index=0;
    while(array_hold_uniqe_coupons.length < input_to_generat_coupon)
    {  
     

       coupon_generated_count++;

/**
 *   @generating randome number using Math.random() function
 */
         var cnumber=Math.random()*100;
          
 /**
 *   @Checking generated coupon is New or repeated
 *   @Collecting new coupons in array.
 */    

          if(array_hold_uniqe_coupons[0]==null)
             { 

                 array_hold_uniqe_coupons[0]=cnumber;
                 array_index++;
               }    
 
               else
               {  var flag=false;
                      for(i=0;i<array_hold_uniqe_coupons.length;i++)
                        {    
                           if(cnumber==array_hold_uniqe_coupons[i])
                                   {flag=true;
                                      
                                      break;
                                     }
                           else{ flag=false;}
           

                          }
                        if(flag==false)
                         {
                             array_hold_uniqe_coupons[current]=cnumber;
                                array_index++; 

                          }else{repeated_coupon_count++;}
 
               }
      
           
}


document.getElementById("result").innerHTML="Total Randome number needed are "+coupon_generated_count+"<br>"+"Repeted generated numbers ="+repeated_coupon_count;





}
