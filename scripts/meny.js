//Last updated 5 Jun 2021
//Creates input elements and saves it in variable search
var search = document.createElement("input");
//Adds id attribute to the search variable
search.setAttribute('id', 'searchVal');
//Creates jquery collection object that involves all $h4 elements
var $h = $("h4");
//Creates ul jquery collection object and saves it in $ulEl variable
var $ulEl = $("<ul/>");
//Defines Liel global variable
var liEL
//Creates 'cache' array
var cache = [];
//Defines starValue global variable
var starValue
//Can be used to clear the rating
//localStorage.clear();

//generateManu runs after document is loaded
$(document).ready(generateMenu);

function generateMenu() {

    //Styles input box
    $(search).css({"border-color": "coral", "margin-top": "1em", "margin-bottom": "1em", "border-radius": "5px"});
    //Appends inout box to the div element
    $("div#receptmeny").append(search);
    

    //Saves the jquery object in the variable called $meny
    var $meny = $("#receptmeny");
    //Appends the $ulEl to the $meny
    $meny.append($ulEl);

    
    //Create and empty array called arrayH
    var arrayH = [];
    //loop in the $h
    for (var i = 0; i < $h.length-1; i++){
        //Adds id element and value
        $($h[i]).attr('id', i);
        //Saves the text content in every title in the variable text
        var text = $h[i].textContent;
        //Takes out the spaces and commas from the titles
        var title = text.replace(/\s/g, "").replace(/,/g, '')
        //saves the starts, class and id attributes in the variable star
        var stars = '<div class = "stars" id ='+ title +'><a id = "1">⭐</a><a id = "2">⭐</a><a id = "3">⭐</a><a id = "4">⭐</a><a id = "5">⭐</a></div>';
        //appends titles in li a elements and appends those to $ulEl
        $ulEl.append("<li><a href = 'index.html#" + i + "'>" + text + "</a>" + stars + '</li>');
        //Creates a pointer on a elements
        $('#' + title + ' a').css({'cursor':'pointer', 'font-size': '0.8em'});
        //if rating is not given all the stars get 50% opacity
        if(!(localStorage.getItem(text))){

            $('#' + title + ' a').css({'opacity':'50%'});
        }
        
        //if rating is given only the stars next to the click star get opacity level of 50% 
        else {

           ($('#' + title + ' #' + localStorage.getItem(text)))
           .nextAll().css({'opacity': '50%'});
        }

    };    

    //Creates a click event on stars
    $('.stars a').on("click",function(){

        //stars next to click star get opacity of 50%
        $(this).nextAll().animate({'opacity': '50%'})
        //Clicked star gets opacity of 100%
        $(this).animate({'opacity': '100%'}, 'slow')
        //all the stars previous to the clicked star get opacity of 100%
        $(this).prevAll().animate({'opacity': '100%'}, 'slow')
        //Saves title of the clicked element in the variable called menyItem
        var menyItem = this.parentNode.previousSibling.textContent
        //Saves clicked star's id in starValue
        starValue = this.id;
        //Saves menyItem and StarValue in JS's localStorage object
        localStorage.setItem(menyItem, starValue);


    });
//Saves value in the search box in the variable called inputVal  
var inputVal = $("#searchVal");
    
//Apply ananymous function on each #receptmeny ul li element
$("#receptmeny ul li").each(function(){
    //creates objects for all li element where element key gets value of li and text key gets value of li's first child
    //all the objects are psued into catche array
    cache.push({
        element: this,
        text: this.firstElementChild.innerHTML.trim().toLowerCase()
    });
});



}

//IIFE immediately invoked function expression calls itself 
(function(){

    //defines filter function
    function filter(){
        //Saves the clicked elements value in query variable
        var query = this.value.trim().toLowerCase();
        //Runs function below on each object in cache array
        cache.forEach(function(li){
            //Creates index variable and gives it value of 0
            var index = 0;
            //If search value is entered (query evaluayes down to true) 
            //Function checks if the query matches the text and saves 0 in index,
            //If it doesn't match index equals to -1 
            if (query) {
                index = li.text.indexOf(query);
            }
            //if the query (search value) matches the text (input value) li element is shown otherwise it's hidden 
            li.element.style.display = index === -1 ? 'none' : '';
        });  
    }
    //If input is entered in search and 
    if ('oninput' in search){
        //when input value changes the filter funtions is called
        $(search).on('input', filter);
        
        //Calls the filter function when keyboard is relaesed 
    } else {
        $(search).on('keyup', filter);
        
    }
   

    
}());









