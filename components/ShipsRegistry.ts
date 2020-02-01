interface IDeck {
    isAlive: boolean,
}

interface IShip {
    numberDecksAlive: number;
    decks: {
        [key: string]: IDeck,
    }
}

const MAX_SHIP_LENGTH = 4;

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
                  numberDecksAlive: MAX_SHIP_LENGTH - i,
                  decks: {},
              };

              [...Array(MAX_SHIP_LENGTH - i)].forEach((_, deckIndex) => {
                  this.ships[shipIndex].decks[`a${deckIndex}`] = {
                      isAlive: true, 
                  };
              });

              shipIndex += 1;
            });
          });
    }

    public attack(id: number, coords: string) {
        const makeResponse = (response) => ({
            ship: id,
            coords: coords,
            response
        });

        if (this.ships[id].decks[coords].isAlive) {
            this.ships[id].decks[coords].isAlive = false;
            this.ships[id].numberDecksAlive -= 1;

            if (this.ships[id].numberDecksAlive === 0) {
                this.ships.numberShipsAlive -= 1;

                if (this.ships.numberShipsAlive === 0) {
                    return makeResponse('loose');
                }

                return makeResponse('sank');
            }

            return makeResponse('hit');
        }

        return makeResponse(this.ships[id].numberDecksAlive > 0 ? 'hitted' : 'sanked');
    }
}
