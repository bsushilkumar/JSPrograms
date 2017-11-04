var doctorArray=[];
var doctorcount=0;
function choice() {


  var selected=parseInt(document.getElementById("choice").value);

   switch(selected){

     case 1:
     {
       addDoctor();
       break;
     }
     case 2:
     {
       addPatient();
       break;
     }
     case 3:
     {

     }
     case 4:
     {

     }
     case 5:
     {

     }
     case 6:
     {

     }
     case 7:
     {

     }
     case 8:
     {

     }
     case 9:
     {

     }

   }


}

functin doctor(name,id,specialization){
this.name=name;
this.id=id;
this.specialization=specialization;

}

function patient(name,age,mobileNo,diseases){
this.name=name;
this.age=age;
this.mobileNo=mobileNo;
this.diseases=diseases;

}

function addDoctor(){
 var name=prompt("Enter Doctor Name","");
 var id=prompt("Enter Doctor Id","");
 var specialization=prompt("Enter Specialization Area");

  doctorArray[doctorcount]=new doctor(name,id,specialization);
   doctorcount++;

}

function addPatient(){
  var name=prompt("Enter Doctor Name","");
  var id=prompt("Enter Doctor Id","");
  var specialization=prompt("Enter Specialization Area");

   doctorArray[doctorcount]=new doctor(name,id,specialization);
    doctorcount++;
}
