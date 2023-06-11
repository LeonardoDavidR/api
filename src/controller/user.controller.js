const { pool } = require("../database");


const postRegister = async (req, res) => {
    try {
        console.log(req.body);
        let sql = "INSERT INTO user (name, last_name, email, photo, password) " +
            "VALUES ('" + req.body.name + "','" + req.body.last_name + "','" + req.body.email + "','" + req.body.photo + "', '" + req.body.password + "')"

        console.log(sql);
        let [result] = await pool.query(sql);
        console.log(result)


        if (result.insertId)
            res.send(String(result.insertId));
        else
            res.send("-1")


    }
    catch (err) {
        console.log(err)
    }
}


const postLogin = async (req, res) => {
    try {
        console.log(req.body);


        if (req.body.email && req.body.password) {
            let sql = "SELECT id_user, name, last_name, email, photo FROM user  WHERE email ='"+req.body.email+"' AND password = '"+req.body.password+"'"

            // let sql = "SELECT id_user, name, last_name, email, photo FROM user"
           
            console.log(sql);


            let [result] = await pool.query(sql);
            console.log(result)
            res.send(result)
        }

        else {
            console.log("no existe este usuario")
        }


    }
    catch (err) {
        console.log(err)
    }
}


module.exports = { postLogin, postRegister }