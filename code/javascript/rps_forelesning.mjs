import * as readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({input:process.stdin, output:process.stdout});

const ALL_LANGUAGES_DICTIONARY = {
    en:{
        LETS_PLAY:"Let us play",
        TITLE:" 🎸 Rock, 🧻 Paper, ✄ Scissors",
        MAKE_CHOICE: "Make your choice (R,P,S): ",
        LEGAL_SELECTIONS : {R:"Rock", P:"Paper", S:"Scissors"},
        TIE:"That is a tie, no one wins :(",
        YOU_WIN:"You win :(",
        I_WIN:"I win :D",
        PLAY_AGAIN:"Play again (y/n)?",
        THANKS_FOR_PLAYING:"Thank you for playing, pleace come again",
    }
}


const EVALUATION_MATRIX = {R:"S", P:"R", S:"P"};
const LEGAL_SELECTION = {R:"Rock", P:"Paper", S:"Scissors"}

let language = "en"; 
let isPlaying = true;
let wins = 0;
let losses = 0;

const DICTIONARY = ALL_LANGUAGES_DICTIONARY[language];

while(isPlaying){

    console.clear();
    console.log(DICTIONARY.LETS_PLAY);
    console.log(DICTIONARY.TITLE);

    /*
    console.log(Object.keys(LEGAL_SELECTION));
    console.log(Object.keys(LEGAL_SELECTION)[0]);
    console.log(Object.keys(LEGAL_SELECTION)[1]);
    console.log(Object.keys(LEGAL_SELECTION)[2]);
    */
    let playerSelection = "";

    do{
       playerSelection = await rl.question(DICTIONARY.MAKE_CHOICE);
       playerSelection = playerSelection.toUpperCase();
       //console.log(playerSelection);
       //console.log(LEGAL_SELECTION[playerSelection]);
    }while( LEGAL_SELECTION[playerSelection] === undefined)

    //{R:"S", P:"R", S:"P"};
    
    //if(1p)->
    const keys = Object.keys(LEGAL_SELECTION); // -> [R, P, S]
    const selectionIndex = Math.round(Math.random()*3); 
    const npcSelection = keys[selectionIndex];
    // else -> 2p spørre om trekk.

    if (npcSelection === playerSelection){
        console.log(DICTIONARY.TIE);
    } else{
        let isPlayerWinner = EVALUATION_MATRIX[playerSelection] === npcSelection;
        if(isPlayerWinner){
            console.log(DICTIONARY.YOU_WIN);
            wins = wins +1; // alternatift wins++
        } else{
            console.log(DICTIONARY.I_WIN)
            losses = losses + 1;
        }
    }

    //isPlaying = (await rl.question("Play again (y/n)? ")).toUpperCase() === "Y";
    isPlaying = await rl.question("Play again (y/n)? ");
    isPlaying = isPlaying.toUpperCase();
    if(isPlaying != "Y"){
        isPlaying = false;
    }

}

console.log("You won " + wins + " and lost " + losses);
console.log(DICTIONARY.THANKS_FOR_PLAYING)

process.exit(0);

