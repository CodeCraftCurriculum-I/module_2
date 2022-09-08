import * as readlinePromises from 'node:readline/promises';
import * as dictionary from "./dictionary.mjs";
const rl = readlinePromises.createInterface({input: process.stdin,output: process.stdout});

let language = "en";
const dic = dictionary.localize(language)

const EVALUATION_MATRIX = {R:"S",P:"R",S:"P"};

let isPlaying = true;
let wins = 0;
let losses = 0;

while(isPlaying){
    console.clear()
    presentStartGameInfo();
    const playerSelection = await getPlayerSelection();
    const npcSelection = getNPCSelection();

    console.log(dic.I_PICK(DICTIONARY[language].LEGAL_SELECTIONS[npcSelection]));

    evaluateOutcome(playerSelection,npcSelection);

    isPlaying = (await rl.question(dic.PLAY_AGAIN)).toUpperCase() !== "N"
    
}

console.log(dic.THANKS_FOR_PLAYING)
console.log(`You played ${wins+losses} games. Winning ${wins} and losing ${losses} games`);
process.exit(1);

function presentStartGameInfo(){
    console.log(dic.LETS_PLAY);
    console.log(dic.TITLE);
}

async function getPlayerSelection(){
    let selection = undefined;
    do{
        selection = (await rl.question(dic.MAKE_CHOICE)).toUpperCase();
    } while(dic.LEGAL_SELECTIONS[selection] === undefined)
    return selection;
}

function getNPCSelection(){
    return Object.keys(dic.LEGAL_SELECTIONS)[Math.round(Math.random() * 3)];
}

function evaluateOutcome(playerSelection, npcSelection){
    if (npcSelection === playerSelection){
        console.log(dic.TIE);
    } else{
        const isPlayerWinner = EVALUATION_MATRIX[playerSelection] === npcSelection;
        if(isPlayerWinner){
            console.log(dic.YOU_WIN);
            wins++;
        } else{
            console.log(dic.I_WIN);
            losses++;
        }
    }
}