document.getElementById('roll-shields').addEventListener('click', function() {
    playVoice('Fire_on_Shields', function() {
        rollDice('blue');
    });
});

document.getElementById('roll-weapons').addEventListener('click', function() {
    playVoice('Fire_on_Weapons', function() {
        rollDice('red');
    });
});

document.getElementById('roll-engines').addEventListener('click', function() {
    playVoice('Fire_on_Engines', function() {
        rollDice('orange');
    });
});

document.getElementById('roll-fuel').addEventListener('click', function() {
    playVoice('Fire_on_Fuel_Tanks', function() {
        rollDice('yellow');
    });
});

document.getElementById('roll-oxygen').addEventListener('click', function() {
    playVoice('Fire_on_Oxygen_Supplies', function() {
        rollDice('green');
    });
});

document.getElementById('roll-defense').addEventListener('click', function() {
    rollDefenseDice();
});

function playVoice(voiceId, callback) {
    const voice = document.getElementById(voiceId);
    if (voice) {
        voice.pause();
        voice.currentTime = 0;
        voice.play().then(() => {
            setTimeout(callback, 2300); // Adjust delay as needed
        }).catch(error => {
            console.error('Error playing voice:', error);
            callback(); // Proceed even if the voice fails to play
        });
    } else {
        console.error('Voice element not found:', voiceId);
        callback();
    }
}

function rollDice(color) {
    const result = Math.floor(Math.random() * 6);

    let resultText = '';
    let soundId = '';

    if (result === 0 || result === 1) {
        resultText = 'Target Missed';
        soundId = 'target-missed-sound';
    } else if (result >= 2 && result <= 4) {
        resultText = 'Target Impact';
        soundId = 'target-impact-sound';
    } else if (result === 5) {
        resultText = 'Critical Impact';
        soundId = 'critical-impact-sound';
    }

    document.getElementById(`${color}-result`).textContent = `${color.charAt(0).toUpperCase() + color.slice(1)} Dice: ${resultText}`;
    playSound(soundId);
}

function rollDefenseDice() {
    const result = Math.floor(Math.random() * 6);

    let resultText = '';
    let soundId = '';
    let voiceId = '';

    if (result === 0) {
        resultText = 'Dud';
        soundId = 'dud-sound';
        voiceId = 'That_was_close_Commander';
    } else if (result === 1) {
        resultText = 'Counter Measures';
        soundId = 'counter-measures-sound';
        voiceId = 'Countermeasures_deployed';
    } else if (result >= 2 && result <= 3) {
        resultText = 'Half Damage';
        soundId = 'half-damage-defense-sound';
        voiceId = 'We’ve_mitigated_some_damage';
    } else {
        resultText = 'Full Damage';
        soundId = 'full-damage-defense-sound';
        voiceId = 'Brace_for_impact!';
    }

    playVoice(voiceId, function() {
        document.getElementById('defense-result').textContent = `Defense Dice: ${resultText}`;
        playSound(soundId);
    });
}

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
        sound.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    } else {
        console.error('Sound element not found:', soundId);
    }
}

// Reset button functionality
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('blue-result').textContent = 'Blue Dice Result: -';
    document.getElementById('red-result').textContent = 'Red Dice Result: -';
    document.getElementById('orange-result').textContent = 'Orange Dice Result: -';
    document.getElementById('yellow-result').textContent = 'Yellow Dice Result: -';
    document.getElementById('green-result').textContent = 'Green Dice Result: -';
    document.getElementById('defense-result').textContent = 'Defense Dice Result: -';
});
