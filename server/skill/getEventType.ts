type EventType = 'welcome' | 'info' | 'start' | 'shoot' | 'notFound' | 'hit' | 'past' ;

const map: { [key: string]: EventType } = {
    'узнать': 'info',
    '': 'welcome',
    'начать': 'start',
    'подбит': 'hit',
    'ранен': 'hit',
    'мимо': 'past',
};

function getEventType(text: string, cell: string): EventType {
    if (/[a-j][0-9]/.test(cell)) {
        return 'shoot';
    } else {
        return map[text.toLowerCase()] || 'notFound';
    }
}

export default getEventType;
