const exec = require('child_process').exec;

function updateRepo() {
    console.log('\n\n\n', 'sh ' + __dirname + '/updateRepo.sh', '\n\n\n');;
    exec('sh ' + __dirname + '/updateRepo.sh',
    (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
};

module.exports = updateRepo;
