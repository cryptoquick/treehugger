var declared = {console: true};

module.exports = function (ast) {
  ast.traverseTopDown(
     'VarDecl(x)', function(b) {
        declared[b.x.value] = true;
     },
     'VarDeclInit(x, _)', function(b) {
        declared[b.x.value] = true;
     },
     'Var(x)', function(b) {
        if(!declared[b.x.value])
          console.log("Variable " + b.x.value + " is not declared.");
     }
  );

  return declared;
};
