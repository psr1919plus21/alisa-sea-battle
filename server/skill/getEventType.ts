type EventType = 'welcome' |'info' | 'start' | 'shoot' | 'notFound';

const map: { [key: string]: EventType } = {
    'узнать': 'info',
    'привет': 'welcome',
    'начать': 'start',
};

function getEventType(text: string, cell: string): EventType {
    if (/[a-j][0-9]/.test(cell)) {
        return 'shoot';
    } else {
        return map[text] || 'notFound';
    }
}

export default getEventType;
