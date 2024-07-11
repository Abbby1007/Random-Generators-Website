// const roundsDrawDisplay = document.getElementById(`round-draw`);
// const resultDisplay = document.getElementById('results');
// const word = 'helllllo'

function pickupLines()
{
   const list = ["Do you believe in love at first sight, or should I walk by again?",
       "Are you a Wi-Fi signal? Because I'm feeling a strong connection here.",
       "I bet your birthday is October 10 because you’re a 10/10.",
       "Are you a time traveler? Because I see you in my future.",
       "Do you have a Band-Aid? I scraped my knee falling for you.",
       "Do you play soccer? Because you look like a keeper.",
       "Are you from Tennessee? Because you're the only 10 I see.",
       "If you and I were socks, we'd make a great pair.",
       "If I could rearrange the alphabet, I'd put U and I together.",
       "Know what's on the menu today? Me 'n u.",
       "Are you a magician? Because when I look at you, everyone else disappears.",
       "I promise I won’t break your heart — I’ll just steal it.",
       "I'm not a photographer, but I can definitely picture us together.",
        "You're so fine, you made me forget my pickup line.", "I never believed in love at first sight, but that's before I saw you.", "Your eyes are like IKEA. I could get lost in them for hours", "I still get butterflies in my stomach when I think about you.", "Want a raisin? No? How about a date?", "Did we go to school together? I could swear we had chemistry.", " seem to have lost my phone number. Can I have yours?", "I’m going to have to ask you to leave, you’re making everyone else in here look bad.", "Want to go outside for some fresh air? You took my breath away.", "Are you a loan? Because you've got my interest.",
     ];
   const computerChoice = list[Math.floor(Math.random() * list.length)];

const display = document.getElementById('result');

   display.textContent = `${computerChoice}`;
}


function catFacts() {
  const list = ["Cats are believed to be the only mammals who don’t taste sweetness.", "Cats can jump up to six times their length.", "Cats have 230 bones, while humans only have 206.", "Cats have whiskers on the backs of their front legs, as well.", "Cats make very little noise when they walk around. The thick, soft pads on their paws allow them to sneak up on their prey”", "Cats have an extra organ that allows them to taste scents on the air", "Cats have an extra organ that allows them to taste scents on the air", "Cats use their long tails to balance themselves when they’re jumping or walking along narrow ledges.", `There are cats who have more than 18 toes. These extra-digit felines are referred to as being "polydactyl".`, "Cats are crepuscular, which means that they’re most active at dawn and dusk.", "Cats can spend up to a third of their waking hours grooming.", "Cats may yawn as a way to end a confrontation with another animal. Think of it as their “talk to the hand” gesture.", "Meowing is a behavior that cats developed exclusively to communicate with people.", "When a cat flops over and exposes his belly, it’s not always an invitation for a belly rub. A cat does this when he’s relaxed and showing trust." , "When cats hit you with retracted claws, they’re playing, not attacking.", "Cats are very fussy about their water bowls; some prefer to ignore their bowls entirely in favor of drinking from the sink faucet", "Some cats love the smell of chlorine.", "For some reason, cats really dislike citrus scents." ]

   const computerChoice = list[Math.floor(Math.random() * list.length)];

  const display = document.getElementById('result');

     display.textContent = `${computerChoice}`;
}

// function meow(){
//   var music = new Audio('');
//   music.play();
// }

function randomColorandAnimation(){
   const list = [ "black", "red", "green", "blue", "yellow",];
   const second = ["red", "black", "yellow", "purple"];
   const third = [ "Gill Sans", "Verdana", "Arial", "Helvetica", "Arial Black", "Tahoma", "Trebuchet MS","Impact"];  
   const fourth = ["10px", "5px", "15px", "20px", "25px"]


   const computerChoice = list[Math.floor(Math.random() * list.length)];
    const computerChoice2 = second[Math.floor(Math.random() * second.length)];
    const computerChoice3 = third[Math.floor(Math.random() * third.length)];
   const computerChoice4 = fourth[Math.floor(Math.random() * fourth.length)];
   
   

    document.body.style.background= computerChoice;
   document.body.style.color = computerChoice2;
   document.body.style.fontFamily = computerChoice3;
   document.body.style.fontSize = computerChoice4;
  }
