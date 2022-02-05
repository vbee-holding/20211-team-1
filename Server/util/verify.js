const jwt = require('jsonwebtoken')
class Verify  {
    verify = (req, res, next ) => {
        const { authorization } = req.headers;
        if( authorization ) {
            const token = authorization.split(' ')[1];
            jwt.verify(token, 'mySecretKey', (err, admin) => {
                if(err) {
                    res.status(401).json('Token is not valid');
                }
                else {
                    next();
                }
            })
        }
        else {
            res.status(401).json('you are not authenticate');
        }
        
    }

}

module.exports = new Verify();