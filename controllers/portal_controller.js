
async function testportcontroller(req,res){
    const name = req.body;
    res.status(200).send(`yur name is ${name}`);
}

module.exports = {testportcontroller}