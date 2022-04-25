const jwt = require('jsonwebtoken');
const verifytoken = (req, res, next) => {
    const authheader = req.headers.token;
    if (authheader) {
        const token = authheader.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if (err) res.status(403).json('token is not valid');
            req.user = user;
           
            next();

        })

    }
    else {
        res.status(401).json('you are not authenticated');
    }

};
const verifytokenandauthorization = (req, res, next) => {
    verifytoken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json('you are not allowed to do that!');
        }
    })
};
const verifytokenandAdmin = (req, res, next) => {
    verifytoken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            res.status(403).json('you are not allowed to do that!');
        }
    })
}
module.exports = { verifytoken, verifytokenandauthorization ,verifytokenandAdmin};