/********************************************************************************
   
    Description : Gambler



   @auther : Sushilkumar Bobade	
   @Date   : 18.10.2017

**********************************************************************************/

function gamFunCall(){

        var $Stake=parseInt(document.getElementById("stake").value);
        var $Goal=parseInt(document.getElementById("goal").value);
        var $nTimes=parseInt(document.getElementById("ntime").value);
         
   


            
            var wins=0;
            var loss=0;
            var count=0;
             for(var i=0; i<$nTimes; i++) 
		{ 
			var cash = $Stake;
	            
			while (cash > 0 && cash < $Goal)
			{
				count++;
	        
				if (Math.random() < 0.5) 
					cash++;     // win $1
				else                     
					cash--;     // lose $1
			}
	            if (cash == $Goal) 
                     {
	            	wins++;         
                 }else{ loss++; }



}
     
       
      
        var perWin=(wins*100)/$nTimes;
        var perLoss=(loss*100)/$nTimes;
    
  document.getElementById("win").innerHTML="You won "+wins+ " times "+" Out Of "+$nTimes+"<br>"+"Percentage of wins is "+perWin+"<br>"+"Percentage of wins is "+perLoss+"<br>"+"Total count of game "+count; 
      

 

}

