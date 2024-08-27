const eventCards = [
    { 
        title: "Asteroid Field", 
        description: "Your Forehalf Weapon was hit by an asteroid. Lose 3 cells.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Engine Fire", 
        description: "Fire started in Left Engine Room! Send Engineer to medbay for one turn. Roll 4+ on a D6 to contain it early, if failed, lose 2 engine cells.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Quantum Mirage", 
        description: "Quantum mirage creates a duplicate ship. Confuse enemies for 2 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Cosmic Ray Burst", 
        description: "Shields weakened by 10%. Lose 1 cell from each shield.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Alien Artifact", 
        description: "Discovered an alien artifact. Roll 4+ on a D6 to decipher. Gain 2 Alpha-7 if successful, or lose 1 turn studying it.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Fuel Leak", 
        description: "Detected a fuel leak. Lose 2 fuel cells or skip your next turn for repairs.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Crew Morale Boost", 
        description: "Unexpected party in the mess hall. All crew efficiency increased by 5% for 2 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Space Pirate Encounter", 
        description: "Space pirates demand tribute. Roll 5+ on a D6 to outwit them. If failed, pay 2 Alpha-7 or engage in combat.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Nebula Discovery", 
        description: "Found a resource-rich nebula. Gain 1 Alpha-7 but shields are offline for 1 turn.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Malfunctioning Airlock", 
        description: "Airlock malfunction. Roll 3+ on a D6 to fix quickly. If failed, lose 1 oxygen cell or send a crew member to fix it, missing their next action.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Cosmic Storm", 
        description: "A cosmic storm approaches. Roll 4+ on a D6 to navigate safely. If failed, move 2 sectors in a random direction.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Rogue AI", 
        description: "Ship's AI malfunctions. Roll 5+ on a D6 to regain control, otherwise lose control of one random system for 2 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Alien Diplomacy", 
        description: "Encounter peaceful aliens. Roll 3+ on a D6 to establish trade relations and gain a random system upgrade.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Wormhole Anomaly", 
        description: "Ship caught in a wormhole. Roll 5+ on a D6 to navigate safely. If failed, move to a random sector on the board.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Solar Flare", 
        description: "Intense solar activity detected. Shields gain 2 cells, but weapons lose 1 cell.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Cargo Bay Breach", 
        description: "Hull breach in cargo bay. Roll 4+ on a D6 to seal quickly. If failed, lose 1 random resource or spend 2 turns to repair.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Quantum Entanglement", 
        description: "Strange quantum event. Swap the positions of two random crew members.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Cosmic Radiation", 
        description: "Harmful radiation detected. Roll 5+ on a D6 to shield the crew. If failed, all crew members lose 1 efficiency for 3 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Unexpected Ally", 
        description: "Friendly ship offers assistance. Repair 1 cell in any system for free.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Time Dilation", 
        description: "Entered a time dilation field. Gain an extra action this turn.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Gravity Anomaly", 
        description: "Artificial gravity malfunction. Roll 4+ on a D6 to recalibrate. If failed, all crew actions are 50% less effective for 2 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Fuel Efficiency", 
        description: "Discovered a fuel optimization technique. Roll 4+ on a D6 to implement and gain 2 fuel cells.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Alien Virus", 
        description: "Computer systems infected. Roll 5+ on a D6 to debug, otherwise lose 1 cell in a random system.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Stellar Nursery", 
        description: "Pass through a stellar nursery. Gain 1 Alpha-7 but engines are offline for 1 turn.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Crew Dispute", 
        description: "Internal conflict among crew. Roll 3+ on a D6 to resolve quickly. If failed, send 2 trained crew members to crew quarters for 1 turn, leaving their departments run by rookies with reduced efficiency.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Weapon Malfunction", 
        description: "Weapons system glitch. Roll 4+ on a D6 to fix immediately, otherwise weapons offline for 1 turn.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Spatial Rift", 
        description: "Encountered a spatial rift. Roll 3+ on a D6 to navigate safely. If successful, move 3 sectors in any direction. If failed, gain 1 Alpha-7 as compensation.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Plasma Storm", 
        description: "Plasma storm ahead. Shields gain 3 cells but lose 2 fuel cells.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Alien Technology", 
        description: "Found advanced alien tech. Roll 5+ on a D6 to reverse engineer and upgrade one system by 1 cell.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Cosmic Web", 
        description: "Ship tangled in a cosmic web. Roll 4+ on a D6 to break free, otherwise lose 1 turn or damage engines by 2 cells to escape immediately.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Telepathic Broadcast", 
        description: "Received a telepathic message. Roll 3+ on a D6 to decipher and gain insight into a random opponent's resources.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Dimensional Shift", 
        description: "Reality fluctuates. Roll a D6: Even - gain 1 cell in all systems, Odd - lose 1 cell in all systems.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Micro Black Hole", 
        description: "Passing near a micro black hole. Roll 5+ on a D6 to harness its power. If successful, gain 3 fuel cells. If failed, lose 2 random resources.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Crew Excellence", 
        description: "Crew performs exceptionally well. Choose one department to gain 2 efficiency for 3 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Sensor Malfunction", 
        description: "Long-range sensors offline. Roll 4+ on a D6 to repair quickly. If failed, cannot see or interact with other players for 2 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Galactic Bank", 
        description: "Encountered a galactic bank ship. Can trade resources at a 1:1 ratio this turn.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Psychic Phenomenon", 
        description: "Strange psychic event. Roll 4+ on a D6 to control it and swap a crew member with another player.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Antimatter Surge", 
        description: "Antimatter reactor surge. Roll 3+ on a D6 to contain it. If successful, gain 3 power cells. If failed, systems may overload next turn.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Stasis Field", 
        description: "Ship caught in a stasis field. Roll 5+ on a D6 to break free. If failed, skip your next turn but heal 1 cell in all systems.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Nanite Swarm", 
        description: "Beneficial nanites infest the ship. Repair 1 cell in a random system every turn for 3 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Quantum Flux", 
        description: "Quantum state uncertainty. Roll a D6 each turn for 3 turns: Even - gain 1 Alpha-7, Odd - lose 1 Alpha-7.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Subspace Beacon", 
        description: "Detected a subspace beacon. Roll 4+ on a D6 to decode. If successful, gain the ability to teleport once within the next 3 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Cosmic String", 
        description: "Encountered a cosmic string. Roll 3+ on a D6 to navigate safely. If successful, ship's speed doubled for 2 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Temporal Loop", 
        description: "Caught in a temporal loop. Roll 5+ on a D6 to break free. If failed, repeat your last turn's actions.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Gamma Ray Burst", 
        description: "Gamma ray burst detected. All shields reduced to 1 cell, but weapons gain 2 cells.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Crystalline Entity", 
        description: "Met a crystalline space entity. Roll 3+ on a D6 to communicate. If successful, exchange 1 Alpha-7 for 3 shield cells.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Spacetime Bubble", 
        description: "Entered a spacetime bubble. Choose to age your ship (gain 1 cell in all systems) or reverse time (lose 1 cell but gain 3 Alpha-7).", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Quantum Tunneling", 
        description: "Quantum tunneling event. Move to any adjacent sector without using fuel.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Dark Matter Cloud", 
        description: "Passing through a dark matter cloud. Shields and weapons gain 1 cell, but lose 2 fuel cells.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Alien Symbiote", 
        description: "Alien symbiote attaches to the hull. Roll 4+ on a D6 to remove it, otherwise gain 1 efficiency in all departments but lose 1 shield cell per turn.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Tachyon Pulse", 
        description: "Hit by a tachyon pulse. Roll 4+ on a D6 to stabilize, otherwise all system cooldowns are reduced by 1 turn.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Psionic Wave", 
        description: "Psionic wave passes through the ship. Roll 5+ on a D6 to resist. If failed, all crew members swap positions.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Magnetic Storm", 
        description: "Magnetic storm disrupts systems. Roll 4+ on a D6 to stabilize. If failed, randomly redistribute cells among all systems.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Quantum Mirage", 
        description: "Quantum mirage creates a duplicate ship. Roll 4+ on a D6 to maintain control. If successful, confuse enemies for 2 turns.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Cosmic Spore", 
        description: "Cosmic spores infest the ship. Roll 5+ on a D6 to cleanse. If failed, gain 1 Alpha-7 per turn for 3 turns, but lose 1 oxygen cell each turn.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Gravity Well", 
        description: "Pulled into a gravity well. Roll 4+ on a D6 to escape. If failed, spend 2 fuel cells or lose 1 turn.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Parallel Universe", 
        description: "Briefly shifted to a parallel universe. Roll 5+ on a D6 to stabilize. If successful, gain a copy of a random system from another player.", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Space-Time Rift", 
        description: "Space-time rift opens. Choose to send one system 2 turns into the future (unavailable until then) or 2 turns into the past (regain previous state).", 
        discard: "Discard this card back in the Event Deck." 
    },
    { 
        title: "Wormhole Transit", 
        description: "Wormhole opens in front of you. Roll 4+ on a D6 to navigate safely. If successful, move 3 sectors forward. If failed, return to the last sector you were in.", 
        discard: "Discard this card back in the Event Deck." 
    }
];

document.getElementById('generateCardButton').addEventListener('click', generateCard);

function generateCard() {
    const card = eventCards[Math.floor(Math.random() * eventCards.length)];
    document.getElementById('title').textContent = card.title;
    document.getElementById('description').textContent = card.description;
    document.getElementById('discard').textContent = card.discard;
}
