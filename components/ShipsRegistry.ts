interface IDeck {
    isAlive: boolean,
}

interface IShip {
    numberDecksAlive: number;
    decks: {
        [key: number]: IDeck,
    }
}

export default class ShipsRegistry {
    public numberShipsAlive: number;
    public ships: {
        [key: number]: IShip,
    };
    constructor() {
        let shipIndex = 0;
        this.numberShipsAlive = 10;
        this.ships = {};

        [...Array(4)].forEach((_, i) => {
            [...Array(i + 1)].forEach(() => {
              this.ships[shipIndex] = {
                  numberDecksAlive: 4 - i,
                  decks: {},
              };

              [...Array(4 - i)].forEach((_, deckIndex) => {
                  this.ships[shipIndex].decks[deckIndex] = {
                      isAlive: true, 
                  };
              });

              shipIndex += 1;
            });
          });
    }
}
