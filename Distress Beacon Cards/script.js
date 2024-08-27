const distressCards = [
    { 
        title: "Pirate Ambush", 
        description: "Your distress signal was intercepted by pirates. They overwhelmed your ship, and your journey ends here. Your crew valiantly tried to fight back, but it wasn't enough.", 
        cost: "Roll a 6 on a D6 to have a crew member send out a second beacon for rescue.",
        discard: "Discard this card back in the Beacon Deck."
    },
    { 
        title: "Alien Rescue", 
        description: "Your distress beacon was intercepted by an alien federation. They rescue you and offer safe passage back to a trade station.",
        cost: "You are safe, but you lose all cargo and start with a default Class 1 ship.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Asteroid Impact",
        description: "An asteroid field intercepts your distress call, and the signal is lost. Your ship is destroyed by the incoming asteroids.",
        cost: "Game Over.",
        discard: "Discard this card back in the Beacon Deck."
    },
    { 
        title: "Warp Field Malfunction", 
        description: "Your warp drive attempts to engage but malfunctions, causing critical system failures throughout the ship.",
        cost: "Roll a 6 on a D6 to stabilize the ship and attempt a second beacon. If not, Game Over.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Rebel Outpost Rescue",
        description: "A rebel outpost responds to your distress call and rescues you from certain doom.",
        cost: "You are rescued, but you must surrender all cargo and start with a default Class 1 ship.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Solar Flare",
        description: "A solar flare disrupts communications, preventing your distress beacon from reaching help. Your ship succumbs to the solar radiation.",
        cost: "Game Over.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Galactic Patrol",
        description: "A galactic patrol intercepts your distress beacon and rescues your crew, but your ship is beyond repair.",
        cost: "You lose all cargo and start with a default Class 1 ship.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Quantum Rift",
        description: "A quantum rift opens near your ship, pulling you into another dimension. No one ever hears your distress call.",
        cost: "Game Over.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Black Market Rescue",
        description: "Your distress call is intercepted by a black market trader who rescues you, but at a steep price.",
        cost: "Lose all cargo, upgrades, and start with a default Class 1 ship.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Supernova Shockwave",
        description: "A supernova shockwave disrupts your systems, causing your ship to lose power and drift into oblivion.",
        cost: "Game Over.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Mysterious Benefactor",
        description: "A mysterious benefactor responds to your distress call, offering aid and supplies.",
        cost: "You are rescued, but you lose all cargo and start with a default Class 1 ship.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Space Station Evacuation",
        description: "Your distress beacon reaches a nearby space station. They send shuttles to evacuate your crew.",
        cost: "You are rescued, but you lose all cargo and start with a default Class 1 ship.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Space Pirates Attack",
        description: "Your distress beacon is intercepted by space pirates. They board your ship and take over.",
        cost: "Game Over.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Abandoned Space Hulk",
        description: "Your distress call reaches an abandoned space hulk. You take refuge there, but the ship is irreparable.",
        cost: "You lose all cargo and start with a default Class 1 ship.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Second Chance",
        description: "Your distress signal is fading, but a nearby ship picks it up just in time.",
        cost: "Roll a 6 on a D6 to draw another Beacon card and hope for rescue.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Derelict Ship Rescue",
        description: "A derelict ship is found near your location. They rescue you and offer you passage to the nearest space station.",
        cost: "You lose all cargo and start with a default Class 1 ship.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Signal Lost",
        description: "Your distress beacon is lost in a nebula, and no one is able to find your ship.",
        cost: "Game Over.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Merchant Ship Rescue",
        description: "A merchant ship receives your distress signal and offers you passage to the nearest trade station.",
        cost: "You lose all cargo and start with a default Class 1 ship.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Drifting in Space",
        description: "Your ship drifts into a region of space where no signals can reach. All hope is lost.",
        cost: "Game Over.",
        discard: "Discard this card back in the Beacon Deck."
    },
    {
        title: "Ancient Probe",
        description: "An ancient probe detects your distress signal and reboots your ship's core, saving you.",
        cost: "You lose all cargo and start with a default Class 1 ship.",
        discard: "Discard this card back in the Beacon Deck."
    }
];

function generateCard() {
    const randomIndex = Math.floor(Math.random() * distressCards.length);
    const card = distressCards[randomIndex];

    document.getElementById("title").textContent = card.title;
    document.getElementById("description").textContent = card.description;
    document.getElementById("cost").textContent = card.cost ? card.cost : "";
    document.getElementById("discard").textContent = card.discard;
}

document.addEventListener("DOMContentLoaded", function () {
    generateCard(); // Automatically generate a card when the page loads
    document.querySelector("button").addEventListener("click", generateCard);
});
