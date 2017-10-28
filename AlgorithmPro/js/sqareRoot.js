/********************************************************************************
   
    Description :Find Square Root.


   @auther : Sushilkumar Bobade	
   @Date   : 26.10.2017

**********************************************************************************/

/**
 *  @Function to calculate sqare root
 */


function calculateSquarRoot(){

var squareroot_number=parseInt(prompt("Enter non-negative number to find Square Root"," "));

/**
 *  @relative error tolerance
 */
var epsilon = 1e-15;  

        var square = squareroot_number;             



/**
 *  @repeatedly apply Newton update step until desired precision is achieved
 */
       var square_root;
        while (Math.abs(square - (squareroot_number/square)) > epsilon*square) {

           square_root = (squareroot_number/square + square) / 2.0;
     
	       
 }
 document.getElementById("show").innerHTML=square_root;

}

