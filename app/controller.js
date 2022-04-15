const dataMapper = require("./model/dataMapper");

const controller = {

    async getPassword(req,res,next){
        const password = await dataMapper.getPassword(req.params.key);

        res.json(password);
    },

    async setPassword(req,res,next){
        await dataMapper.setPassword(req.params.key,req.body.password);
        res.json(true);
    },

    async deletePassword(req,res,next){
        await dataMapper.deletePassword(req.params.key);
        res.json(true);
    }
};

module.exports = controller;