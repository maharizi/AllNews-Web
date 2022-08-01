window.onload = function(){
    declareEvents();
}
const declareEvents = function(){
    let id_input_14 = document.querySelector("#id_input_14");
    let id_button_14 = document.querySelector("#id_button_14");
    let id_input_12 = document.querySelector("#id_input_12");
    let id_button_12 = document.querySelector("#id_button_12");
    let id_input_israelToday = document.querySelector("#id_input_israelToday");
    let id_button_israelToday = document.querySelector("#id_button_israelToday");
    let id_input_one = document.querySelector("#id_input_one");
    let id_button_one = document.querySelector("#id_button_one");
    let id_input_sport5 = document.querySelector("#id_input_sport5");
    let id_button_sport5 = document.querySelector("#id_button_sport5");
    listeners();
}
const listeners = function(){
    id_input_14.addEventListener("keydown", function(e){
        if(e.key == "Enter")
            window.open("https://www.now14.co.il/?s=" + id_input_14.value);
    })
    id_button_14.onclick = function(){
        window.open("https://www.now14.co.il/?s=" + id_input_14.value);
    }
    id_input_12.addEventListener("keydown", function(e){
        if(e.key == "Enter")
            window.open("https://www.mako.co.il/newssearch?searchstring_input=" + id_input_12.value + "&vgnextoid=31750a2610f26110VgnVCM1000005201000aRCRD&pageNum=1&app=thenews&fmt=json");
    })
    id_button_12.onclick = function(){
        window.open("https://www.mako.co.il/newssearch?searchstring_input=" + id_input_12.value + "&vgnextoid=31750a2610f26110VgnVCM1000005201000aRCRD&pageNum=1&app=thenews&fmt=json");
    }
    id_input_israelToday.addEventListener("keydown", function(e){
        if(e.key == "Enter")
            window.open("https://www.israelhayom.co.il/search#/search;skipAnimation=true;query=" + id_input_israelToday.value);
    })
    id_button_israelToday.onclick = function(){
        window.open("https://www.israelhayom.co.il/search#/search;skipAnimation=true;query=" + id_input_israelToday.value);
    }
    id_button_one.onclick = function(){
        window.open("https://www.one.co.il/Cat/General/SearchResults.aspx?oneSearchtype=1&isSearchInOne=true&q=" + id_input_one.value);
    }
    id_button_sport5.onclick = function(){
        window.open("https://www.sport5.co.il/#/search;query=" + id_input_sport5.value);
    }
}