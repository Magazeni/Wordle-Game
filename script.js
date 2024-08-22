 const buttonElements = document.querySelectorAll('button');
let row = 1;
let letter = 1;
const wordElements = document.querySelectorAll('.row');

buttonElements.forEach((element) => {
    element.addEventListener('click', function () {
        keypress(element.attributes["data-key"].value)
    });

});

function populateword(key){
    if (letter < 6){
        wordElements[row-1].querySelectorAll('.word')[letter-1].innerText= key;
        letter += 1;

    }
}

/*function enterword(){
    if (letter < 6){
        //alert('You have to have letters for each spot')
    } else {
        c
    }
}*/
function keypress(key) {
if (key.toLowerCase() === 'enter'){
   //enterword();
} else if (key.toLowerCase() === 'del' ){
    //deleteletter();
}else{
    populateword(key);
}
}