interface FieldMap {
    [key: string]: any
}

const numbers = [1,2,3,4,5,6,7,8,9, 10];
const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

class Field {
    public map: FieldMap;
    
    constructor() {
        const generatedMap: FieldMap = {};

        for(const char of characters) {
            for(const number of numbers) {
                generatedMap[char + number] = { isPristine: false, sheepId: null };
            }
        }

        this.map = generatedMap;
    }

    public isPristine =(key: string) => {
       return this.map[key].isPristine;
    }
}
