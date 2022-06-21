import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json({ limit: '20mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://islam:hsghlwfvd555@cluster0.ra3ol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
    .connect(CONNECTION_URL, {
        //avoid warnings and errors
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>

        app.listen(PORT, () =>
            console.log(`connection is established and running on port: ${PORT}`)
        )
    )
    .catch((err) => console.log(err.message));