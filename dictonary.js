import express from "express";
import db from "./db.js";

class DictionaryBackendServer {
    constructor() {
        const app = express ();
        app.use (express.json());
        app.use (express.static("public"));

        app.get("/lookup/:word", this._doLookup);
        app.post("/save/", this ._doSave);

    //start server
        app.listen(3000 , () => console.log("Listening on port 3000"));
    }

    async _doLookup(req, res) {
        const routeParams = req.params;
        const word = routeParams.word;
        const query = { word: word.toLowerCase() };
        const collection = db.collection("dict");
        const stored = await collection.findOne(query);
        const response = {
            word: word,
            definition: stored ? stored.definition : ""
        };
        res.json(response);
    }

    async _doSave(req, res) {
        const query = { word: req.body.word.toLowerCase()};
        const update = { $set: { definiton: req.body.definition}};
        const params = { upsert: true };
        const collection = db.collection("dict");
        await collection.updateOne (query, update, params);
        res.json({ success: true });    
    }
}

new DictionaryBackendServer ();
   