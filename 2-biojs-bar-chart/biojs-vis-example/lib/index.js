/*
 * biojs-vis-example
 * https://github.com/jj/biojs-vis-example
 *
 * Copyright (c) 2016 yourname
 * Licensed under the Apache-2.0 license.
 */

/**
@class biojsvisexample
 */


var  biojsvisexample;
var Barchart = require("./barchart.js");
module.exports = biojsvisexample = function(opts){
  var bc = new Barchart(opts);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojsvisexample.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojsvisexample.hello = function (name) {

  return 'hello ' + name;
};



