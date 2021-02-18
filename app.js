#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const targetDir = process.argv[2] || process.cwd();
const path = require('path');
const {lstat} = fs.promises;

fs.readdir(targetDir, async (err, fileNames) => {
    if (err) {
        console.log(err);
    }
    const statPromises = fileNames.map(fileName => {
        return lstat(path.join(targetDir, fileName));
    });


    const allStats = await Promise.all(statPromises);

    
    for (let stats of allStats) {
        const index = allStats.indexOf(stats);
        if (stats.isFile()) {
            console.log(fileNames[index]);
        } else {
            console.log(chalk.bold(fileNames[index]));
        }
    }
});
