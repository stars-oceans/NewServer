const JWT = require("./util/JWT");

const token = JWT.generate({name : 'yhc'}, '10s')

console.log(JWT.verify(token));

setTimeout(() => {
console.log(JWT.verify(token));
}, 9000);

setTimeout(() => {
  console.log(JWT.verify(token));
  }, 11000);
  
