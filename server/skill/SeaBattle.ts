import getEventType from "./getEventType";

interface ISkillRequest {
    text: string;
}

interface ISkillResponse {
    text: string;
}

class SeaBattle {
    public playerField: any;
    public botField: any;
    public destroyedPlayerShips: number;
    public destroyedBotShips: number;

    public getResponseFor = (req: ISkillRequest): ISkillResponse => {
        const type = getEventType(req.text);
        let text = '';

        switch (type) {
            case 'welcome': {
                text = 'Привет, хотите поиграть в морской бой?';

                break;
            }
            case 'info': {
                text = 'Это морской бой с Алисой';

                break;
            }
            case 'start': {
                text = 'Я расставила корабли, стреляйте';

                break;
            }
            case 'shoot': {
                const cell = 'a1'; // как-то определяем ячейку

                text = 'Мимо';

                break;
            }
        }

        return {
            text,
        };
    };

    public static getEventType = getEventType;
}

export {ISkillRequest, ISkillResponse};
export default SeaBattle;
