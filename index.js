// Для асинхронной работы используется пакет micro.
const { json } = require('micro');
const axios = require('axios');

// Запуск асинхронного сервиса.
module.exports = async (req, res) => {
    const { request, session, version } = await json(req);
    const requestText = request.original_utterance;
    
    if (requestText === 'помощь' || requestText === 'что ты умеешь') {
        message = 'Я могу сыграть с вами в морской бой, хотите узнать правила или начать игру?';
    } else {
        const question = await axios.get('https://engine.lifeis.porn/api/millionaire.php?q=2');
        message = question.data.data.question;
    }
    
    responseWith(message, version, session, res);
};

function responseWith(message, version, session, res) {
    res.end(JSON.stringify(
        {
            version,
            session,
            response: {
                // В свойстве response.text возвращается исходная реплика пользователя.
                // Если навык был активирован без дополнительной команды,
                // пользователю нужно сказать "Hello!".
                // text: request.original_utterance || 'Hello!',
                text: message,
                buttons: [
                    {
                        title: 'This is button',
                        url: 'https://yandex.ru/search/?text=jntkb&clid=1955453&win=409&lr=146'
                    },
                    {
                        title: 'Отели',
                        url: 'https://yandex.ru/search/?text=jntkb&clid=1955453&win=409&lr=146'
                    }
                ],

                // Свойство response.end_session возвращается со значением false,
                // чтобы диалог не завершался.
                end_session: false,
            },
        }
    ));
}