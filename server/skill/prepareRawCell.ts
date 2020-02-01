const map: { [key: string]: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'j' } = {
    'а': 'a',
    'б': 'b',
    'в': 'c',
    'г': 'd',
    'д': 'e',
    'ж': 'f',
    'жэ': 'f',
    'з': 'j',
    'е': 'j',
};

function prepareRawCell(cell: string): string {
    return map[cell] || cell;
}

export default prepareRawCell;
