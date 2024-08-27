const resourceCards = [
    {
        title: "Rich Vein",
        description: "8 Alpha Deposits found. This site is particularly rich and can be mined three times.",
        miningTurns: "Mining Turns: 3",
        bonus: "Bonus: Draw another card after each mining turn.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Sparse Deposit",
        description: "2 Alpha Deposits found. This site is nearly depleted and can only be mined once.",
        miningTurns: "Mining Turns: 1",
        bonus: "",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Unexpected Discovery",
        description: "Amongst the Alpha Deposits, you find the wreckage of a ship. Miraculously, a Class 2 Engine is still intact! Add it to your ship.",
        miningTurns: "Mining Turns: 1",
        bonus: "Bonus: Add a Class 2 Engine to your ship.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Abundant Find",
        description: "6 Alpha Deposits found. This site is fertile and can be mined twice.",
        miningTurns: "Mining Turns: 2",
        bonus: "Bonus: Draw another card after the second mining turn.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Rare Mineral",
        description: "10 Alpha Deposits found. This site is incredibly rich and can be mined four times.",
        miningTurns: "Mining Turns: 4",
        bonus: "",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Crew in Distress",
        description: "You find a damaged escape pod amongst the deposits. Inside, a new crew member is still alive, barely. Add a crew member and send them to the med bay for checkup.",
        miningTurns: "Mining Turns: 1",
        bonus: "Bonus: Add a new crew member.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Depleted Site",
        description: "1 Alpha Deposit found. This site is nearly empty and can only be mined once.",
        miningTurns: "Mining Turns: 1",
        bonus: "",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Ancient Wreckage",
        description: "You uncover an ancient wreckage buried beneath the deposits. Amongst the rubble, you find a Class 2 Shield still functional. Add it to your ship.",
        miningTurns: "Mining Turns: 1",
        bonus: "Bonus: Add a Class 2 Shield to your ship.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Bountiful Harvest",
        description: "7 Alpha Deposits found. This site is rich and can be mined three times.",
        miningTurns: "Mining Turns: 3",
        bonus: "Bonus: Draw another card after the third mining turn.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Hidden Treasure",
        description: "While mining, you uncover a hidden stash left by a previous crew. Gain 5 Alpha Deposits and a random Class 1 ship upgrade.",
        miningTurns: "Mining Turns: 2",
        bonus: "Bonus: Gain a random Class 1 ship upgrade.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Barely There",
        description: "3 Alpha Deposits found. This site is almost depleted and can only be mined once.",
        miningTurns: "Mining Turns: 1",
        bonus: "",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Pirate Bait",
        description: "4 Alpha Deposits found, but the site is booby-trapped by pirates. Roll a D6: 1-3 lose 2 crew members, 4-6 gain an additional 4 Alpha Deposits after disarming the trap.",
        miningTurns: "Mining Turns: 2",
        bonus: "Bonus: Roll a D6 for a bonus or penalty.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Lost Cache",
        description: "5 Alpha Deposits found, plus a hidden cache of supplies. Gain 3 Alpha-7 in addition to your deposits.",
        miningTurns: "Mining Turns: 2",
        bonus: "Bonus: Gain 3 Alpha-7.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Wreckage Debris",
        description: "Among the deposits, you find pieces of a wrecked ship. Salvage a Class 1 Weapon from the debris.",
        miningTurns: "Mining Turns: 1",
        bonus: "Bonus: Add a Class 1 Weapon to your ship.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Hidden Crew",
        description: "A faint life signal is detected under the deposits. You rescue a crew member and add them to your team.",
        miningTurns: "Mining Turns: 1",
        bonus: "Bonus: Add a new crew member.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Refined Discovery",
        description: "A rare find! Amongst the Alpha Deposits, you uncover 2 fully refined Alpha-7 units ready for use. No mining needed.",
        miningTurns: "Mining Turns: 0",
        bonus: "Bonus: Gain 2 Alpha-7.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Fortune's Favor",
        description: "12 Alpha Deposits found. This site is incredibly rich and can be mined four times.",
        miningTurns: "Mining Turns: 4",
        bonus: "Bonus: Gain 1 Alpha-7 after the third mining turn.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Derelict Cargo",
        description: "Amongst the deposits, you find a derelict cargo pod. Inside, you find a rare Class 3 Engine still intact! Add it to your ship.",
        miningTurns: "Mining Turns: 1",
        bonus: "Bonus: Add a Class 3 Engine to your ship.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Life Pod",
        description: "You discover a life pod buried under the deposits. The crew inside are alive but in stasis. Add 2 new crew members to your ship.",
        miningTurns: "Mining Turns: 1",
        bonus: "Bonus: Add 2 new crew members.",
        discard: "Discard this card back in the Resource Deck."
    },
    {
        title: "Pirate Stash",
        description: "You stumble upon a pirate's hidden stash. Gain 6 Alpha Deposits and 2 Alpha-7 left behind by a previous crew. Take it all.",
        miningTurns: "Mining Turns: 2",
        bonus: "Bonus: Gain 2 Alpha-7.",
        discard: "Discard this card back in the Resource Deck."
    }
];

function generateResourceCard() {
    const randomIndex = Math.floor(Math.random() * resourceCards.length);
    const card = resourceCards[randomIndex];

    document.getElementById("title").textContent = card.title;
    document.getElementById("description").textContent = card.description;
    document.getElementById("mining-turns").textContent = card.miningTurns;
    document.getElementById("bonus").textContent = card.bonus;
    document.getElementById("discard").textContent = card.discard;
}

document.getElementById("draw-card").addEventListener("click", generateResourceCard);
