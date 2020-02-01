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

function normalizeCell(rawCell: string): string {
    const cell = rawCell.split(' ').join('').toLowerCase();
    const char = cell.slice(0, 1);

    return (map[char] || char) + cell.slice(1) || cell;
}

export default normalizeCell;
