const mongoose = require("mongoose");

// create a technolgies schema
const techSchema = new mongoose.Schema({
     toolsAndTech: {
          tools: [{ type: String, required: [true, "item is required"] }],
          tech: [{ type: String, required: [true, "item is required"] }],
     },
});

module.exports = mongoose.model("Technologies", techSchema);
