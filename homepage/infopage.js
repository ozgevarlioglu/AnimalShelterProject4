let hayatStory = document.getElementById("story");

$.getJSON("../json-files/hayat.json", function(data) {
    hayatStory.innerHTML = data.cats[0].message
})