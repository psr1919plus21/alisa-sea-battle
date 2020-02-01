import {EventType} from "../../server/skill/getEventType";
// interface dbType {
//     [key: string]: any
// }
// const infoDB = ['Это морской бой с Алисой', 'Морской бой.Алиса', 'Древнейшая стратегия с корабликами']
// const welcomeDB = ['Это морской бой с Алисой', 'Морской бой.Алиса', 'Древнейшая стратегия с корабликами']

// class speechGen {
//     public gen: dbType;
//     constructor() {
//         function beta() {
//             let randomInfo = Math.round(Math.random() * 2);
//             return { info: infoDB[randomInfo] }
//         }
//         console.log(beta())
//     }
// }


const map: {[k in EventType]: string[]} = {
    info: ['Это морской бой с Алисой', 'Морской бой. Алиса', 'Домашняя стратегия с корабликами'],
    welcome: ['Привет, хотите поиграть в Морской Бой?','Свистать всех наверх! Мы играем в кораблики', 'Хватит есть шпроты!Пошли играть в Морской бой'],
    start:['Я расставила корабли, начинайте','Ты еще не ушел? Ну тогда стартуй!','Начинай пожалуйста, мне скучно'],
    shoot:['Мимо',],
    notFound:[]
}

export default function speechGen(type: EventType) {
    const arr = map[type];
        let randomGen = Math.round(Math.random() * arr.length);
        return map[type][randomGen];
}

