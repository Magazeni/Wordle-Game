 const buttonElements = document.querySelectorAll('button');
let row = 1;
let letter = 1;
let count = 0;
const wordElements = document.querySelectorAll('.row');
const wordForTheDay = 'mouth';

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

function checkWord(){
    const letterElements = wordElements[row-1].querySelectorAll('.word');

    letterElements.forEach((element, index) => {
        const indexOfLetterInWordOfTheDay = wordForTheDay.toLowerCase().indexOf
        (element.innerText.toLowerCase());

        //console.log(indexOfLetterInWordOfTheDay);
        if (indexOfLetterInWordOfTheDay === index ) {
            element.classList.add('word-green');
        } else if (indexOfLetterInWordOfTheDay >= 0) {
            element.classList.add('word-yellow');
        } else {
            element.classList.add('word-grey');
        }
    });
}

function enterWord(){
    if (letter < 6){
        alert('You have to have letters for each spot');
  } else {
        checkWord();
        row += 1;
        letter = 1;
       // count +=1;
        //console.log(count);
    }
}
 
function deleteletter() {
   const letterElements = wordElements[row-1].querySelectorAll('.word');
   
   for (let index = letterElements.length - 1; index >=0; index--) {
    const element = letterElements[index];
    if (element.innerText !== '') {
        element.innerText = '';
        letter -=1;
        break;
    }
    
   }
}

function keypress(key) {
if (key.toLowerCase() === 'enter'){
   enterWord();
} else if (key.toLowerCase() === 'del' ){
    deleteletter();
}else{
    populateword(key);
}
}