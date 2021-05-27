var search = document.createElement("input");
search.setAttribute('id', 'searchVal');
var h = $("h4");
var arrayH = [];
var ulEl = $("<ul/>");
var liEL
var cache = [];

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
    for (var i = 0; i < h.length - 1; i++){
        $(h[i]).attr('id', i);
        //Man kan ochså använda settAttribute
        //h[i].setAttribute('id',i);
        ulEl.append("<li><a href = 'index.html#" + i + "'>" + h[i].textContent + "</a>" + '</li>');
        

    };    
  
/*
liEL = $("#receptmeny ul li"); 
console.log($("#receptmeny ul li"));  
*/
var inputVal = $("#searchVal");
    
console.log($("#receptmeny ul li"));
$("#receptmeny ul li").each(function(){
    cache.push({
        element: this,
        text: this.firstElementChild.innerHTML.trim().toLowerCase()
    });
});



}

(function(){
    console.log(cache);
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

(function(){
    var inputVal = $("#searchVal");
    var cache = [];
    $('div .post').each(function(){
        cache.push({
            element: this,
            text: this.firstElementChild.innerHTML.trim().toLowerCase()
        });
    });

    
    function filter(){
        var query = this.value.trim().toLowerCase();
        cache.forEach(function(div){
            var index = 0;
            if (query) {
                index = div.text.indexOf(query);
            }

            div.element.style.display = index === -1 ? 'none' : '';
        });  
    }
    
    if ('oninput' in search){
        $(search).on('input', filter);
        
    } else {
        $(search).on('keyup', filter);
        
    }

    
    
}());

*/








