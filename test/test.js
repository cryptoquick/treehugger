var treehugger = require('../index');
var tree = treehugger.tree;
var traverse = treehugger.traverse;
var parsejs = treehugger.parse;

// example 1
var node = tree.parse('Add(Num("2"), Mul(Num("3"), Num("1")))');
var log = node.collectTopDown("Num(_)").debug();
console.log('example 1', log);

// example 2
function log(message) {
  console.log('example 2', message);
}

function exec() {
  var js = require('./example');
  var analysisJs = require('./analysis');
  var ast = parsejs.parse(js);
  console.log(ast.toPrettyString());
  try {
    console.log(analysisJs(ast));
  } catch(e) {
    console.log("JS Error");
    console.log(e.message);
  }
}

exec();
