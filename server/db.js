require("dotenv").config();
const mongoose = require("mongoose");

const conection_uri = () => {
    return `mongodb://${process.env.MONGODB_HOST}:27017/MERN`;
};

module.exports = () => {
    const connection = mongoose
        .connect(conection_uri())
        .then((result) => console.log("Connected to database"))
        .catch((err) => {
            console.log(err);
            console.log("could not connect to database");
        });
};
