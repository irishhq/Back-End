const express = require("express");
const router = express.Router();
const pool = require("../pool");
//index/
router.get("/", (req, res) => {
    var sql = `SELECT title,date,href FROM cs_notices ORDER BY date DESC`;
    pool.query(sql, [], (err, result) => {
        if(err) {
            throw err;
        }else{
            res.send(result);
        }
    })
})

module.exports = router;