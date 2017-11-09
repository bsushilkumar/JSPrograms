var doctorArray = [];
var doctorcount = 0;
var patientArray = [];
var patientCount = 0;

function choice() {


  var selected = parseInt(document.getElementById("choice").value);

  switch (selected) {

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
        printDoctorList();
        break;
      }
    case 4:
      {
        printPatientList();
        break;
      }
    case 5:
      {
         takingAppoinment();
         break;
      }
    case 6:
      {

           searchDoctorById();
           break;
      }
    case 7:
      {
           searchAvailability();
           break;

      }
    case 8:
      {

      }
    case 9:
      {

      }

    default:
      {
        alert("Enter valid input from List");
      }
  }
  document.getElementById("choice").value ="";

}

function doctor(name, id, specialization) {
  this.name = name;
  this.id = id;
  this.specialization = specialization;
  this.patientCountArray = [];
}
//doctor.patientCountArray = [];

function patient(patientName,patientId,patientAge, mobileNo, ) {
  this.patientName = patientName;
  this.patientAge = patientAge;
  this.mobileNo = mobileNo;
  this.patientId = patientId;


}

function addDoctor() {
  var name = prompt("Enter Doctor Name", "");
  var id = parseInt(prompt("Enter Doctor Id", ""));
  var specialization = prompt("Enter Specialization Area");

  doctorArray[doctorcount] = new doctor(name, id, specialization);
  doctorcount++;
  alert("Information added");

}

function addPatient() {
  var name = prompt("Enter Patient Name", "");
  var id = prompt("Enter Patient Id", "");
  var age = prompt("Enter patient age");
  var mobileNo = prompt("Enter Mobile Number");

  patientArray[patientCount] = new patient(name, id, age, mobileNo);
  patientCount++;
    alert("Information added");
}

function printDoctorList() {
  var printDoctorDetails = "";
  for (var i = 0; i < doctorcount; i++) {

    printDoctorDetails += "Name:" + doctorArray[i].name + " - " + "Id:" + doctorArray[i].id + " - " + "Specialization:" + doctorArray[i].specialization + "<br>";

  }

  document.getElementById("printDetails").innerHTML = "Doctors Detail <br>" + printDoctorDetails;



}

function printPatientList() {

  var printPatientDetail ="";
  for (var i = 0; i < patientCount; i++) {
    printPatientDetail += "Name:" + patientArray[i].patientName + " - " + "Id:" + patientArray[i].patientId + " - " + "Age:" + patientArray[i].patientAge + " - " + "Mobile No:" + patientArray[i].mobileNo + "<br>";
  }

  document.getElementById("printDetails").innerHTML = "Patients Detail<br>" + printPatientDetail;
}



function takingAppoinment(){

  var doctorName = prompt("Enter Doctor Name", "");
  var patientName = prompt("Enter Patient Name", "");

          for (var i = 0; i < doctorcount; i++)
            if(doctorArray[i].name==doctorName)
            {
                   if(doctorArray[i].patientCountArray.length >4)
                   {
                     alert("Doctor already attending 5 patient.");
                   }
                   if (doctorArray[i].patientCountArray.length < 5) {

                      doctorArray[i].patientCountArray.push(patientName);  /////////
                      break;


            }

          }

}


function  searchDoctorById(){

var id=parseInt(prompt("Search doctor by id"));
for (var i = 0; i < doctorcount; i++) {
  if (doctorArray[i].id===id) {
      document.getElementById("printDetails").innerHTML = "Doctor is - <br>"+"Name:" + doctorArray[i].name + " - " + "Id:" + doctorArray[i].id + " - " + "Specialization:" + doctorArray[i].specialization;
  }
}

}

function searchAvailability(){
  var doctorAvailability="";
 for (var i = 0; i < doctorcount; i++) {
       var patientHandleByDoctor=parseInt(doctorArray[i].patientCountArray.length);
            patientHandleByDoctor  =5-patientHandleByDoctor;
          doctorAvailability +=   "Dr."+doctorArray[i].name+" can attend "+ patientHandleByDoctor+" more Patients"+"<br>";
          patientHandleByDoctor=0;
 }


  document.getElementById("printDetails").innerHTML =doctorAvailability;


}
