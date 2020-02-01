interface IDialogParams {
    message: string;
    version: string;
    session: string;
}

function prepareResponse(params: IDialogParams) {
    return {
        version: params.version,
        session: params.session,
        response: {
            // В свойстве response.text возвращается исходная реплика пользователя.
            // Если навык был активирован без дополнительной команды,
            // пользователю нужно сказать "Hello!".
            // text: request.original_utterance || 'Hello!',
            text: params.message,

            // Свойство response.end_session возвращается со значением false,
            // чтобы диалог не завершался.
            end_session: false,
        },
    }
}

export default prepareResponse;
