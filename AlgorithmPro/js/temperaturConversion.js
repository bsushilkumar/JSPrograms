/********************************************************************************
   
   @Description : Temperature conversion Fahrenheit_To_Celsius and 
                  Celsius_To_Fahrenheit

   @auther      : Sushilkumar Bobade	
   @Date        : 25.10.2017

**********************************************************************************/

/**
 *  @Giving call to function as per input.
 */

function temperaturConversion(){


   var data_type = document.getElementById("temperature_type");
         var selectedValue=data_type.options[data_type.selectedIndex].value
if (selectedValue == "Fahrenheit_To_Celsius") {
   FahrenheitToCelsius();
}

if (selectedValue == "Celsius_To_Fahrenheit") {
   CelsiusToFahrenheit();
}


}


/**
 *  @Function to cnvert Fahrenheit To Celsius
 */

function FahrenheitToCelsius(){

var temperature=parseInt(prompt("Enter temperature in fahrenheit"," "));

          var Celsius= ((temperature - 32)*5)/9;
      
     
	        document.getElementById("display_result").innerHTML="Fahrenheit To Celsius ="+Celsius;




}


/**
 *  @Function to cnvert Celsius To Fahrenheit
 */

function CelsiusToFahrenheit(){

var temperature=parseInt(prompt("Enter temperature in Celsius"," "));
 
  var fahrenheit= (5/9)*(temperature - 32) ;

 document.getElementById("display_result").innerHTML="Celsius To Fahrenheit ="+fahrenheit;

}
