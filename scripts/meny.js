//Creates input elements and saves it in variable search
var search = document.createElement("input");
//Adds id attribute to the search variable
search.setAttribute('id', 'searchVal');
//Creates jquery collection that involves all h4 elements
var h = $("h4");
//Create and empathy array calles arrayH
var arrayH = [];
//Creates ul element and saves it in ulEl variable
var ulEl = $("<ul/>");
//Defines Liel global variable
var liEL
//Create 'cache' array
var cache = [];
//Defines the star value
var starValue
//localStorage.clear();

$(document).ready(generateMenu);

function generateMenu() {

    
    $(search).css({"border-color": "coral", "margin-top": "1em", "margin-bottom": "1em", "border-radius": "5px"});
    $("div#receptmeny").append(search);
    
    //skapa en ul element
    
    //spara elemented med id #receptmeny i variabeln meny
    var meny = $("#receptmeny");
    //lägg till ul elementet i variabeln meny
    meny.append(ulEl);
    //skapa en array som involverar alla h4 elementen

    //loop genom h och lägga ruprikerna under Recept forutom den sista h4 elementet som inehåller inte recept
    var arrayH = [];
    for (var i = 0; i < h.length-1; i++){
        $(h[i]).attr('id', i);
        //Man kan ochså använda settAttribute
        //h[i].setAttribute('id',i);
        var text = h[i].textContent;
        //console.log(text.replace(/\s/g, "").replace(/,/g, ''));
        var stars = '<div class = "stars" id ='+text.replace(/\s/g, "").replace(/,/g, '')+'><a id = "1">⭐</a><a id = "2">⭐</a><a id = "3">⭐</a><a id = "4">⭐</a><a id = "5">⭐</a></div>';
        //console.log($('.stars'));
        ulEl.append("<li><a href = 'index.html#" + i + "'>" + text + "</a>" + stars + '</li>');
        //Check if rating is used for all elements
        //console.log($('#' + text));
        
        if(!(localStorage.getItem(text))){
            console.log(localStorage.getItem(text));
            console.log($('#' + text.replace(/\s/g, "")));
            $('#' + text.replace(/\s/g, "").replace(/,/g, '') + ' a').css({'opacity':'50%', 'cursor': 'pointer'});
        }
        
        else {
            //console.log(text);
            
           //code doesn't work
           ($('#' + text.replace(/\s/g, "").replace(/,/g, '') + ' #' + localStorage.getItem(text)))
           .nextAll().css({'opacity': '50%', 'cursor': 'pointer'});

           /*
           ($('#' + text.replace(/\s/g, "") + '#' + localStorage.getItem(text))).nextAll().animate({'opacity': '50%'});
           ($('#' + text.replace(/\s/g, "") + '#' + localStorage.getItem(text))).animate({'opacity': '100%'}, 'slow');
           ($('#' + text.replace(/\s/g, "") + '#' + localStorage.getItem(text))).prevAll().animate({'opacity': '100%'}, 'slow');
            //$('#' + text.replace(/\s/g, "")).css({'opacity':'50%', 'cursor': 'pointer', 'font-size': '1em'});
            */
        }
        
        
        //console.log(localStorage.getItem(text));
        $('a:not([id])');


    };    

    
    
    $('.stars a').on("click",function(){
        console.log($(this.parentNode));
        console.log($(this));
        //$(this.parentNode).animate({'opacity':'100%', 'cursor': 'pointer'}, 'fast');
        
        //$('.stars a').css({'opacity':'100%', 'cursor': 'pointer', 'font-size': '0.8em'});
        $(this).nextAll().animate({'opacity': '50%'})
        //Does not reset the value
        $(this).animate({'opacity': '100%'}, 'slow')
        //Does not reset the value
        $(this).prevAll().animate({'opacity': '100%'}, 'slow')
        //$(this.parentNode).css({'opacity':'unset', 'cursor': 'pointer'});
        /*
        if (window.localStorage){
            localStorage.setItem()
        }
        */
        var menyItem = this.parentNode.previousSibling.textContent
        //console.log(menyItem);
        //star is a global variable
        starValue = this.id;
        localStorage.setItem(menyItem, starValue);
        //console.log(localStorage.getItem('Potatismos'));
        //console.log(starValue);
        //console.log(this.parentNode.previousSibling.textContent);
        //console.log(document.querySelectorAll(".stars a"));

    });
  
/*
liEL = $("#receptmeny ul li"); 
console.log($("#receptmeny ul li"));  
*/
var inputVal = $("#searchVal");
    
//console.log($("#receptmeny ul li"));
$("#receptmeny ul li").each(function(){
    cache.push({
        element: this,
        text: this.firstElementChild.innerHTML.trim().toLowerCase()
    });
});



}

(function(){
    //console.log(cache);
    function filter(){
        var query = this.value.trim().toLowerCase();
        cache.forEach(function(li){
            var index = 0;
            if (query) {
                index = li.text.indexOf(query);
            }

            li.element.style.display = index === -1 ? 'none' : '';
        });  
    }
    
    if ('oninput' in search){
        $(search).on('input', filter);
        
    } else {
        $(search).on('keyup', filter);
        
    }

    
}());

/*
ids  for the list strar elemet are not correct, only the first words is included in the id value
check if the element can be choosen in jquery when a variable is used as a selector id - done
check if value of a element can be chosen as a jquery seletor - no nessesry
short out how stars should look when the rating is give to the stars

*/








