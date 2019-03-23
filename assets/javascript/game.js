// Functionality
// 1display characters to Select
//    a. Create characters object with character sub-objects
//    (Object: "Character" -- property: scrooge: )
// 2keep selection remove extras
// 3place extras in enemies section
// 4selected enemy moves to defender ... remaining enemies stay
// 5listen for attack click

// Attack Functionality
// 1compare attack rating to defender rating
// 2determine damage
// 3update attack results
// 4update HP
// 5check outcome

// Check Outcome
// 1. Is attacker defeated?
// a. Game over.
// b. Display Restart Button

// 2. Is defender defeated?
// a. Remove Defender
// b. Allow new enemy selection
var attackerPicked = false;
var defenderPicked = false;
var attacker = "x";
var defender = "y";

var characters = {
   scrooge: {
      name: "Scrooge McDuck",
      hp: 180,
      aPower: 3,
      cAPower: 4,
   },
   launchpad: {
      name: "Launchpad McQuack",
      hp: 200,
      aPower: 2,
      cAPower: 8,
   },
   magica: {
      name: "Magica De Spell",
      hp: 150,
      aPower: 12,
      cAPower: 5,
   },
   flintheart: {
      name: "Flintheart Glomgold",
      hp: 190,
      aPower: 9,
      cAPower: 7,
   }
}
$("#scrooge").on("click", function() {
   if (attacker !== "x") {
      return;
   }
   if (attacker === "x") {
      attacker = "Scrooge McDuck";
      $("#scrooge").appendTo($("#attacker"));
      $("#launchpad").appendTo($("#defenders"));
      $("#magica").appendTo($("#defenders"));
      $("#flintheart").appendTo($("#defenders"));
   }
   if (defender === "y" && attacker !== "Scrooge McDuck") {
      defender = "Scrooge McDuck";
      $("#scrooge").appendTo($("#defender"));
   }
});
