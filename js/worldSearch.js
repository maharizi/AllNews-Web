window.onload = function(){
    declareEvents();
}
const declareEvents = function(){
    let id_input_cnn = document.querySelector("#id_input_cnn");
    let id_button_cnn = document.querySelector("#id_button_cnn");
    let id_input_bbc = document.querySelector("#id_input_bbc");
    let id_button_bbc = document.querySelector("#id_button_bbc");
    let id_input_fox = document.querySelector("#id_input_fox");
    let id_button_fox = document.querySelector("#id_button_fox");
    let id_input_espn = document.querySelector("#id_input_espn");
    let id_button_espn = document.querySelector("#id_button_espn");
    let id_input_ndtv = document.querySelector("#id_input_ndtv");
    let id_button_ndtv = document.querySelector("#id_button_ndtv");
    listeners();
}
const listeners = function(){
    id_input_cnn.addEventListener("keydown", function(e){
        if(e.key == "Enter")
            window.open("https://edition.cnn.com/search?q=" + id_input_cnn.value);
    })
    id_button_cnn.onclick = function(){
        window.open("https://edition.cnn.com/search?q=" + id_input_cnn.value);
    }
    id_input_bbc.addEventListener("keydown", function(e){
        if(e.key == "Enter")
            window.open("https://www.bbc.co.uk/search?q=" + id_input_bbc.value + "&page=1");
    })
    id_button_bbc.onclick = function(){
        window.open("https://www.bbc.co.uk/search?q=" + id_input_bbc.value + "&page=1");
    }
    id_input_fox.addEventListener("keydown", function(e){
        if(e.key == "Enter")
            window.open("https://www.foxnews.com/search-results/search?q=" + id_input_fox.value);
    })
    id_button_fox.onclick = function(){
        window.open("https://www.foxnews.com/search-results/search?q=" + id_input_fox.value);
    }
    id_input_espn.addEventListener("keydown", function(e){
        if(e.key == "Enter")
            window.open("https://www.espn.com/search/_/q/" + id_input_espn.value);
    })
    id_button_espn.onclick = function(){
        window.open("https://www.espn.com/search/_/q/" + id_input_espn.value);
    }
    id_input_ndtv.addEventListener("keydown", function(e){
        if(e.key == "Enter")
            window.open("https://sports.ndtv.com/search?q=" + id_input_ndtv.value);
    })
    id_button_ndtv.onclick = function(){
        window.open("https://sports.ndtv.com/search?q=" + id_input_ndtv.value);
    }
}