const Tech = require("../models/technologies");
const { errHandler } = require("../auth");

// get technologies on mongo DB
module.exports.getTechs = (req, res) => {
     // find all technologies that is on the databse
     Tech.find({})
          .then((result) => {
               console.log(result);
               if (!result) {
                    return res.status(400).send({ message: "no projects found" });
               } else {
                    return res.status(200).send({
                         message: "found items",
                         result: result,
                    });
               }
          })
          //   catch the error
          .catch((err) => errHandler(err, req, res));
};

// module.exports.addfront = (req, res) => {};
// module.exports.addback = (req, res) => {};
// module.exports.addfull = (req, res) => {};
// module.exports.addtech = (req, res) => {};
// module.exports.addtools = (req, res) => {};
