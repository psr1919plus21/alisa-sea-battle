const exec = require('child_process').exec;

function updateRepo() {
    exec('sh .' + __dirname + 'shell/updateRepo.sh',
    (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
};

module.exports = updateRepo;
