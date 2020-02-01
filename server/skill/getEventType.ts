
export type EventType = 'welcome' | 'info' | 'start' | 'sank' | 'shoot' | 'notFound' | 'hit' | 'past' | 'stats' | 'step' | 'notFoundQuestion';

const map: { [key: string]: EventType } = {
    'узнать': 'info',
    'инфо': 'info',
    'информация': 'info',
    'помощь': 'info',
    'помоги': 'info',

    '': 'welcome',

    'начать': 'start',
    'старт': 'start',
    'поехали': 'start',
    'дадавайсыграем': 'start',

    'подбит': 'hit',
    'попала': 'hit',
    'ранен': 'hit',

    'мимо': 'past',
    'промазал': 'past',

    'статистика': 'stats',

    'ктоходит': 'step',
    'чейход': 'step',

    'тыменяпонимаешь': 'notFoundQuestion',
};

function getEventType(text: string, cell: string): EventType {
    if (/[a-j][0-9]/.test(cell)) {
        return 'shoot';
    } else {
        return map[text.toLowerCase().split(' ').join('')] || 'notFound';
    }
}

export default getEventType;
