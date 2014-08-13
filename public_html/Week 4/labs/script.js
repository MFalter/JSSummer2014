/* 
 *We need to collect some data from the user. 
 *Please collect the following data. User input from email field 
 *and name field.  User Screen size, Browser information, page title. 
 * Collect the first 100 mouse coordinates the user makes on the page.
 * 
 * 
1.  Create a Json that will collect all this data. It’s as simple as a key:value pair.
2. Collect the user input value when they blur on the field
    a. Email
    b. User name
3. The user screen size, user agent and page title can be collected when 
the window loads.
    a. window.innerHeight
    b. window. innerWidth
    c. window. navigator. userAgent
    d. document.title
4. Collect the user mouse cords by putting them into an array when the 
user moves there mouse on the document. One for the mouseX, and one for 
the mouseY.  Once the Array has a length of 100 you can stop pushing the 
mouse cords into the array.
    a. e.clientX
    b. e.clientY
    c. jsonVariable.ArrayVariable.push(e.clientX) (Do not name your variables this sample)

 */



// Part 1)
var userdata =  // creating a JSON to store variable data
   {
   "email" : '',
   "fullname" : '',
   "screenHeight" : 0,
   "screenWidth" : 0,
   "navigator" : '',
   "title" : '',
   "mouseX" : [],
   "mouseY" : []
   };
    
// Part 2)    
var email = document.getElementById('email'); // variable "email" is equal to user enter data when clicked away (blur) from box
    email.addEventListener('blur', saveEmail);
    function saveEmail() 
    {
    userdata.email =  email.value;
    }
    
var fullname = document.getElementById('fullname'); // variable "fullname" is equal to user enter data when clicked away (blur) from box
    fullname.addEventListener('blur', saveName);
    function saveName() 
    {
    userdata.fullname =  fullname.value;
    }

// Part 3)
window.addEventListener('load', saveScreenInfo); // Don't need the word "on".
//window.onload = saveScreenInfo;  gives same info but is a bad way to do it because it overwrites the data.
    function saveScreenInfo()  // The following variables are recorded as soon as the window is opened.
    {
    userdata.screenHeight = window.innerHeight;
    userdata.screenWidth = window.innerWidth;
    userdata.navigator = window.navigator.userAgent;
    userdata.title = document.title;
    }
    
// Part 4)
document.addEventListener('mousemove', trackMouse);
    function trackMouse(e) 
    {
    userdata.mouseX.push(e.clientX);
            if (userdata.mouseX.length > 100 ) // Record only 100
            {
            document.removeEventListener('mousemove', trackMouse);
            }
                
    userdata.mouseY.push(e.clientY);
            if (userdata.mouseY.length > 100 ) // Record only 100
            {
            document.removeEventListener('mousemove', trackMouse);
            }
    }
    
function showResults() {
    console.clear();
    console.log(userdata);
}

var results = document.getElementById('showResults');

results.addEventListener("click", showResults);