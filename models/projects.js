const mongoose = require("mongoose");

// create a projects schema for mongo DB
const projSchema = new mongoose.Schema({
     projects: {
          frontend: [
               {
                    title: { type: String, required: [true, "title is required"] },
                    subtitle: { type: String, required: [true, "subtitle is required"] },
                    description: { type: String, required: [true, "desciption is required"] },
                    link: { type: String, required: [true, "link is required"] },
                    imageString: { type: String, required: [true, "imageString is required"] },
               },
          ],
          backend: [
               {
                    title: { type: String, required: [true, "title is required"] },
                    subtitle: { type: String, required: [true, "subtitle is required"] },
                    description: { type: String, required: [true, "desciption is required"] },
                    link: { type: String, required: [true, "link is required"] },
                    imageString: { type: String, required: [true, "imageString is required"] },
               },
          ],
          fullstack: [
               {
                    title: { type: String, required: [true, "title is required"] },
                    subtitle: { type: String, required: [true, "subtitle is required"] },
                    description: { type: String, required: [true, "desciption is required"] },
                    link: { type: String, required: [true, "link is required"] },
                    imageString: { type: String, required: [true, "imageString is required"] },
               },
          ],
     },
});

module.exports = mongoose.model("Project", projSchema);
