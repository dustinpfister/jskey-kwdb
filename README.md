# jskey-kwdb

A keyword database management tool that is a major part of my jskey set of CLI tools. The aim of jskey-kwdb is to have a CLI tool that just manages things like creating, droping, and managing records for targeted organic search keywords. 

The tool can also be used to create indexes for each search term in relation to markdown files of blog posts. It can also be used to create performance
reports for posts as well. The rankings are determined by a search algorithm some of which are built in, but custom ones can be added as well on a per project basis.

## Create a new database

Use the create sub command to create a new database

```
$ mkdir _kwdb
$ cd _kwdb
$ jskey-kwdb create -t db.json
```

## Add and remove keywords

The add and remove sub commands can be used to add and remove keywords from the database

```
$ jskey-kwdb add -t db.json -k "lodash find"
$ jskey-kwdb remove -t db.json -k "lodash find"
```

## Drop

There is a drop command to drop (delete) the database

```
$ jskey-kwdb drop -t db.json
```

## Search

As of this writing the search command can be used to just search for a keyword in the keyword database.

```
$ jskey-kwdb search -t db.json -k "lodash find"
```

## Weight command

The weight command can be used to compute a weight value for a body of text that is given via the standard input. There is a number of built in weight functions, but it would be best to write your own and use it via the -s option when using the weight command.

When making a weight function the first argument is the body of text, and the second is the keyword or search term of interest.

Say I have a file called weight.js that looks like this

```js
module.exports = (text, keyword) => {
    
    let weight = 0,
    totalMatch = text.match(new RegExp(keyword, 'g'));
    
    // how does one or more total Match counts effect weight?
    if(totalMatch){
       weight += totalMatch.length;
    }
    
    return weight;
    
};
```
Text can then be piped to it in the command line, and a value will be returned that is the weight value for that text based on the given weight function.

```
echo "foo bar baz foo" | jskey-kwdb weight -k "foo" -s weight.js
2
```
