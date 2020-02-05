# Base template for browseify node apps to javascript for ES5 and ES6

### Introduction
This project contains the basic code to create a template node project and convert it to javascript.

This idea came from the answer to this [stackoverflow post](https://stackoverflow.com/questions/41043032/browserify-parseerror-import-and-export-may-appear-only-with-sourcetype), then all the credits to them.

### Project Structure

 - build: contains makefile and dockerfile
 - src: working directory
 - src/app: the application code as node perspective
 - src/app/modules: contains node modules
 - src/dist: were is generated the output

### Installation
The minimal version of node used is node:11.7.0-alpine 

There is a docker image that creates the output:
```bash
cd build
sudo make build
```

Installation:
```bash
cd build
sudo make install
```

Generate dist:
```bash
cd build
make browserify
```


