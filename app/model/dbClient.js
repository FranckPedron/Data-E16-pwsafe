const redis = require("redis");

const client = redis.createClient({
    prefix:"pwsafe:" // permet de préfixer toutes les clefs avec pwsafe:
});

client.connect();

module.exports = client;