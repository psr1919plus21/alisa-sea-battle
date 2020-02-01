import {ISkillRequest} from "../skill/SeaBattle";

interface IDialogRequest {
    text: string;
    command: string;
}

function prepareRequest(params: IDialogRequest): ISkillRequest {
    return {
        text: params.text,
        command: params.command,
    };
}

export {IDialogRequest};
export default prepareRequest;
