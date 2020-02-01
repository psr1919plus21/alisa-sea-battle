const https = require('https');
const { json } = require('micro');
const axios = require('axios');
const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const port = 3000;

app.get('/', (req, res) => {
    console.log('app.get("/")');
    res.send('Hello World!')
});

app.post('/hook', (req, res) => {
    console.log('app.post("/hook" )');
    console.log('req: ', req);
    res.send('hook test')
});


app.post('/', async (req, res) => {
    console.log(req.body);

    const { request, session, version } = req.body;
    console.log(request, session, version);
    const requestText = request.original_utterance;

    if (requestText === '' || requestText === 'что ты умеешь') {
        message = 'Я могу сыграть с вами в морской бой, хотите узнать правила или начать игру?';
    } else {
        const question = await axios.get('https://engine.lifeis.porn/api/millionaire.php?q=2');
        message = question.data.data.question;
    }

    responseWith(message, version, session, res);
});

function responseWith(message, version, session, res) {
	console.log('res with');
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

var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: '1234'
  };

https.createServer(options, app).listen(3000, () => console.log(`Example app listening on port ${port}!\nhttp://localhost:${port}`));