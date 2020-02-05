"use strict"

import Bar from './modules/bar.es6.js';

class Foo {
  constructor(grammar) {
    console.log('Foo time!');
  }
}

var foo = new Foo()
var bar = new Bar()