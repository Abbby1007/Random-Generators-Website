// const roundsDrawDisplay = document.getElementById(`round-draw`);
// const resultDisplay = document.getElementById('results');
// const word = 'helllllo'

function pickupLines() {
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
   const list = ["Cats are believed to be the only mammals who don’t taste sweetness.", "Cats can jump up to six times their length.", "Cats have 230 bones, while humans only have 206.", "Cats have whiskers on the backs of their front legs, as well.", "Cats make very little noise when they walk around. The thick, soft pads on their paws allow them to sneak up on their prey”", "Cats have an extra organ that allows them to taste scents on the air", "Cats have an extra organ that allows them to taste scents on the air", "Cats use their long tails to balance themselves when they’re jumping or walking along narrow ledges.", `There are cats who have more than 18 toes. These extra-digit felines are referred to as being "polydactyl".`, "Cats are crepuscular, which means that they’re most active at dawn and dusk.", "Cats can spend up to a third of their waking hours grooming.", "Cats may yawn as a way to end a confrontation with another animal. Think of it as their “talk to the hand” gesture.", "Meowing is a behavior that cats developed exclusively to communicate with people.", "When a cat flops over and exposes his belly, it’s not always an invitation for a belly rub. A cat does this when he’s relaxed and showing trust.", "When cats hit you with retracted claws, they’re playing, not attacking.", "Cats are very fussy about their water bowls; some prefer to ignore their bowls entirely in favor of drinking from the sink faucet", "Some cats love the smell of chlorine.", "For some reason, cats really dislike citrus scents."]

   const computerChoice = list[Math.floor(Math.random() * list.length)];

   const display = document.getElementById('result');

   display.textContent = `${computerChoice}`;
}

function randomColorandAnimation() {
   const list = ["black", "red", "green", "blue", "yellow",];
   const second = ["red", "black", "yellow", "purple"];
   const third = ["Gill Sans", "Verdana", "Arial", "Helvetica", "Arial Black", "Tahoma", "Trebuchet MS", "Impact"];
   const fourth = ["10px", "5px", "15px", "20px", "25px"]


   const computerChoice = list[Math.floor(Math.random() * list.length)];
   const computerChoice2 = second[Math.floor(Math.random() * second.length)];
   const computerChoice3 = third[Math.floor(Math.random() * third.length)];
   const computerChoice4 = fourth[Math.floor(Math.random() * fourth.length)];



   document.body.style.background = computerChoice;
   document.body.style.color = computerChoice2;
   document.body.style.fontFamily = computerChoice3;
   document.body.style.fontSize = computerChoice4;
}

function dadjokes() {
   const list = ["Why shouldn't you tell secrets in a cornfield? There are too many ears all around.", "What kind of underpants do lawyers wear? Briefs.", "What do you call it when a cow grows facial hair? A moo-stache.", "Did you hear about the cleaners who went to space? They ended up scrubbing the mission.", "Did you hear about the two rowboats that got into an argument? It was an oar-deal.", "What did the beach say when the tide came in? Long time no sea.", "Why do turkeys play percussion? They have drumsticks.", "There are only two things I don't eat for breakfast: Lunch and dinner.", "I adopted a dog from a blacksmith. As soon as I brought him home, he made a bolt for the door.", "How much does it cost to swim with sharks? An arm and a leg.", "What did one toilet say to the other? You appear a bit flushed.", "Why are most people tired on April 1? They've just finished a 31-day March.", "How do you make a tissue dance? Put a little boogie in it.", "Why did the rabbit go to the salon? It was having a bad hare day.", "Where do birds stay when they travel? Someplace cheep.",];
   const computerChoice = list[Math.floor(Math.random() * list.length)];

   const display = document.getElementById('result');

   display.textContent = `${computerChoice}`;
}

function pizzaToppings() {
   const list = ["Pepperoni", "Onions", "Ham", "Mushrooms", "Sausage", "Pineapple", "Supreme (Bacon, Onion, beef mince, capsicum(bell peppers), pepperoni, mushroom, andolive)", "Hawaiian (Ham and Pineapple)", "BBQ Meatlovers (pepperoni, bacon, cabanossi, beef mince, ham)", "Garlic Butter Prawns and Chilli (garlic butter prawns, capsicum, onion, chili, rocket)", "Sausage and Kale", "Hot n’ spicy(spicy salami, capsicum, sliced jalapenos, onions, hot sauce)", "Aussie pizza (bacon, red onion, a whole egg cracked on)", "Caramelized onion, feta, beef mince", "Squid, chorizo, rocket", "Spring pizza (zucchini, artichoke, asparagus, spinach, and pesto dolloped on just before serving)", "Seafood pizza (precooked squid, mussels, clams, prawns etc)", "BBQ chicken (BBQ sauce, shredded chicken, red onion, smoked paprika)"];
   const computerChoice = list[Math.floor(Math.random() * list.length)];

   const display = document.getElementById('result');

   display.textContent = `${computerChoice}`;
}

function randomBreakfast() {
   const list = ["Scrambled Eggs", "Boiled Eggs", "bacon", "bagel", "Froot loop", "Avocado Toast", "Yogurt", "Frosted Flakes"];

   const sundayChoice = list[Math.floor(Math.random() * list.length)];
   const mondayChoice = list[Math.floor(Math.random() * list.length)];
   const tuesdayChoice = list[Math.floor(Math.random() * list.length)];
   const wednesdayChoice = list[Math.floor(Math.random() * list.length)];
   const thursdayChoice = list[Math.floor(Math.random() * list.length)];
   const fridayChoice = list[Math.floor(Math.random() * list.length)];
   const saturdayChoice = list[Math.floor(Math.random() * list.length)];

   const display = document.getElementById('result');

   const display2 = document.getElementById('result2');


   display.textContent = `Sunday: ${sundayChoice} | Monday: ${mondayChoice} | Tuesday: ${tuesdayChoice} | Wednesday: ${wednesdayChoice} `;
   display2.textContent = `Thursday: ${thursdayChoice} | Friday: ${fridayChoice} | Saturday: ${saturdayChoice} | `;
}

function randomCompliments() {
   const list = ["Your smile is contagious.", "I bet you can make even the crankiest babies smile.", "You have the best laugh.", "You light up the room.", "You have a great sense of humor.", "If you were a cartoon character, you'd be the one that gets bluebirds to sing on your shoulders.", "You're like sunshine on a rainy day.", "Colors seem brighter when you're around.", "You are perfect just the way you are.", "You are enough.", "On a scale from 1 to 10, you're an 11.", "You're one of a kind."];
   const computerChoice = list[Math.floor(Math.random() * list.length)];
   const display = document.getElementById('result');
   display.textContent = `${computerChoice}`;

}

function insults() {
   const list = ["Can I have the name of your hair salon? I need to know where not to go.", "If you were a spice, you’d be flour.", "I smell something burning. Are you trying to think again?", "You’re like a lighthouse in a desert: bright but not very useful.", "You’re just like a Russian doll—full of yourself.", " You are the human equivalent of a participation trophy.", "Your face is just fine. It’s your personality that’s the issue.", "I do not have the time or the crayons to explain this to you.", "I will not have a battle of wits with someone who is unarmed.", "It appears that your brain cells are not holding hands right now.", "You have your entire life to be a knucklehead. You can take today off.", "Where’s your off button?", "You are proof that the universe has a sense of humor.", "I know you are, but what am I?", "I bet your pH level is 14. Basic.", "How do you not fall down more?", "You’re as deep as a puddle in a parking lot.", "You remind me of a slightly tilted picture frame.", "Stupidity is not a crime. You’re free to go.", "You really should come with a warning label.", "I would describe your personality as a vibrant shade of beige.", "A sharp tongue is not necessarily an indicator of a keen mind.", "You don’t need to fear success. You have nothing to worry about.", "Is there an intermission to this drama?"];
   const computerChoice = list[Math.floor(Math.random() * list.length)];
   const display = document.getElementById('result');
   display.textContent = `${computerChoice}`;
}

function furniture() {
   const list = ["Sofas", "Sectionals", "Sleeper Sofas", "Accent Chairs", "Loveseats", "Chaises", " Chairs-and-a-half", "Recliners", "Swivels & Gliders", "Chair Ottomans", "Coffee tables", "End tables", "Benches", "Accent tables", "Accent chests", "Bookcases and open shelving", "Credenzas and consoles", "Dining tables", "Arm Chairs", "SideChairs", "Bar and counter stools", " Sideboards", "Console tables", "Beds", "Headboards", "Nightstands", "Dressers", "Chests and armoires", "Mirrors", "Mattresses", "Desks", "Storage cabinets",];
   const computerChoice = list[Math.floor(Math.random() * list.length)];
   const display = document.getElementById('result');
   display.textContent = `${computerChoice}`;
}

function icecream(){
   const list = ["Chocolate","Vanilla","Strawberry","Mint Chocolate Chip","Butter Pecan","Chocolate Chip Cookie Dough"," Cookies n' Cream","Rocky Road","Coffee","Chocolate Chip","Pistachio","Neapolitan","Cake Batter","Salted Caramel","Butterscotch","French Vanilla","Cherry Vanilla","Chocolate Peanut Butter","Maple","Black Raspberry Chip","Moose Tracks","Raspberry Ripple","Strawberry Cheesecake","Cotton Candy","Watermelon","Pralines 'n Cream","Matcha Green Tea","Banana","Rum Raisin","Bubblegum","Tutti Frutti","Eggnog"];
   const computerChoice = list[Math.floor(Math.random() * list.length)];
   const display = document.getElementById('result');
   display.textContent = `${computerChoice}`;
}