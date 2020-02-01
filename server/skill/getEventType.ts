type EventType = 'welcome' |'info' | 'start' | 'shoot' | 'notFound';

const map: { [key: string]: EventType } = {
    'узнать': 'info',
    'привет': 'welcome',
    'начать': 'start',
};

function getEventType(text: string): EventType {
    if (/[a-z][0-9]/.test(text)) {
        return 'shoot';
    } else {
        return map[text] || 'notFound';
    }
}

export default getEventType;
