const MyModule = require('./my-module');
const helloString = require('./hello-string');
const functionMod = require('./my-function-module');
const myAxios = require('./my-axios');

let newModule = new MyModule();

newModule.demoFunction();
console.log(helloString);
functionMod();
myAxios.get('localhost:8001');
console.log(myAxios.myString);
