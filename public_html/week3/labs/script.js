/* 
 Create a simple Ad that will display on the page as just text in a div. 
 The Ad will be random using Math.random from the array length.

Requirements:
1. Create an array that has 5 ad JSON objects.
2. Use Math.random() with the array.length to get a random index.
3. Display the ad using innerHTML.
4. Replace the document.title with the ad followed by three periods …
5. Please add comments to explain how the code works and what it’s doing.
   Hint: No need to go crazy, just general things on the flow, one line
         comments are fine.

 */

var ads = [];
            
            ads.push({
                "title": 'This is the first ad',
                "desc" : 'This is the first ads description'
            });
            ads.push({
                "title": 'This is the second ad',
                "desc" : 'This is the second ads description'
            });
            ads.push({
                "title": 'This is the third ad',
                "desc" : 'This is the third ads description'
            });
            ads.push({
                "title": 'This is the fourth ad',
                "desc" : 'This is the fourth ads description'
            });
            ads.push({
                "title": 'This is the fifth ad',
                "desc" : 'This is the fifth ads description'
            });
            
            
            function rand(max){
               return (Math.floor( Math.random()*max)); // Randomly grabs a variable stored in the 'ads' array and stored the title and descriptions.
           }
          
          var adRandIndex = rand (ads.length); //Stored the randomly chosen title and description as a new variable 'adRandIndex'
          
          //console.log(ads[adRandIndex].title); 
          //console.log(ads[adRandIndex].desc);  
          
           function changeDocumentTitle(str){ //str becomes a usable variable inside the function only
            document.title = str;
            }
            
            changeDocumentTitle(ads[adRandIndex].title + "...");  // Changes the title of the ad to match the one randomly generated and stored in the adRandIndex variable
                                                                    ///+ "..." just ads the ... to the end of the title. 


            var adDesc = document.getElementById('ad');  // 'ad' is the div id given to the text in the body
            adDesc.innerHTML = (ads[adRandIndex].desc);  // Changes the displayed text to match the description stored in the adRandIndex variable.