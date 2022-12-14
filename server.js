const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const body_parser = require('body-parser');
const app = express();



app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
});
app.use(router);
app.listen(3001, () => {
    console.log("Servidor Ligado, escutando na porta 3001");

});

let authenticate = function(req,res,next){

};

router.get('/', (req,res) => {

    res.status(200).json({"Message":"Working"});
})

router.post('/login', (req,res) => {

    var token = jwt.sign( req.body, "s3nh453Cr3T4d4Ap1");

    return res.status(200).json(token);

});

router.get('/verify', (req,res) => {

    try {
        jwt.verify(req.headers.authorization.substring(1,req.headers.authorization.length-1),"s3nh453Cr3T4d4Ap1");
        res.status(200).json({"Message":"logged in"});
    } catch (err) {
        console.log(err);
        res.status(401).json({"Message":"Autenticação Falhou"});
    }

})
