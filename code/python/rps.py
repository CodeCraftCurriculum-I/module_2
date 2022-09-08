from pydoc import doc
import random

DICTIONARY = {
    "en":{
        "LETS_PLAY":"Let us play",
        "TITLE":" 🎸 Rock, 🧻 Paper, ✄ Scissors",
        "MAKE_CHOICE": "Make your choice (R,P,S): ",
        "LEGAL_SELECTIONS" : {"R":"Rock", "P":"Paper", "S":"Scissors"},
        "TIE":"That is a tie, no one wins :(",
        "YOU_WIN":"You win :(",
        "I_WIN":"I win :D",
        "PLAY_AGAIN":"Play again (y/n)?",
        "THANKS_FOR_PLAYING":"Thank you for playing, pleace come again",
    }
}

EVALUATION_MATRIX = {"R":"S","P":"R","S":"P"}

language = "en"
isPlaying = TRUE
wins = 0
losses = 0

while (isPlaying) :
    
    print(DICTIONARY[language]["LETS_PLAY"])
    print(DICTIONARY[language]["MAKE_CHOICE"])
    print(DICTIONARY[language]["TITLE"])

    
    choice = input().upper()
    while (choice not in DICTIONARY[language]["LEGAL_SELECTIONS"]) :
        print(DICTIONARY[language]["MAKE_CHOICE"])
        choice = input().upper()
    
