/*
 Let’s revisit form validation from week 2. 
  You will use your same form but create some new JavaScript. 
 
1. In your HTML make a fname and lname fields.
2. Using regular expression to validate your form.
    a. Full name must be a SpaceAlphaValidate, only characters and spaces allowed
    c. Email must start with characters, have a @ symbol, have another set 
       of characters have a period and end with 3 characters.
    d. Comments must not have any html.  Search for characters that have <> 
       wrapped around it.

3.  Once all the data is valid hide the form using [object].style.display='none'
    Display a div that will show the data entered.  You can add a div to the page
    and have it display:none to start.

 */

// Start with a carrot (^) to say it MUST start with a letter and end with a $to say letters only.
function SpaceAlphaValidate( str ) {
        var alphaRegex = /^[a-zA-Z ]+$/; 
        return alphaRegex.test(str);			
}

function EmailValidate( str ){
        var emailRegex = /^[a-zA-Z]+[@]{1}[a-zA-Z]+[\.]{1}[a-zA-Z]{2,3}$/;
        return emailRegex.test(str);
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function submitForm() 
{
    console.clear();
    var fname = document.getElementById('fname');
    var firstNameErr = document.getElementById("err_fname");
    var lname = document.getElementById("lname");
    var lastNameErr = document.getElementById("err_lname");
    var email = document.getElementById("email");
    var err_email = document.getElementById("err_email"); 
    var comments = document.getElementById("comments");
    var err_comments = document.getElementById("err_comments");
    var hasErrors = false;
    
    
    // Check to see if valid data is inputted in the fields
    // 1) Check to make sure data is entered.
       if ( !fname.value.length ) 
       {
            console.log("Fname needs a length");
            hasErrors = true;            
            firstNameErr.innerHTML = '<p>First Name is not valid.</p>';
            fname.classList.add('bad');
            fname.classList.remove('good');
       } 
    // 2) Check to make sure it has established valid characters
       else if ( SpaceAlphaValidate( fname.value ) === false ) 
       {
            console.log("Fname needs Alpha chars");
            hasErrors = true;            
            firstNameErr.innerHTML = '<p>Name is not valid.</p>';
            fname.classList.add('bad');
            fname.classList.remove('good');
       } 
    // 3) If so, everythign is good.   
       else 
       {
            console.log("Fname is good");
            fname.classList.remove('bad');
            fname.classList.add('good');
            firstNameErr.innerHTML = '';            
       }
     
    // Checks for same validation as first name.
       if ( !lname.value.length ) 
       {
            console.log("Lname needs a length");
            hasErrors = true;            
            lastNameErr.innerHTML = '<p>Last Name is not valid.</p>';
            lname.classList.add('bad');
            lname.classList.remove('good');
       } 
       else if ( SpaceAlphaValidate( lname.value ) === false ) 
       {
            console.log("Lname needs Alpha chars");
            hasErrors = true;            
            lastNameErr.innerHTML = '<p>Last Name is not valid.</p>';
            lname.classList.add('bad');
            lname.classList.remove('good');
       } 
       else 
       {
            console.log("Lname is good");
            lname.classList.remove('bad');
            lname.classList.add('good');
            lastNameErr.innerHTML = '';
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
     
    // If all parts to the form are entered properly, clear the screen fo the form and display results.
       if (hasErrors === false)
       {
       var clearForm = document.getElementById("mainform");
       clearForm.style.display='none';
       var printData = document.getElementById("dataResults");
       printData.style.display ='block';    // in CSS it takes the whole width of the page   
       printData.innerHTML = '<p> Name is: '+fname.value+' '+lname.value+ '</p>'+
       '<p>Email is: ' +email.value+ '</p>'+
       '<p>Comments: ' +comments.value+ '</p>';
       }
       
}