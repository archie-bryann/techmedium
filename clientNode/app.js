const path = require('path');
const express = require('express');
const app = express();
const httpsRedirect = require('express-https-redirect');

// app.use(express.static(__dirname + '/utils'));
// app.get("/sitemap.xml", (req,res,next)=>{
//     res.contentType('application/xml');
//     res.sendFile('/sitemap.xml');
// });

app.use('*', httpsRedirect());

const root = require('path').join(__dirname, 'public', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    return res.sendFile('index.html', { root });
});


module.exports = app;           