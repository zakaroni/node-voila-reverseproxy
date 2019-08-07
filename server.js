// const app = require('express')();

// server connections
const express = require('express');
const proxy = require('express-http-proxy');
const request = require('request');

// port for voila instances
const port = 8844;
// for spawning new processes in windows shell
const spawn = require("child_process").spawn;
// const cmd = require('node-cmd');


// proxy new connections
const app = express();
// app.use('/voila/\*', newVoilaUser());
app.use('/voila/\*', () => {
    var instanceNum = getNewInstanceID();
    spawnVoilaInstance(instanceNum)
    proxy('http://localhost:8844/voila')
});

function getNewInstanceID() {
    // get number of instances
    const fs = require('fs');
    let rawData = fs.readFileSync('data.json');
    let dataObj = JSON.parse(rawData);

    if (typeof(dataObj.instances) == int) {
        // increase number of instances by one
        fs.writeFileSync('');
        // Return the new number
        return dataObj.instances + 1;
    }

}

function spawnVoilaInstance() {
    var voilaInstance = spawn('voila', ['"C:\Sites\Notebooks"']) 
}