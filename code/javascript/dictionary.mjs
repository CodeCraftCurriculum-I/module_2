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
        I_PICK:(pick) => `I pick ${pick}`,
    }
}

const localize = (lang) => { 
    lang ||= "en"
    lang = DICTIONARY.hasOwnProperty(lang) ? lang:"en"
    return DICTIONARY[lang]
}

export {DICTIONARY,localize}