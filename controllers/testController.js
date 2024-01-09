const { default: mongoose } = require("mongoose");


async function testPostController(req, res){
    const { name} = req.body;
    
    res.status(200).send(`Your Name is ${name}`,);
  };

module.exports = testPostController;