/*
 * Make sure to validate that an email is 
 * entered into the input(just that it has a length.
 * 
 * Validate the comments field to make sure that is has
 * a length greater than 0 and less than 150.
 */
    
  function submitForm() {
    
    var fullname = document.getElementById("name");
    var fullnameErr = document.getElementById("err_name");
    var email = document.getElementById("email");
    var err_email = document.getElementById("err_email"); 
    var comments = document.getElementById("comments");
    var err_comments = document.getElementById("err_comments");
    
    var hasErrors = false;
    
        if ( fullname.value.length ) {
            fullname.classList.remove('bad');
            fullname.classList.add('good');
            fullnameErr.innerHTML = '';           
            
        } else {
            hasErrors = true;            
            fullnameErr.innerHTML = '<p>Name is not valid.</p>';
            fullname.classList.add('bad');
            fullname.classList.remove('good');
        }
    
        if ( email.value.length ) {
            email.classList.remove('bad');
            email.classList.add('good');
            err_email.innerHTML = '';           
            
        } else {
            hasErrors = true;            
            err_email.innerHTML = '<p>Email is not valid.</p>';
            email.classList.add('bad');
            email.classList.remove('good');
        }
        
        if ( comments.value.length && comments.value.length <= 150) {
            comments.classList.remove('bad');
            comments.classList.add('good');
            err_comments.innerHTML = '';     
        } 
        else if (comments.value.length && comments.value.length > 150) {
            hasErrors = true;            
            err_comments.innerHTML = '<p>Comment is too long.</p>';
            comments.classList.add('bad');
            comments.classList.remove('good');
            
        } else {
            hasErrors = true;            
            err_comments.innerHTML = '<p>Comment is not valid.</p>';
            comments.classList.add('bad');
            comments.classList.remove('good');
        }
    }