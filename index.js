const express = require('express');
const path = require('path');
const url = require('url');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const creditKudosClient = "626b4603e66d74163d8a5ed0d82d0e5a1e67475fc724ad1d6284440b91369fbc";
const creditKudosSecret = "50eafdebe848272882cc25fba1d3b664eb3d33664b3356a7f7289d2c53c52ee8";

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

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
redirectRoute.route('/redirect').get(function(req, res) {
    let code = req.query.code;
    let state = req.query.state;

    res.header('Content-Type', 'text/html');
    res.write(
        '<html>' +
        '<head>' +
        '<script src="https://code.creditkudos.com/creditkudos-connect-v2.latest.js"></script>' +
        '<script type="text/javascript">' +
        'var readyStateCheckInterval = setInterval(function() {' +
        'if (document.readyState === "complete") {' +
        'clearInterval(readyStateCheckInterval);' +
        'CK.notify();' +
        '}' +
        '}, 1);' +
        '</script>' +
        '</head>' +
        '<body>' +
        '<div style="width: 600px;height:600px;color: #fff"><div style="background-color: #fff; width: 590px">'+
        '<div style="background-color: #fff; width: 550px">'+
        '<p style="color: #5fc35f; font-size: 2rem !important; text-align: center;padding: 1rem 0;">Redirecting you back to the app...</p>'+
        '</div></div></div>'+
        '</body>' +
        '</html>'
    );
    res.end();
});

app.use('/routes', serverRoutes);
app.use('/callbacks', redirectRoute);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});


console.log(`demo credit check listening on ${port}`);

