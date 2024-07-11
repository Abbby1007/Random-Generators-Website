// const roundsDrawDisplay = document.getElementById(`round-draw`);
// const resultDisplay = document.getElementById('results');
// const word = 'helllllo'

function changeText() 
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
   // const selectedThing = list[Math.floor](Math.floor(Math.random() * list));
const display = document.getElementById('result');

   display.textContent = `${computerChoice}`
}





// const generatorButton = document.getElementById(`quirky-Pickup-Lines-Generator`);

// const resultDisplay = document.getElementById('results');
// // random
// // tst
// generatorButton.addEventListener("click", function() {
//   console.log("Button clicked!");

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
  ];

//   const selectedThing = list[Math.floor](Math.floor(Math.random() * list));
//   resultDisplay.textContent = `${selectedThing}`;
//   console.log(`Results: ${selectedThing}`);

// });


// function generate(){
//   const list = ["Do you believe in love at first sight, or should I walk by again?", 
//                "Are you a Wi-Fi signal? Because I'm feeling a strong connection here.", 
//                "I bet your birthday is October 10 because you’re a 10/10.", 
//                "Are you a time traveler? Because I see you in my future.", 
//                "Do you have a Band-Aid? I scraped my knee falling for you.",
//                "Do you play soccer? Because you look like a keeper.",
//               "Are you from Tennessee? Because you're the only 10 I see.",
//               "If you and I were socks, we'd make a great pair.",
//                "If I could rearrange the alphabet, I'd put U and I together.",
//                "Know what's on the menu today? Me 'n u.",
//                "Are you a magician? Because when I look at you, everyone else disappears.",
//                "I promise I won’t break your heart — I’ll just steal it.",
//                "I'm not a photographer, but I can definitely picture us together.",
//   ];

//   const selectedThing = list[Math.floor](Math.floor(Math.random() * list));
//   resultDisplay.textContent = `${selectedThing}`;
//   console.log(`Results: ${selectedThing}`);
// }