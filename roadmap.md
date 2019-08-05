## 0.1.x - Alpha II - lowdb and search command
  * (done) adding lowdb to package.json
  * (done) with the create command changed -t option to be a target file path rather than just a target folder
  * (done) /lib/mkdirp.js is no longer used in create command for now.
  * using lowdb to create a database
  * using lowdb to add and remove database items
  * new search command
  * search command uses lodb to to get a single keyword for exact match for a search term
  * search command uses lodb to get and sort a list of keywords for a search term

## 0.0.13 - Alpha I - first release
  * (done) create command for creating a new main db.json file in a keywords folder
  * (done) create command creats a new _kwdb folder if it is not there
  * (done) drop command can drop a database file
  * (done) add command adds keywords into the db.json file
  * (done) remove command can remove keywords from db.json

