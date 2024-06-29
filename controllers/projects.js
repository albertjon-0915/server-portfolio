const Proj = require("../models/projects");
const { errHandler } = require("../auth");

// get projects on mongo DB
module.exports.getProjects = (req, res) => {
     // find all projects that is on the databse
     Proj.find({})
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
