using System.Collections;

Hashtable choices = new(){
    { "R", "Rock" },
    { "P", "Paper" },
    { "S", "Scissors" }
};

string playerChoice = "";
string npcChoice = "";

// Game logic -------------------------------------------------------

// Welcome message and anny descriptive text goes here
Console.WriteLine("Let's play a Rock Paper Sicors!");

npcChoice = MakeNPCChoice(choices);

// Untill the player chooses a valid option, keep asking
while (choices.ContainsKey(playerChoice) == false)
{
    Console.WriteLine($"Choose your weapon: {CombineChoices(choices, ", ")}");
    playerChoice = (Console.ReadLine() ?? "").ToUpper();
}
// summarize the game and declare the winner 
Console.WriteLine($"You chose {choices[playerChoice]} and the NPC chose {choices[npcChoice]}.");
Console.WriteLine(DetermineWinner(playerChoice, npcChoice));

// Functions -------------------------------------------------------

static string MakeNPCChoice(Hashtable choices)
{
    int min = 0;
    int max = choices.Count;
    int choiceIndex = new Random().Next(min, max);
    return choices.Keys.OfType<string>().ElementAt(choiceIndex);
}

static string DetermineWinner(string playerChoice, string npcChoice)
{
    if (playerChoice == npcChoice)
    {
        return "It's a tie!";
    }
    else if (playerChoice == "R" && npcChoice == "S" || playerChoice == "P" && npcChoice == "R" || playerChoice == "S" && npcChoice == "P")
    {
        return "You win!";
    }

    return "You lose!";

}

static string CombineChoices(Hashtable choices, string separator)
{
    string combinedChoices = "";
    foreach (DictionaryEntry choice in choices)
    {
        combinedChoices += (choice.Value as string) + separator;
    }
    return combinedChoices.Remove(combinedChoices.Length - separator.Length);
}