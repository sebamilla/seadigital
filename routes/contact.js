var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/contact', function(req, res){
    var api_key = 'key-4ae77a5435e4367cd8a4d5086bf42ab6';
    var domain = 'sandbox8cc6737a87204e0ba76e7703c11d1e9f.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
    var data = {
      from: 'Sea Digital Email Test <postmaster@sandbox8cc6737a87204e0ba76e7703c11d1e9f.mailgun.org>',
      to: 'nev@seadigital.co.nz',
      subject: req.body.userName,
      text: req.body.howHelp
    };
 
    mailgun.messages().send(data, function (error, body) {
        res.render('contact', {title: 'Contact Success!'});
        console.log(body);
        if(!error){
            res.send("Mail Sent");
        } else {
            res.send("Mail Not Sent");
        }
    });
})

module.exports = router;