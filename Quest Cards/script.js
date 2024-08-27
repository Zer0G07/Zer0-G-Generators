const questCards = [
    {
        title: "Ancient Artifact Recovery",
        description: `Retrieve and decode the Ancient Artifact hidden in the Alpha Outer Rim system and deliver it to the Academy.
        
        **Steps:**
        1. Travel to the Alpha Outer Rim system, sector 14/6.
        2. Decode the artifact’s security code in sector 10/4.
        3. Deliver the decoded artifact to the Academy Trade Station.
        4. Receive 12 Alpha-7 as payment for the decoded artifact.
        5. Return to your Home Station for final preparations.
        6. Upgrade your ship with advanced technology found in the artifact.
        7. Announce your victory after completing the quest.`,
        consequence: `If the decoding fails (roll 4+ on a D6), the quest is failed. Return the card to the deck.`,
        discard: "Place this card back in the Quest Deck after the game ends."
    },
    {
        title: "Galactic Treasure Hunt",
        description: `Uncover hidden treasures across multiple systems and bring them back to the Trade Station.
        
        **Steps:**
        1. Travel to the Delta Aegialeus system, sector 7/3, and discover a hidden cache of Alpha-7.
        2. Secure 10 Alpha-7 from the hidden cache.
        3. Proceed to the New Lapteus system, sector 12/5, to locate a second hidden treasure.
        4. Roll a 5+ on a D6 to reveal the treasure's location. If successful, gain 8 Alpha-7.
        5. Deliver all collected treasures to the Trade Station for safekeeping.
        6. Return to your Home Station and prepare for victory.`,
        consequence: `If you fail to roll a 5+ at New Lapteus, the quest fails, and you must discard the collected Alpha-7.`,
        discard: "Place this card back in the Quest Deck after the game ends."
    },
    {
        title: "Secret Weapon Development",
        description: `Develop a powerful new weapon by collecting rare components from multiple systems.
        
        **Steps:**
        1. Travel to the Maenali system, sector 4/2, to collect the first component.
        2. Secure the component and proceed to the Grani Doshi system, sector 8/9, for the second component.
        3. Roll a 4+ on a D6 to successfully extract the second component.
        4. Deliver both components to the Industrial Trade Station.
        5. Use the components to upgrade your ship with a Class 3 Weapon.
        6. Return to your Home Station and prepare for victory.`,
        consequence: `If you fail to roll a 4+ at Grani Doshi, the quest fails, and you lose the first component.`,
        discard: "Place this card back in the Quest Deck after the game ends."
    },
    {
        title: "Rescue Mission",
        description: `Rescue a stranded crew member in the Kartozia system and bring them safely back to your Home Station.
        
        **Steps:**
        1. Travel to the Kartozia system, sector 16/4, and locate the stranded crew member.
        2. Rescue the crew member and bring them aboard your ship.
        3. Roll a 3+ on a D6 to avoid hostile forces while escaping the system.
        4. Deliver the crew member to the Academy Trade Station for medical treatment.
        5. Receive 10 Alpha-7 as payment for the rescue.
        6. Return to your Home Station and prepare for victory.`,
        consequence: `If you fail to roll a 3+ during the escape, the quest fails, and the crew member is lost.`,
        discard: "Place this card back in the Quest Deck after the game ends."
    },
    {
        title: "Artifact Smuggling",
        description: `Smuggle a forbidden artifact from Dagon Prime to the Gunnlod system without getting caught.
        
        **Steps:**
        1. Travel to Dagon Prime, sector 5/7, to acquire the artifact.
        2. Evade detection by rolling a 5+ on a D6 while leaving the planet.
        3. Smuggle the artifact to the Gunnlod system, sector 14/3.
        4. Deliver the artifact to the designated contact at Gunnlod.
        5. Receive 15 Alpha-7 as payment for the smuggling operation.
        6. Return to your Home Station and prepare for victory.`,
        consequence: `If you fail to roll a 5+ while leaving Dagon Prime, the quest fails, and the artifact is confiscated.`,
        discard: "Place this card back in the Quest Deck after the game ends."
    },
    {
        title: "Lost Technology Recovery",
        description: `Recover lost technology from an abandoned station in the Hasta VI system and bring it to the Industrial Trade Station.
        
        **Steps:**
        1. Travel to the Hasta VI system, sector 9/2, and board the abandoned station.
        2. Retrieve the lost technology and avoid security drones by rolling a 4+ on a D6.
        3. Deliver the technology to the Industrial Trade Station.
        4. Receive a Class 2 Engine upgrade as a reward.
        5. Return to your Home Station and prepare for victory.`,
        consequence: `If you fail to roll a 4+ while avoiding the security drones, the quest fails, and the technology is destroyed.`,
        discard: "Place this card back in the Quest Deck after the game ends."
    },
    {
        title: "Espionage Operation",
        description: `Gather intelligence from multiple systems and deliver it to the Academy for analysis.
        
        **Steps:**
        1. Travel to the Dagon Prime system, sector 13/8, and gather intelligence.
        2. Proceed to the Alpha Outer Rim system, sector 11/5, and gather additional intelligence.
        3. Deliver the collected intelligence to the Academy Trade Station.
        4. Receive 12 Alpha-7 as payment for the intelligence.
        5. Return to your Home Station and prepare for victory.`,
        consequence: `If you are intercepted by enemy players during the intelligence-gathering phase, the quest fails, and the intelligence is lost.`,
        discard: "Place this card back in the Quest Deck after the game ends."
    },
    {
        title: "Rescue Operation",
        description: `Rescue an allied ship stranded in the Gunnlod system and escort it back to the Academy.
        
        **Steps:**
        1. Travel to the Gunnlod system, sector 3/6, and locate the stranded ship.
        2. Escort the ship through the New Lapteus system, avoiding enemy encounters.
        3. Roll a 4+ on a D6 to successfully navigate through hostile territory.
        4. Deliver the ship safely to the Academy Trade Station.
        5. Receive 14 Alpha-7 as payment for the rescue operation.
        6. Return to your Home Station and prepare for victory.`,
        consequence: `If you fail to roll a 4+ while navigating hostile territory, the quest fails, and the allied ship is lost.`,
        discard: "Place this card back in the Quest Deck after the game ends."
    },
    {
        title: "Covert Operation",
        description: `Infiltrate an enemy base in the Maenali system and retrieve a stolen blueprint.
        
        **Steps:**
        1. Travel to the Maenali system, sector 15/7, and infiltrate the enemy base.
        2. Retrieve the stolen blueprint without triggering alarms.
        3. Roll a 5+ on a D6 to avoid detection during extraction.
        4. Deliver the blueprint to the Industrial Trade Station.
        5. Receive a Class 3 Shield upgrade as a reward.
        6. Return to your Home Station and prepare for victory.`,
        consequence: `If you fail to roll a 5+ during the extraction, the quest fails, and the blueprint is lost.`,
        discard: "Place this card back in the Quest Deck after the game ends."
    },
    {
        title: "Diplomatic Mission",
        description: `Negotiate a peace treaty between warring factions in the Delta Aegialeus system.
        
        **Steps:**
        1. Travel to the Delta Aegialeus system, sector 6/3, and meet with the first faction.
        2. Secure their agreement to the peace treaty.
        3. Proceed to sector 12/2 and meet with the second faction.
        4. Roll a 4+ on a D6 to successfully mediate the negotiation.
        5. Deliver the signed treaty to the Academy Trade Station.
        6. Receive 10 Alpha-7 as a reward for your diplomatic efforts.
        7. Return to your Home Station and prepare for victory.`,
        consequence: `If you fail to roll a 4+ during the mediation, the quest fails, and the treaty is void.`,
        discard: "Place this card back in the Quest Deck after the game ends."
    }
    // Add more quests following this structure as needed
];

function generateQuestCard() {
    const randomIndex = Math.floor(Math.random() * questCards.length);
    const card = questCards[randomIndex];

    document.getElementById("title").textContent = card.title;
    document.getElementById("description").innerHTML = card.description;
    document.getElementById("consequence").textContent = card.consequence;
    document.getElementById("discard").textContent = card.discard;
}

document.getElementById("draw-card").addEventListener("click", generateQuestCard);
