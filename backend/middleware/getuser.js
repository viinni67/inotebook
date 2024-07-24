const jwt = require('jsonwebtoken');
const Notes = require('../models/Notes');
const user = require('../models/User');

const getuser = async (req, res, next) => {
    const atoken = req.header('auth-token');
    if (!atoken) {
        res.status(401).send({ error: "access denied" }
        )
    }
    try {
        const data =  jwt.verify(atoken, 'berserk_gym_motivation');
        // console.log(data.user.id);
        const User = await user.findById(data.user.id);
        // console.log(User);
        if (User) {
            req.user = data.user;
           return next();
        }
        res.status(401).send({ error: "Please provide a valid token" });

    } catch (error) {
        res.status(401);

    }

}
module.exports = getuser;