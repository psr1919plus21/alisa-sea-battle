const axios = require('axios');

const server = {
    getQuestion: function() {
        return axios.get('https://engine.lifeis.porn/api/millionaire.php?q=2');
    }
};

async function run() {
    const result = await server.getQuestion();
    console.log('result: ', result.data.data.question);
}

run();