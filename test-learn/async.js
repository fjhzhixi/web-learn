const fs = require("mz/fs");

module.exports = async() => {
    let expression = await fs.readFile("./data.txt", 'utf-8');
    let fn = new Function("return " + expression);
    var r = fn();
    return r;
};
