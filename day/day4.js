/**
 * LHS：赋值操作的目标是谁
 * RHS：谁是赋值操作的源头
 * js中的作用域是一套规则，用于确定在何处以及如何查找变量（标识符）。如果查找的目的是怼变量
 * 进行赋值，那么就会使用LHS查询；
 * 如果查找的目的是获取变量的值，就会使用RHS查询。
 * 赋值操作符会导致LHS查询。=操作符或调用函数时传入参数的错作都会导致关联作用域的赋值操作。
 * 如果说RHS查询在所有嵌套的作用域中遍寻不到所需变量，引擎就会抛出ReferenceError异常。
 * 当引擎执行LHS查询时，如果在顶层（全局作用域）中也无法找到目标变量，全局作用域就会创建一个具有
 * 该名称的变量，并将其返还给引擎，前提是程序运行在非“严格模式”下。
*/


function foo(a) {
  console.warn(a + b);                               
  b = a;
  var b = 7;
}