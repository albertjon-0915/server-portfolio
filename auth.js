const jwt = require("jsonwebtoken");
require("dotenv").config();

// create an access token
module.exports.createAccessToken = (user) => {
     const data = {
          id: user._id,
          email: user.email,
          isAdmin: user.isAdmin,
     };

     return jwt.sign(data, process.env.KWT_SECRET_KEY);
};

// verify user
module.exports.verify = (req, res, next) => {
     let token = req.headers.authorization;

     if (typeof token === undefined) {
          return res.send({ auth: "failed no token" });
     } else {
          token = token.slice(7, token.length);

          jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
               if (err) {
                    return res.send({ auth: "failed", message: err.message });
               } else {
                    console.log("Result from verify: ", decodedToken);

                    req.user = decodedToken;
                    next();
               }
          });
     }
};

// verify is user is admin
module.exports.verifyAdmin = (req, res, next) => {
     if (req.user.isAdmin) {
          next();
     } else {
          return res.status(403).send({ auth: "failed", message: "action forbidden" });
     }
};

// error handler
module.exports.errorHandler = (err, req, res) => {
     let statusCode = err.status || 500;
     let errMsg = err.message || "internal service error";

     res.status(statusCode).send({
          error: {
               message: errMsg,
               errorCode: err.code || "server error",
               details: err.details || null,
          },
     });
};
