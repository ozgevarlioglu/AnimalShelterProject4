const url = "https://cat-fact.herokuapp.com/facts"
let randomCatFact;
const catFact = document.getElementById("catFact"); 
let box = document.getElementsByClassName("box")[0];


$.getJSON(url, function(data) {
    const rndInt = Math.floor(Math.random() * data.length) + 1
    randomCatFact = data[rndInt].text
})


box.addEventListener("mouseover", () => {
    $(document).ready(function(){
        $.toast({
            'message': randomCatFact,
            'top': 100,
            'left': 50,
            'durationTime': 8000
          }).show();
    })
})