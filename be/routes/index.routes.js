const router = require("express").Router();
const fs = require("fs");
const routes = __dirname;

fs.readdirSync(routes).forEach(item =>{
    console.log(item);
    let name = item.split(".")[0];
    if(name !== "index"){
        router.use(`/${name}`,require(`./${name}`));
    }
    
});



module.exports = router;