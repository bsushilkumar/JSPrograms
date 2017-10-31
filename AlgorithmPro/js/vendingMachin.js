/********************************************************************************
   
    Description :Vending Machine do withdraw 9000 Rs.
                  purpose to Find the Fewest Notes to be returned for Vending Machine

                   

   @auther      : Sushilkumar Bobade	
   @Date        : 28.10.2017

**********************************************************************************/


/**
 *   @withdrawingCash() function which get amount from user and give the minimum 
 *    notes. 
 */ 

function withdrawingCash() {

  var amount = parseInt(document.getElementById("amount").value);
  var number = new Array();
  var print="";
  var j;
  var count=1;
  while (amount > 0) {


    number.push(amount % 10);
/**
 *   @Using floor function to calculate nearest integer number.
 */ 
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

  while(count<=number.length) {

/**
 *   @This if condition to calculate Thousend notes
 */   
    if (i == 1) {
		if(number.length==4){
		  j=0
		}
      if (number[j] < 10 && number[j] > 0) {

      print+=number[j] + "- 1000 Rs Note<br>";
       
		i++;
		j++;
      }


    }

/**
 *   @This if condition to calculate hundred notes
 */
 else if (i == 2) {
		if(number.length==3)
		{
		   j=0;
		}
      if (number[j] <= 5) {
        if (number[j] == 5) {
           
         print+="1- 500 Rs Note<br>";
       
		 

        }
		if(number[j]<5 && number[j]> 0)
		  {
		print+=number[j]+" 100 Rs Note<br>";
       
		  
		
		  }
		  i++;
		  j++;

      }else{
		  var no2;
          if (number[j] > 5) {
            no2 = number[j] - 5;
           print+="1- 500 Rs Note<br>" + no2 + "- 100 Rs Note<br>";
         
			
          }
          if (number[j] < 5 && number[j] >0) {

           print+=number[j] + "- 100 Rs Note<br>";
        
			
          }
            i++;
			j++;
		  }

    }
/**
 *   @This if condition to calculate ten rupees notes
 */
 else if (i == 3) {
      var no2;
	  if(number.length==2)
		{
	       j=0;
	  }

      if (number[j] >= 5 || number[j] > 0) {

        if (number[j] == 5) {
   print+="1- 50 Rs Note<br>";
          
		
        }
        if (number[j] > 5) {
          no2 = number[j] - 5;
          print+="1- 50 Rs Note<br>" + no2 + "- 10 Rs Note<br>";
       

        }

      }
	  if(number[j] <5 && number[j]>=0 )
		{
	         if(number[j] < 5 && number[j] > 0)
			{
			  print+=number[j]+"- 10 Rs Note<br>";
        
		  
			 }
			 if(number[j]==0)
			{
				
			 }
	    }
                 j++;
				 i++;
    } 

/**
 *   @This if condition to calculate one,two,five ruppes notes
 */
else if (i == 4) {
      var no2;
      var no3;
	  if(number.length==1)
		{
		  j=0;
	    }
      if (number[j] <= 9 || number[j] >= 0) {
        if (number[j] == 5) {
          no2 = number[j] - 5;
          print+="1- 5 Rs Note<br>";
       
		  
        }
        if (number[j] > 5) {
          no2 = number[j] - 5;

    

		  
          if (no2 == 4) {
            if (no2 == 4) {
            print+="1- 5 Rs Note<br>"+"2- 2 Rs Note<br>";
          
			  
            } 
          }
		  if(no2>0 && no2!=4)
			{
			    if(no2>2){
					no3=no2-2;
				 print+="1- 5 Rs Note<br>"+"1- 2 Rs Note<br>" + no3 + "- 1 Rs Note<br>";
				}
				if(no2==2){
				 print+="1- 5 Rs Note<br>"+"1- 2 Rs Note<br>";
				}
				 if(no2<2){
				   print+="1- 5 Rs Note<br>"+"1- 1 Rs Note<br>";
				 }
		  
		    }
        }
		if(number[j]<5){
		    
			 if(number[j] == 2)
			{
			    print+="1- 2 Rs Note<br>" ;
            
			  
			 }
			 if(number[j]==4)
	 		{
			   print+="2 - 2 Rs Note<br>";
            
			 }
			 if(number[j]==3)
			{
			  print+="1- 2 Rs Note<br>"+"1 - 1 Rs Note<br>";
          
			  
			 }
			 if(number[j]==1)
			{
			   print+="1- 1 Rs Note<br>";
          
			  
			 }
			 if(number[j]==0)
			{
			 
			  
			 }
		
		}

	          j++;
			  i++;
			  }
    }
	count++;

  }

/**
 *   @This line will print minimun notes which is require.
 */
  document.getElementById("result").innerHTML=print;

}
