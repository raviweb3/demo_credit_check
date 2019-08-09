const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const PORT = 4000;

const creditKudosClient = "626b4603e66d74163d8a5ed0d82d0e5a1e67475fc724ad1d6284440b91369fbc";
const creditKudosSecret = "50eafdebe848272882cc25fba1d3b664eb3d33664b3356a7f7289d2c53c52ee8";

app.use(cors());
app.use(bodyParser.json());

const serverRoutes = express.Router();
serverRoutes.route('/generateCustomToken').post(function(req, res) {
    console.log(req.body);
    const { email, firstName, lastName, dateOfBirth, userId} = req.body;
    const seconds = new Date().getTime() / 1000;
    const token =  jwt.sign({
        iss: creditKudosClient,
        sub: 'customer',
        iat: seconds,
        jti: seconds + 151,
        email:email,
        first_name: firstName,
        last_name: lastName,
        custom_reference: userId,
        date_of_birth: dateOfBirth
    }, creditKudosSecret, { algorithm: 'HS256'});
    console.log(token);
    res.json({token});
});

const redirectRoute = express.Router();
serverRoutes.route('/').post(function(req, res) {
    console.log(req);
    res.json({result:"SUCCESS"});
});

app.use('/routes', serverRoutes);
app.use('/redirect', redirectRoute);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


