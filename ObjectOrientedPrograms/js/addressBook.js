count = 0;
objectArray = [];

/**
 *  @addDetails() function provide text box to fill information and call addDetailsInRecord() function to insert details in database.
 */
function addDetails() {
  document.getElementById("outTable").innerHTML = "Enter Name <input type='text' id='name'><br>Enter City <input type='text' id='city'><br>  Enter Zip <input type='text' id='zip'><br> Enter Mobile Number <input type='text' id='mobileNo'><br> <input type='button' value='Add Record' onclick='addDetailsInRecord()'>";
}

function deleteDetails() {
  if(count>0)
  {
  document.getElementById("outTable").innerHTML = "Enter Name <input type='text' id='name'><br> <input type='button' value='Delete Record' onclick='deleteDetailsInRecord()'>";
}
if (count<1) {
alert("Enter details in Record First");
}


}

function editDetails(){



 if (count>0) {
   document.getElementById("outTable").innerHTML="Enter Name <input type='text' id='name'><br> Enter Details to Edit <input type='text' id='edit'><br> <select id='fieldValue'> <option value='Name'>Name</option><option value='City'>City</option><option value='Zip'>Zip</option><option value='MobileNo'>Mobile Number</option></select><input type='button' value='Edit' onClick='editDetailsInRecord()'/>";
 }
if (count<1) {
  alert("Insert Record First");
}

}


/**
 *   @sortDtailsByName() function sort record in ascending order by Name.
 */
function sortDtailsByName() {

  if (count < 1) {
    alert("Enter Record First");
  }
  if (count > 0 && count < 2) {
    alert("One record not sorted");
  }

  if (count > 1) {
    var result = "";
    var firstName, secondName;
    var temporaryVariable;

    for (var i = 0; i < count - 1; i++) {
      for (var j = 0; j < count - i - 1; j++) {
        firstName = objectArray[j].personName;
        secondName = objectArray[j + 1].personName
        var result_flag = firstName.localeCompare(secondName);

        if (result_flag == 1) {
          temporaryVariable = objectArray[j];
          objectArray[j] = objectArray[j + 1];
          objectArray[j + 1] = temporaryVariable;

        }
      }

    }

    alert("Record Sorted by name ");


    document.getElementById("outTable").innerHTML = "";
    for (var i = 0; i < count; i++) {
      result += objectArray[i].personName + " - " + objectArray[i].city + " - " + objectArray[i].zip + " - " + objectArray[i].mobileNo + "<br>";
    }

    document.getElementById("insideTable").innerHTML = result;



  }
}


/**
 *   @sortDtailsByZip() function sort record in ascending order by Zip.
 */
function sortDtailsByZip() {

  if (count < 1) {
    alert("Enter Record First");
  }
  if (count > 0 && count < 2) {
    alert("One record not sorted");
  }

  if (count > 1) {
    var result = "";
    var firstZip, secondZip;
    var temporaryVariable;

    for (var i = 0; i < count - 1; i++) {
      for (var j = 0; j < count - i - 1; j++) {
        firstZip = parseInt(objectArray[j].zip);
        secondZip = parseInt(objectArray[j + 1].zip);
        if (firstZip > secondZip) {
          temporaryVariable = objectArray[j];
          objectArray[j] = objectArray[j + 1];
          objectArray[j + 1] = temporaryVariable;

        }
      }

    }

    alert("Record Sorted by Zip");


    document.getElementById("outTable").innerHTML = "";
    for (var i = 0; i < count; i++) {
      result += objectArray[i].personName + " - " + objectArray[i].city + " - " + objectArray[i].zip + " - " + objectArray[i].mobileNo + "<br>";
    }

    document.getElementById("insideTable").innerHTML = result;



  }
}



/**
 *  @This function will create object of each entry
 */
function details(name, city, zip, mobile) {
  this.personName = name;
  this.city = city;
  this.zip = zip;
  this.mobileNo = mobile;

}

/**
 *   @This function will store details in record.
 */
function addDetailsInRecord() {
  var result = "";
  var name = document.getElementById("name").value;
  var city = document.getElementById("city").value;
  var zip = document.getElementById("zip").value;
  var mobile = document.getElementById("mobileNo").value;

  objectArray[count] = new details(name, city, zip, mobile);
  count++;

  document.getElementById("outTable").innerHTML = "";
  for (var i = 0; i < count; i++) {
    result += objectArray[i].personName + " - " + objectArray[i].city + " - " + objectArray[i].zip + " - " + objectArray[i].mobileNo + "<br>";
  }

  document.getElementById("insideTable").innerHTML = result;

}

/**
 *   @This function will delete details from record.
 */
function deleteDetailsInRecord() {
  var result = "";
  var name = document.getElementById("name").value;
  document.getElementById("outTable").innerHTML = "";
  for (var i = 0; i < count; i++) {
    if (objectArray[i].personName === name) {
      objectArray.splice(i, 1);
      count--;
      alert("Record deleted");
      document.getElementById("outTable").innerHTML = "";
      for (var i = 0; i < count; i++) {
        result += objectArray[i].personName + " - " + objectArray[i].city + " - " + objectArray[i].zip + " - " + objectArray[i].mobileNo + "<br>";
      }

      document.getElementById("insideTable").innerHTML = result;

      break;
    }


  }



}



function editDetailsInRecord(){
  var result="";
  var name=document.getElementById("name").value;
    var edit=document.getElementById("edit").value;
 var field_Value = document.getElementById("fieldValue");
      var selectedValue=field_Value.options[field_Value.selectedIndex].value;




     for (var i = 0; i < count; i++) {
       if(objectArray[i].personName === name)
       {
         if (selectedValue == "Name") {
               objectArray[i].personName=edit;
         }

         if (selectedValue == "City") {
 objectArray[i].city=edit;
         }
         if (selectedValue == "Zip") {
             objectArray[i].zip=edit;
         }

         if (selectedValue == "MobileNo") {
                 objectArray[i].mobileNo=edit;
         }

        alert("Record Edited Successfully");
        document.getElementById("outTable").innerHTML = "";
        for (var i = 0; i < count; i++) {
          result += objectArray[i].personName + " - " + objectArray[i].city + " - " + objectArray[i].zip + " - " + objectArray[i].mobileNo + "<br>";
        }

        document.getElementById("insideTable").innerHTML = result;
       break;
       }
     }


}
