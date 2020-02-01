import getEventType from "./getEventType";
import prepareRawCell from "./prepareRawCell";

interface ISkillRequest {
    text: string;
    command: string;
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
                const cell = prepareRawCell(req.command.split(' ').join('').toLowerCase());

                text = 'Мимо ' + cell;
                console.log(text);

                break;
            }
            case "notFound":
                text = 'Я вас не понимаю';

                break;
        }

        return {
            text,
        };
    };

    public static getEventType = getEventType;
}

export {ISkillRequest, ISkillResponse};
export default SeaBattle;
