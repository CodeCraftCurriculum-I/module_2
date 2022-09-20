import random, sys
import dictionary as dic

language = "en" 
DICTIONARY = dic.DICTIONARY[language]
LEGAL_SELECTIONS = DICTIONARY["LEGAL_SELECTIONS"]
EVALUATION_MATRIX = {"R":"S","P":"R","S":"P"}

isPlaying = True
wins = 0
losses = 0

while (isPlaying) :

    print('\x1b[2J\x1b[1;1H') # Dette er to ansi koder som gjør mye det samme som console.clear() i js
    print(DICTIONARY["LETS_PLAY"])
    print(DICTIONARY["TITLE"])
    print(DICTIONARY["MAKE_CHOICE"])

    """ Merk: Python har ikke en do while, vi må derfor strukturere spørringen vår på en 
    slik måte at vi spørr og så går inn i en loop dersom det som kom tilbake ikke var riktig."""
    playerSelection = input().upper();
    while (playerSelection not in LEGAL_SELECTIONS) :
        print(DICTIONARY["MAKE_CHOICE"])
        playerSelection = input().upper()
    

    """ Merk: Vi trenger en liste med kun de lovlige valgene til NPC spilleren.
    funksjonen keys() gir oss nesten dette, så ved å bruke unpacking ([*]) så får vi til dette.
    Dersom vi ikke hadde gjort det på denne måten måtte vi hat enda en loop.
    Dette er mye tilsvarende npc det samme som gjøres i JS versjonen, men jeg splitter det """
    availableChoises = [*LEGAL_SELECTIONS.keys()]
    npcSelection = random.choice(availableChoises)
    
    print("I pick " + LEGAL_SELECTIONS[npcSelection])

    if(npcSelection == playerSelection) :
        print(DICTIONARY["TIE"])
    else :
        isPlayerWinner = EVALUATION_MATRIX[playerSelection] == npcSelection
        if(isPlayerWinner):
            print(DICTIONARY["YOU_WIN"]) 
            wins += 1
        else :
            print(DICTIONARY["I_WIN"])
            losses += 1

    print(DICTIONARY["PLAY_AGAIN"])
    isPlaying = input().upper() != "N"

print(DICTIONARY["THANKS_FOR_PLAYING"])
# legg merke til denne linjen, her skjer det noe magisk med oppbygingen av settningen.
# men denne er ikke oversatt til riktig språk, hvordan ville man gjort det?
print(f'You played {wins+losses} games. You won {wins} and lost {losses} games')
    
sys.exit(0)