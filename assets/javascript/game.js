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

// Booleans to know if attacker and defender have been chosen
var attackerPicked = false;
var defenderPicked = false;
var attacker = "x";
var defender = "y";

var fightSound = new Audio("assets/sounds/punch.mp3");


var scrooge = {
   name: "Scrooge McDuck",
   hp: 120,
   aPower: 8,
   cAPower: 4,
   bAttackPower: 8
}
var launchpad = {
   name: "Launchpad McQuack",
   hp: 100,
   aPower: 5,
   cAPower: 8,
   bAttackPower: 5
}
var magica = {
   name: "Magica De Spell",
   hp: 180,
   aPower: 15,
   cAPower: 25,
   bAttackPower: 15
}
var flintheart = {
   name: "Flintheart Glomgold",
   hp: 150,
   aPower: 9,
   cAPower: 7,
   bAttackPower: 9
}

$("#scrooge").on("click", function () {

   if (attacker === "x") {
      attacker = scrooge;
      $("#scrooge").appendTo($("#attacker"));
      $("#launchpad").appendTo($("#defenders"));
      $("#magica").appendTo($("#defenders"));
      $("#flintheart").appendTo($("#defenders"));
      $("#choose-att").css("display", "none");
   }
   if (defender === "y" && attacker !== scrooge) {
      defender = scrooge;
      $("#scrooge").appendTo($("#defender"));
      $("#choose-def").css("display", "none");

   }
});
$("#launchpad").on("click", function () {

   if (attacker === "x") {
      attacker = launchpad;
      $("#launchpad").appendTo($("#attacker"));
      $("#scrooge").appendTo($("#defenders"));
      $("#magica").appendTo($("#defenders"));
      $("#flintheart").appendTo($("#defenders"));
      $("#choose-att").css("display", "none");

   }
   if (defender === "y" && attacker !== launchpad) {
      defender = launchpad;
      $("#launchpad").appendTo($("#defender"));
      $("#choose-def").css("display", "none");

   }
});
$("#magica").on("click", function () {

   if (attacker === "x") {
      attacker = magica;
      $("#magica").appendTo($("#attacker"));
      $("#launchpad").appendTo($("#defenders"));
      $("#scrooge").appendTo($("#defenders"));
      $("#flintheart").appendTo($("#defenders"));
      $("#choose-att").css("display", "none");

   }
   if (defender === "y" && attacker !== magica) {
      defender = magica;
      $("#magica").appendTo($("#defender"));
      $("#choose-def").css("display", "none");

   }
});
$("#flintheart").on("click", function () {
   if (attacker === "x") {
      attacker = flintheart;
      $("#flintheart").appendTo($("#attacker"));
      $("#magica").appendTo($("#defenders"));
      $("#launchpad").appendTo($("#defenders"));
      $("#scrooge").appendTo($("#defenders"));
      $("#choose-att").css("display", "none");

   }
   if (defender === "y" && attacker !== flintheart) {
      defender = flintheart;
      $("#flintheart").appendTo($("#defender"));
      $("#choose-def").css("display", "none");
   }
});


function fight(player1, player2) {
   if (attacker === "x" || defender === "y") {
      return
   }
   player1.hp = player1.hp - player2.cAPower;
   player2.hp = player2.hp - player1.aPower;

   switch (player1) {
      case scrooge:
         $("#scrooge-hp").text(scrooge.hp)
         break;
      case magica:
         $("#magica-hp").text(magica.hp)
         break;
      case launchpad:
         $("#launchpad-hp").text(launchpad.hp)
         break;
      case flintheart:
         $("#flintheart-hp").text(flintheart.hp)
         break;
   }
   switch (player2) {
      case scrooge:
         $("#scrooge-hp").text(scrooge.hp)
         break;
      case magica:
         $("#magica-hp").text(magica.hp)
         break;
      case launchpad:
         $("#launchpad-hp").text(launchpad.hp)
         break;
      case flintheart:
         $("#flintheart-hp").text(flintheart.hp)
         break;
   }


   $(".game-play").text("You attacked " + player2.name + " for "
      + player1.aPower + " damage.  \n " + player2.name
      + " attacked you for " + player2.cAPower + " damage.");

   player1.aPower = player1.aPower + player1.bAttackPower;


   if (player1.hp <= 0) {
      $(".game-play").text("Your health points have dropped to or below 0.  You Lose!");
   }
}
console.log(attacker);

$("#attack-button").on("click", function () {
   fightSound.play();
   if (attacker === scrooge && defender === magica) {
      fight(scrooge, magica);
   }
   if (attacker === magica && defender === scrooge) {
      fight(magica, scrooge);
   }
   if (attacker === scrooge && defender === flintheart) {
      fight(scrooge, flintheart);
   }
   if (attacker === flintheart && defender === scrooge) {
      fight(flintheart, scrooge);
   }
   if (attacker === flintheart && defender === magica) {
      fight(flintheart, magica);
   }
   if (attacker === magica && defender === flintheart) {
      fight(magica, flintheart);
   }
   if (attacker === launchpad && defender === scrooge) {
      fight(launchpad, scrooge);
   }
   if (attacker === scrooge && defender === launchpad) {
      fight(scrooge, launchpad);
   }
   if (attacker === launchpad && defender === magica) {
      fight(launchpad, magica);
   }
   if (attacker === magica && defender === launchpad) {
      fight(magica, launchpad);
   }
   if (attacker === flintheart && defender === launchpad) {
      fight(flintheart, launchpad);
   }
   if (attacker === launchpad && defender === flintheart) {
      fight(launchpad, flintheart);
   }

});
