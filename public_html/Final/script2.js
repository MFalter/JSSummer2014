// Start with a carrot (^) to say it MUST start with a letter and end with a $to say letters only.
function SpaceAlphaValidate( str ) {
        var alphaRegex = /^[a-zA-Z ]+$/; 
        return alphaRegex.test(str);			
}

function EmailValidate( str ){
        var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{2,3}$/;
        return emailRegex.test(str);
}

function PhoneNumValidate( str ){
        var phoneRegex = /^\(?([2-9]{1}[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return phoneRegex.test(str);
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

    var fullname = document.getElementById("fullname");
    var fullnameErr = document.getElementById("fullname_err");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("email_err"); 
    var phoneNum = document.getElementById("phone");
    var phoneNumErr = document.getElementById("phone_err"); 
    var description = document.getElementById("description");
    var descriptionErr = document.getElementById("description_err");
    var mydata = [];
    
function submitForm() 
{
    console.clear();
    var hasErrors = false;
    var userData = // creating a JSON to store variable data in arrays
    {
     "Name" : "",
     "Email" : "",
     "PhoneNum" : "",
     "Description" : ""    
    };
    
    // Check to see if valid data is inputted in the fields
    // 1) Check to make sure data is entered.
       if ( !fullname.value.length ) 
       {
            console.log("fullname needs a length");
            hasErrors = true;            
            fullnameErr.innerHTML = '<p>First Name is not valid.</p>';
            fullname.classList.add('bad');
            fullname.classList.remove('good');
       } 
    // 2) Check to make sure it has established valid characters
       else if ( SpaceAlphaValidate( fullname.value ) === false ) 
       {
            console.log("fullname needs Alpha chars");
            hasErrors = true;            
            fullnameErr.innerHTML = '<p>Name is not valid.</p>';
            fullname.classList.add('bad');
            fullname.classList.remove('good');
       } 
    // 3) If so, everything is good.   
       else 
       {
            console.log("fullname is good");
            fullname.classList.remove('bad');
            fullname.classList.add('good');
            fullnameErr.innerHTML = '';  
       }
       
    // 1) Make sure e-mail has something entered.  If not, display an error message.   
       if ( !email.value.length ) 
       {
            console.log("email needs a length");
            hasErrors = true;            
            emailErr.innerHTML = '<p>Email is not valid.</p>';
            email.classList.add('bad');
            email.classList.remove('good');
       } 
    // 2) Make sure e-mail has letters, an @ symbol and a.com (or simliar)
       else if ( EmailValidate( email.value ) === false ) 
       {
            console.log("email needs Alpha chars");
            hasErrors = true;            
            emailErr.innerHTML = '<p>Email is not valid.</p>';
            email.classList.add('bad');
            email.classList.remove('good');
       } 
    // 3) if so, it passes validation.
       else 
       {
            console.log("email is good");
            email.classList.remove('bad');
            email.classList.add('good');
            emailErr.innerHTML = '';
       }
       
       // 1) Make sure phone number has something entered.  If not, display an error message.   
       if ( !phoneNum.value.length ) 
       {
            console.log("Phone Number needs a length");
            hasErrors = true;            
            phoneNumErr.innerHTML = '<p>Phone Number is not valid.</p>';
            phoneNum.classList.add('bad');
            phoneNum.classList.remove('good');
       } 
       
        // 2) Make sure phone number is ###-###-####
       else if ( PhoneNumValidate( phoneNum.value ) === false ) 
       {
            console.log("Phone Number needs Alpha chars");
            hasErrors = true;            
            phoneNumErr.innerHTML = '<p>Phone Number is not valid.</p>';
            phoneNum.classList.add('bad');
            phoneNum.classList.remove('good');
       } 
    
    // 3) if so, it passes validation.
       else 
       {
            console.log("Phone Number is good");
            phoneNum.classList.remove('bad');
            phoneNum.classList.add('good');
            phoneNumErr.innerHTML = '';
       }
    
    // Check to make sure no HTML code is inputted in the description field.  If it is, delete only the HTML.
    // Also make sure comments are entered.
       description.value = strip_HTML(description.value);
       if ( !description.value.length ) 
       {
            console.log("comments needs a length");
            hasErrors = true;            
            descriptionErr.innerHTML = '<p>Comments are not valid.</p>';
            description.classList.add('bad');
            description.classList.remove('good');
       } 
       else 
       {
            console.log("comments are good");
            description.classList.remove('bad');
            description.classList.add('good');
            descriptionErr.innerHTML = '';
       }
     
    // If all parts to the form are entered properly, clear the screen of the form and display results.
       if (hasErrors === false)
       {
           // Set data in userData JSON to be equal to user etered data
           userData.Name = fullname.value;
           userData.Email = email.value;
           userData.PhoneNum = phone.value;
           userData.Description = description.value;
           
           // Pushed the userData in to the mydata array
            mydata.push(userData);
            
            // turns the mydata string in to one long string
            var dataString = JSON.stringify(mydata);
            console.log(dataString);
            localStorage.setItem('userData', dataString);  
            
            // Calls saved data userData
            var savedData = localStorage.getItem('userData');
            console.log(savedData);
            console.log(JSON.parse(savedData));
            console.log(typeof localStorage.getItem('userData'));
           
            //Find a <table> element with id="tableData":
            var table = document.getElementById("tableData");

            // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow(0);

            // Insert new cells
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);

            // Add some text to the new cells
            cell0.innerHTML = "";
            cell1.innerHTML = userData.Name;
            cell2.innerHTML = userData.Email;
            cell3.innerHTML = userData.PhoneNum;
            cell4.innerHTML = userData.Description;
            
            // Clears data in the table once data is submittedS
            fullname.value = ' ';
            email.value = ' ';
            phone.value = ' ';
            description.value = ' ';
            
       }
}

// Clear local storage and table when the button is clicked
function clearFormInfo()
{
    localStorage.clear();
    document.getElementById("tableData").innerHTML = "";
}

// Deletes last item in the table
function removeLastEntry()
{
    var rowCount = tableData.rows.length;
    tableData.deleteRow(rowCount -1);
}