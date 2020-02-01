type EventType = 'welcome' |'info' | 'start' | 'shoot';

const map: { [key: string]: EventType } = {
    'узнать': 'info',
    'привет': 'welcome',
    'начать': 'start',
};

function getEventType(text: string): EventType {
    return map[text] || 'info';
}

export default getEventType;
