const Potion = require('./Potion');
const Character = require('./Character');

// whole thing replaced by ES6
    // function Player(name = '') {
    //     this.name = name;

    //     this.health = Math.floor(Math.random() * 10 + 95);
    //     this.strength = Math.floor(Math.random() * 5 + 7);
    //     this.agility = Math.floor(Math.random() * 5 + 7);

    //     this.inventory = [new Potion('health'), new Potion()];
    //     // Keep in mind that because potions were mocked in Player.test.js,
    //     // calling new Potion() here will actually use the mocked version during the test.

    //     /* Replaced by prototype syntax
    //         // returns an object with various player properties
    //         this.getStats = function() {
    //             return {
    //                 potions: this.inventory.length,
    //                 health: this.health,
    //                 strength: this.strength,
    //                 agility: this.agility
    //             };
    //         };

    //         // returns the inventory array or false if empty
    //         this.getInventory = function() {
    //             if(this.inventory.length) {
    //                 return this.inventory;
    //             }
    //             return false;
    //         };
    //     */
    // }

    // // inherit prototype methods from Character (do so before other prototypes to avoid overwrite)
    // Player.prototype = Object.create(Character.prototype);

    // Player.prototype.getStats = function() {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };
    // // Should I use `${this.health} etc.?

    // Player.prototype.getInventory = function() {
    //     if(this.inventory.length) {
    //         return this.inventory;
    //     }
    //     return false;
    // }


    // Player.prototype.addPotion = function(potion) {
    //     this.inventory.push(potion);
    // }

    // Player.prototype.usePotion = function(index) {
    //     const potion = this.getInventory().splice(index, 1)[0];

    //     switch (potion.name) {
    //         case 'agility':
    //             this.agility += potion.value;
    //             break;

    //         case 'health':
    //             this.health += potion.value;
    //             break;

    //         case 'strength':
    //             this.strength += potion.value;
    //             break;
    //     }
    // }
    // // ??? Question: is `name` in potion.name the one being tested?
    // // Can be done with if statement?

class Player extends Character {
  constructor(name = '') {
    // call parent constructor here
    super(name);

    /* replaced by Character constructor called by super() above
        this.name = name;

        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
    */

    this.inventory = [new Potion('health'), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  }
}

module.exports = Player;


// Notes
    // This is very similar to the Potion() constructor you created earlier.
        // The main difference is that the name parameter sets a default empty string if no name is provided.
        // This is another handy trick that came with ES6!
