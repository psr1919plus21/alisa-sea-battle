import getEventType from "./getEventType";
import normalizeCell from "./normalizeCell";
import ShipsRegistry from "../../components/ShipsRegistry";
import Field from "../../components/field/Field";

interface ISkillRequest {
    text: string;
    command: string;
}

interface ISkillResponse {
    text: string;
}

class SeaBattle {
    public isPlayerStep = true;
    public lastAttackCell = '';
    public playerField: Field;
    public alisaField: Field;
    public playerShips: ShipsRegistry;
    public alisaShips: ShipsRegistry;

    constructor() {
        this.playerField = new Field();
        this.alisaField = new Field();

        this.playerShips = new ShipsRegistry(this.playerField);
        this.alisaShips = new ShipsRegistry(this.alisaField);
    }

    public getResponseFor = (req: ISkillRequest): ISkillResponse => {
        const cellId = normalizeCell(req.command) as keyof Field;
        const type = getEventType(req.text, cellId);
        console.log('type', type);
        console.log('cell', cellId);
        let text = '';

        if (!this.isPlayerStep && ['hit', 'past'].indexOf(type) === -1) {

            text = `Скажите попала ли я, ${this.lastAttackCell}`;

            return {
                text,
            };
        }

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

            // Человек стреляет в Алису
            case 'shoot': {
                const cell = this.alisaField.map[cellId];

                // Пустая клетка
                if (!cell.isPristine) {
                    text = 'Уже была атакована';
                } else if (!cell.shipId) {
                    cell.isPristine = false;
                    this.isPlayerStep = false;

                    const alisaTarget = 'a2';
                    text = `Мимо, моя очередь, стреляю в ${alisaTarget}`;


                } else {
                    // клетка с кораблем
                    const attackResult = this.alisaShips.attack(cell.shipId, cellId);

                    if (attackResult === 'hit') {
                        text = 'Подбита палуба корабля'

                    } else if (attackResult === 'sank') {
                        text = 'Поздравляю, шарик, ты потопил мой корабль'
                    }
                }
                break;
            }

            case "hit":
                text = 'Ура, мне сегодня везет';

                this.isPlayerStep = true;

                break;
            case "past":
                text = 'очень жаль, по данным моей разведки там должен быть корабль';
                this.isPlayerStep = true;

                break;
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
