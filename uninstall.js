var fs = require('fs'),
    file = __dirname + '/package.json',
    exec = require('child_process').exec;

fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        console.log('Error: ' + err);
        return;
    }

    var packages = Object.keys(JSON.parse(data).devDependencies).join(' '),
        child = exec('npm uninstall ' + packages);

    child.stdout.on('data', function (data) {
        console.log(data);
    });
});