let powerOn = false;
let lifespan = 3; // Default lifespan for most special cards
let currentCard = null;
let shipClass = 1; // Default ship class

document.getElementById('class-select').addEventListener('change', function() {
    shipClass = parseInt(this.value);
});

document.getElementById('draw-card-button').addEventListener('click', function() {
    drawCard(); // Draw and display the selected card
});

document.getElementById('power-switch').addEventListener('click', function() {
    powerOn = !powerOn;
    document.getElementById('weapon-status').textContent = powerOn ? 'Status: Online' : 'Status: Offline';
    document.getElementById('selected-card').textContent = powerOn ? 'Powering Up...' : 'Powering Down...';
    document.getElementById('card-effect').textContent = '';
});

document.getElementById('activate-button').addEventListener('click', function() {
    if (powerOn && lifespan > 0 && currentCard) {
        activateCard(); // Activate the card's effect
        lifespan--;
        if (lifespan === 0) {
            document.getElementById('weapon-status').textContent = 'Status: Offline (Lifespan Depleted)';
            document.getElementById('card-effect').textContent = 'Weapon offline, reset required.';
        }
    } else if (lifespan === 0) {
        document.getElementById('selected-card').textContent = 'Lifespan Depleted. Please reset.';
    } else {
        document.getElementById('selected-card').textContent = 'Please power on the system first.';
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    powerOn = false;
    lifespan = currentCard ? currentCard.lifespan : 3; // Reset lifespan to its original value
    document.getElementById('weapon-status').textContent = 'Status: Offline';
    document.getElementById('selected-card').textContent = 'System Reset. Ready to power on.';
    document.getElementById('card-effect').textContent = '';
});

function drawCard() {
    const specialCards = [
        { name: 'Advanced Targeting System', type: 'Weapon', damage: [2, 4, 6], lifespan: 3, cost: 3 },
        { name: 'EMP Pulse Generator', type: 'Weapon', damage: [4, 8, 12], lifespan: 2, cost: 2 },
        { name: 'Stealth Cloaking Device', type: 'Stealth', effect: 'Invisible! Happy Hunting! Use your grid paper to track movements.', lifespan: 3, cost: 2 },
        { name: 'Shield Booster Module', type: 'Defense', shields: [4, 8, 12], lifespan: 3, cost: 2 },
        { name: 'Emergency Repair Kit', type: 'Utility', repair: [2, 4, 6], lifespan: 3, cost: 1 }
        // Add more special cards as needed
    ];

    currentCard = specialCards[Math.floor(Math.random() * specialCards.length)];
    document.getElementById('selected-card').textContent = `Selected Card: ${currentCard.name} (${currentCard.type})`;
    document.getElementById('card-effect').textContent = '';
    lifespan = currentCard.lifespan; // Set lifespan to card's specific value
}

function activateCard() {
    let effectText = '';

    if (currentCard.type === 'Weapon') {
        effectText = `Dealing ${currentCard.damage[shipClass - 1]} damage to Shields, Weapons, Engines, Fuel, and Oxygen.`;
    } else if (currentCard.type === 'Stealth') {
        effectText = currentCard.effect;
    } else if (currentCard.type === 'Defense') {
        effectText = `Boosting shields by ${currentCard.shields[shipClass - 1]} based on class.`;
    } else if (currentCard.type === 'Utility') {
        effectText = `Repairing ${currentCard.repair[shipClass - 1]} cells based on class.`;
    }

    effectText += ` Power Drain: ${currentCard.cost} cells.`;

    document.getElementById('card-effect').textContent = effectText + ` Lifespan remaining: ${lifespan}`;
}
