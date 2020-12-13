const jwt = require('jsonwebtoken');

// if the JWT secret is ever compromised, you'll need to generate a new one, immediatly invalidating all current tokens.
// because the secret is so important, you should store it somewhere other than in a javascript file - like a environment variable
const secret = 'mysecretsshhhhhh';
const expiration = '2h';

// "singleToken" expects a user object and will add that user's username, email, and _id properties to the token
// Optionally, tokens can be given an expiration data and a secret to sign the token with.
// note that the secreat has nothing to do with encoding.
// the secret merely enables the server to verify whether it recognizes this token
module.exports = {
    singleToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },


    // this is where the secret becomes important. If the secret on "jwt.verify()" does not match the secret that was used with jwt.sign() - 
    // the object won't be decoded; When the JWT verification fails, an error is thrown.
    // Users with an invalid token should still be able to request and see all thoughts.
    // Thus we wrapped the "verify()" method in a "try...catch" statement to mute the error.
    // We'll manually throw an authentiaction error on the resolver side when the need araises
    authMiddleWare: function({ req }) {
        // allows token to be via req.bodyf, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // separate "Bearer" from <tokenvalue>
        if (req.headers.authorization) {
            token = token
            .split(' ')
            .pop()
            .trim();
        }

        // if no token, return request object as is
        if (!token) {
            return req;
        }

        try {
            // decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // return updated request object
        return req;
    }
};