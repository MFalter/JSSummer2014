//var submitData = document.getElementById('saveInfo');
//var clearData = document.getElementById('clearAll');
//var removeData = document.getElementById('removeLast');
//
//submitData.addEventListener('click', submitForm);
//clearData.addEventListener('click', clearFormInfo);
//removeData.addEventListener('click', removeLastEntry)

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

//function clearFormInfo()
//{
//    localStorage.clear();       
//}
//       
//function removeLastEntry()
//{
//           
//}

function submitForm() 
{
    console.clear();
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    var phoneNum = document.getElementById("phone");
    var phoneNumErr = document.getElementById("err_phone"); 
    var email = document.getElementById("email");
    var err_email = document.getElementById("err_email"); 
    var comments = document.getElementById("comments");
    var err_comments = document.getElementById("err_comments");
    var hasErrors = false;   
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
            err_email.innerHTML = '<p>Email is not valid.</p>';
            email.classList.add('bad');
            email.classList.remove('good');
       } 
       
    // 2) Make sure e-mail has letters, an @ symbol and a.com (or simliar)
       else if ( EmailValidate( email.value ) === false ) 
       {
            console.log("email needs Alpha chars");
            hasErrors = true;            
            err_email.innerHTML = '<p>Email is not valid.</p>';
            email.classList.add('bad');
            email.classList.remove('good');
       } 
    
    // 3) if so, it passes validation.
       else 
       {
            console.log("email is good");
            email.classList.remove('bad');
            email.classList.add('good');
            err_email.innerHTML = '';
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
    
    // Check to make sure no HTML code is inputted in the comments field.  If it is, delete only the HTML.
    // Also make sure comments are entered.
       comments.value = strip_HTML(comments.value);
       if ( !comments.value.length ) 
       {
            console.log("comments needs a length");
            hasErrors = true;            
            err_comments.innerHTML = '<p>Comments are not valid.</p>';
            comments.classList.add('bad');
            comments.classList.remove('good');
       } 
       else 
       {
            console.log("comments is good");
            comments.classList.remove('bad');
            comments.classList.add('good');
            err_comments.innerHTML = '';
            
       }
     
    // If all parts to the form are entered properly, clear the screen of the form and display results.
       if (hasErrors === false)
       {
       var clearForm = document.getElementById("mainform");
       clearForm.style.display='none';
       var printData = document.getElementById("dataResults");
       printData.style.display ='block';    // in CSS it takes the whole width of the page   
       printData.innerHTML = '<p> Name is: '+fullname.value+ '</p>'+
       '<p>Email is: ' +email.value+ '</p>'+
       '<p>Phone Number is: ' +phoneNum.value+ '</p>'+
       '<p>Comments: ' +comments.value+ '</p>'; 
       }
}

//function saveData()
//{
//    displayData();
//}
//
//function displayData()
//{ 
//       
//}