export function FuncLogger(req, res, next) {
  console.log(`Request... 函数式中间件`);
  next();
}
