#!/usr/bin/env node
require('yargs')
.command(require('./commands/default.js'))
.command(require('./commands/create.js'))
.command(require('./commands/add.js'))
.command(require('./commands/drop.js'))
.argv;
