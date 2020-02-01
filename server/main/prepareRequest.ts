import {ISkillRequest} from "../skill/SeaBattle";

interface IDialogRequest {
    text: string;
}

function prepareRequest(params: IDialogRequest): ISkillRequest {
    return {
        text: params.text,
    };
}

export {IDialogRequest};
export default prepareRequest;
