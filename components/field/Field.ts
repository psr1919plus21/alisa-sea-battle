interface ICell {
    isPristine: boolean,
    shipId: string | null,
}

interface FieldMap {
    [key: string]: ICell,
}

const numbers = [1,2,3,4,5,6,7,8,9, 10];
const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

export default class Field {
    public map: FieldMap;

    constructor() {
        const generatedMap: FieldMap = {};

        for(const char of characters) {
            for(const number of numbers) {
                generatedMap[char + number] = { isPristine: true, shipId: null };
            }
        }

        this.map = generatedMap;
    }

    public isPristine = (key: string) => {
        return this.map[key].isPristine;
    };

    public setPristined = (key: string) => {
        this.map[key].isPristine = true;
    };
}
