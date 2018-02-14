var config=require("./config.json");//由于webpack3.*/webpack2.*已经内置可处理JSON文件，这里我们无需再添加webpack1.*需要的json-loader
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.greeter;
  return greet;
};
