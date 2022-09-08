import * as readlinePromises from 'node:readline/promises';
const rl = readlinePromises.createInterface({input: process.stdin,output: process.stdout});

const DICTIONARY = {
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

const EVALUATION_MATRIX = {R:"S",P:"R",S:"P"};

let language = "en";
let isPlaying = true;
let wins = 0;
let losses = 0;

while(isPlaying){
    console.clear()
    console.log(DICTIONARY[language].LETS_PLAY);
    console.log(DICTIONARY[language].TITLE);
    
    let playerSelection = ""
    do{
        playerSelection = (await rl.question(DICTIONARY[language].MAKE_CHOICE)).toUpperCase();
    } while(DICTIONARY[language].LEGAL_SELECTIONS[playerSelection] === undefined)

    const npcSelection = Object.keys(DICTIONARY[language].LEGAL_SELECTIONS)[Math.round(Math.random() * 3)];

    console.log(`I pick ${DICTIONARY[language].LEGAL_SELECTIONS[npcSelection]}`)

    if (npcSelection === playerSelection){
        console.log(DICTIONARY[language].TIE);
    } else{
        const isPlayerWinner = EVALUATION_MATRIX[playerSelection] === npcSelection;
        if(isPlayerWinner){
            console.log(DICTIONARY[language].YOU_WIN);
            wins++;
        } else{
            console.log(DICTIONARY[language].I_WIN);
            losses++;
        }
    }

    isPlaying = (await rl.question(DICTIONARY[language].PLAY_AGAIN)).toUpperCase() !== "N"
    
}

console.log(DICTIONARY[language].THANKS_FOR_PLAYING)
console.log(`You played ${wins+losses} games. You won ${wins} and lost ${losses} games`);
process.exit(1);