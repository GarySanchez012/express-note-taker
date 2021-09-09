const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const db = require("../../db/db.json");
let id = db.length + 1;

const output = "./db/db.json";

router.get("/notes", (req, res) => {
  res.json(db);
});

router.post("/notes", (req, res) => {
  req.body.id = id++;

  db.push(req.body);

  fs.writeFile(output, JSON.stringify(db), (err) => {
    if (err) throw err;
  });
  res.json(db);
});

router.delete("/notes/:id", (req, res) => {
    let id = req.params.id
    
    for (let i = 0; i < db.length; i++) {
        if(db[i].id === parseInt(id)){
            db.splice(i, 1)
            
        }
    }

    fs.writeFile(output, JSON.stringify(db), (err) => {
        if (err) throw err;
      });
      res.json(db);
})

module.exports = router;
