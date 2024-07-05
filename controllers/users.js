const User = require("../models/users");
const bcrypt = require("bcrypt");
const { createAccessToken, errorHandler } = require("../auth");

module.exports.Login = (req, res) => {
     const { email, password } = req.body;

     User.findOne({ email: email })
          .then((result) => {
               console.log(result);
               if (!result) {
                    return res.status(404).send({
                         message: "No email found",
                    });
               } else {
                    if (!email.includes("@")) {
                         return res.status(400).send({ message: "Invalid Email" });
                    }

                    console.log(result.email);
                    console.log(result.password);

                    let isPasswordCorrect = bcrypt.compareSync(password, result.password);
                    if (isPasswordCorrect) {
                         return res.status(200).send({
                              message: "Successfully logged in",
                              access: createAccessToken(result),
                         });
                    }
               }
          })
          .catch((err) => errorHandler(err, req, res));
};

module.exports.Register = (req, res) => {
     const { email, password } = req.body;
     console.log(email);

     User.findOne({ email: email })
          .then((result) => {
               console.log(result);
               if (result) {
                    return res.status(401).send({
                         message: "Email already exist",
                    });
               } else {
                    if (!email.includes("@")) {
                         return res.status(400).send({ message: "Invalid email" });
                    }
                    if (password.length < 8) {
                         return res.status(400).send({ message: "Invalid password" });
                    }

                    let newUser = new User({
                         email: req.body.email,
                         password: bcrypt.hashSync(password, 10),
                    });

                    newUser
                         .save()
                         .then((result) => {
                              console.log(result);
                              return res.status(201).send({ message: "Account successfully created" });
                         })
                         .catch((err) => errorHandler(err, req, res));
               }
          })
          .catch((err) => errorHandler(err, req, res));
};

module.exports.getuser = (req, res) => {
     User.findOne({ email: req.user.email })
          .then((result) => {
               console.log(result);
               if (!result) {
                    return res.status(404).send({
                         message: "User not found",
                    });
               }

               return res.status(200).send({ message: "Found user", result });
          })
          .catch((err) => errorHandler(err, req, res));
};
