const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];
    // Keep in mind that because potions were mocked in Player.test.js,
    // calling new Potion() here will actually use the mocked version during the test. 
}

module.exports = Player;


// Notes
    // This is very similar to the Potion() constructor you created earlier.
        // The main difference is that the name parameter sets a default empty string if no name is provided.
        // This is another handy trick that came with ES6!
