## 0.3.x - Alpha IV - Building a rank list for the dataBase
  * weight command should work with the -t option where a database is given
  * when given the -t option the weight command will create a weight value for each keyword in the database
  * The weight command still just spits out results to the standard output
  * The weight command updates the keyword database with a list of posts that rank well for it
  * the limit of posts that will be stored for a keyword is limited by a hard coded default of 5
  * the default limit of posts can be set higher or lower with a dataBase property postLimit

## 0.2.10 - Alpha III - weight command
  * (done) new weight command
  * (done) in post command a blog post body text can be given to jskey-kwdb via the standard input
  * (done) a script can be given via the -s option that will be used to create a weight value for
  each keyword in the database or a built in one will be used.
  * (done) the weight command creates a weight value for the body of text based on the given script
  * (done) make mkdirp part of the stack
  * (done) use mkdirp to create target path for new databse in create command
  * (done) remove my own mkdirp lib

## 0.1.15 - Alpha II - lowdb and search command started
  * (done) adding lowdb to package.json
  * (done) with the create command changed -t option to be a target file path rather than just a target folder
  * (done) /lib/mkdirp.js is no longer used in create command for now.
  * (done) using lowdb to create a database
  * (done) using lowdb to add and remove database items
  * (done) new search command started
  * (done) search command uses lodb to to get a single keyword for exact match for a search term

## 0.0.13 - Alpha I - first release
  * (done) create command for creating a new main db.json file in a keywords folder
  * (done) create command creats a new _kwdb folder if it is not there
  * (done) drop command can drop a database file
  * (done) add command adds keywords into the db.json file
  * (done) remove command can remove keywords from db.json

