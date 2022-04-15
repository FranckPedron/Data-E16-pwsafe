const redisClient = require("./dbClient");

const dataMapper = {

    /**
     * Get password from key 
     * @param {*} key 
     */
    async getPassword(key){
        return await redisClient.get(key);
    },

    /**
     * Set key/password 
     * @param {*} key 
     * @param {*} password 
     */
    async setPassword(key,password){
        return await redisClient.set(key,password);
    }
};

module.exports = dataMapper;