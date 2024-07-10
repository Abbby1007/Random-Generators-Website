

const generatorButton = document.getElementById(`quirky-Pickup- Lines- Generator`);

const resultDisplay = document.getElementById('results');
// random
// tst
generatorButton.addEventListener("click", function() {
  console.log("Button clicked!");

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

  const selectedThing = list[Math.floor](Math.floor(Math.random() * list));
  resultDisplay.textContent = `${selectedThing}`;
  console.log(`Results: ${selectedThing}`);

});


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