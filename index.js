#!/usr/bin/env node
require('yargs')

// default command
.command(require('./commands/default.js'))

// create and manage a keyword database file
.command(require('./commands/create.js'))
.command(require('./commands/drop.js'))
.command(require('./commands/add.js'))
.command(require('./commands/remove.js'))

// search and weight
.command(require('./commands/search.js'))
.command(require('./commands/weight.js'))

.argv;
