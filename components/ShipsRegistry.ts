import Field from './field/Field';

interface IDeck {
    isAlive: boolean,
}

interface IShip {
    numberDecksAlive: number;
    decks: {
        [key: string]: IDeck,
    }
}

const placedShips = {
    0: {
        numberDecksAlive: 4,
        decks: {
            e4: {
                isAlive: true
            },
            f4: {
                isAlive: true
            },
            g4: {
                isAlive: true
            },
            h4: {
                isAlive: true
            }
        }
    },
    1: {
        numberDecksAlive: 3,
        decks: {
            a2: {
                isAlive: true
            },
            a3: {
                isAlive: true
            },
            a4: {
                isAlive: true
            }
        }
    },
    2: {
        numberDecksAlive: 3,
        decks: {
            a9: {
                isAlive: true
            },
            b9: {
                isAlive: true
            },
            c9: {
                isAlive: true
            }
        }
    },
    3: {
        numberDecksAlive: 2,
        decks: {
            f8: {
                isAlive: true
            },
            g8: {
                isAlive: true
            }
        }
    },
    4: {
        numberDecksAlive: 2,
        decks: {
            c1: {
                isAlive: true
            },
            d1: {
                isAlive: true
            }
        }
    },
    5: {
        numberDecksAlive: 2,
        decks: {
            i7: {
                isAlive: true
            },
            i8: {
                isAlive: true
            }
        }
    },
    6: {
        numberDecksAlive: 1,
        decks: {
            g2: {
                isAlive: true
            }
        }
    },
    7: {
        numberDecksAlive: 1,
        decks: {
            j1: {
                isAlive: true
            }
        }
    },
    8: {
        numberDecksAlive: 1,
        decks: {
            j3: {
                isAlive: true
            }
        }
    },
    9: {
        numberDecksAlive: 1,
        decks: {
            d6: {
                isAlive: true
            }
        }
    }
}

const MAX_SHIP_LENGTH = 4;

export default class ShipsRegistry {
    public numberShipsAlive: number;
    public ships: {
        [key: string]: IShip,
    };
    constructor(field: Field) {
        let shipIndex = 0;
        this.numberShipsAlive = 10;
        this.ships = { ...placedShips };

        for (let shipId in this.ships) {
            for (let coords in this.ships[shipId].decks) {
                field.map[coords].shipId = shipId;
            }
        }
    }

    public attack(shipId: string, cellId: string): 'loose' | 'sank' | 'hit' | 'hitted' | 'sanked' {
        if (this.ships[shipId].decks[cellId].isAlive) {
            this.ships[shipId].decks[cellId].isAlive = false;
            this.ships[shipId].numberDecksAlive -= 1;

            if (this.ships[shipId].numberDecksAlive === 0) {
                this.numberShipsAlive -= 1;

                if (this.numberShipsAlive === 0) {
                    return 'loose';
                }

                return 'sank';
            }

            return 'hit';
        }

        return this.ships[shipId].numberDecksAlive > 0 ? 'hitted' : 'sanked';
    }
}
