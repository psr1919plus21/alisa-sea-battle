type EventType = 'welcome' |'info' | 'start' | 'shoot' | 'alisa_hit' | 'alisa_miss' | 'alisa_kill';

const map: { [key: string]: EventType } = {
    'узнать': 'info',
    'привет': 'welcome',
    'начать': 'start',
    'попала': 'alisa_hit',
    'убила': 'alisa_kill',
    'мимо': 'alisa_miss'
};

function getEventType(text: string): EventType {
    return map[text] || 'info';
}

export default getEventType;
