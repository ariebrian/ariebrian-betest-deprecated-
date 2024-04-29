const userModel = require('../model/user');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const redis = require('redis');
const client = redis.createClient();


module.exports = {
    getByAccountNumber: function(req, res, next) {
        console.log(req.body);
        const cacheKey = `user_${id}`;
        client.get(cacheKey, async (err, user) => {
            if (user) {
              // User found in cache
              res.json(JSON.parse(user));
            } else {
              // User not found in cache, query database
              const result = await userModel.find({'accountNumber': req.params.accountNumber});
              if (result) {
                // User found in database, add to cache
                client.set(cacheKey, JSON.stringify(result));
                res.json(result);
              } else {
                res.status(404).json({ message: 'User not found' });
              }
            }
          });
     },
     getByIdentityNumber: function(req, res, next) {
        console.log(req.body);
        const cacheKey = `user_${id}`;
        client.get(cacheKey, async (err, user) => {
            if (user) {
              // User found in cache
              res.json(JSON.parse(user));
            } else {
              // User not found in cache, query database
              const result = await userModel.find({'identityNumber': req.params.identityNumber});
              if (result) {
                // User found in database, add to cache
                client.set(cacheKey, JSON.stringify(result));
                res.json(result);
              } else {
                res.status(404).json({ message: 'User not found' });
              }
            }
          });
     },
}