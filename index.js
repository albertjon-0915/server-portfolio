const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const projRoutes = require("./routes/projects");
const userRoutes = require("./routes/users");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors security
const corsOptions = {
     origin: [
          "http://localhost:4000",
          "http://localhost:3000",
          "https://final-web-portfolio-lfuljauk8-ajs-projects-7a7e812c.vercel.app",
          "https://final-web-portfolio-eta.vercel.app",
          "https://server-portfolio-9mcq.onrender.com",
     ],
     credentials: true,
     optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// mongoose connection to mongo DB
mongoose.connect(process.env.MONGODB_STRING);
mongoose.connection.once("open", () => {
     console.log("connected to mongoDB atlas");
});

app.use("/projects", projRoutes);
app.use("/users", userRoutes);

if (require.main === module) {
     // listen to port
     app.listen(process.env.PORT || 4000, () => {
          console.log(`API is now online at port ${process.env.PORT || 4000}`);
     });
}
