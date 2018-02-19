var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sea: The Web & Search Performance Studio', metaDesc: 'Sea is a Wellington digital agency that helps you get closer to your customers by understanding & solving your web & search performance problems. Specialists in Web Development, Server Performance & Digital Marketing.' });
});

router.get('/services', function(req,res, next){
    res.render('services/services', {title: 'Sea: Get Closer With Digital Performance'});
});

router.get('/web-development', function(req, res, next){
  res.render('services/web', {title: 'Sea: Web Development'});
});

router.get('/web-performance', function(req, res, next){
  res.render('services/web-performance', {title: 'Sea: Web Performance'});
});

router.get('/search-engine-optimisation', function(req, res, next){
  res.render('services/seo', {title: 'Sea: Search Engine Optimisation'});
});

router.get('/server-performance', function(req, res, next){
  res.render('services/servers', {title: 'Sea: Server Performance'});
});

router.get('/adwords-management', function(req, res, next){
  res.render('services/adwords', {title: 'Sea: Adwords Management'});
});

router.get('/amazon-cloud-services', function(req, res, next){
  res.render('services/amazon', {title: 'Sea: Amazon Cloud Services'});
});

router.get('/projects', function(req,res, next){
    res.render('projects/projects', {title: 'Sea: Projects'});
});

router.get('/projects/alpybus', function(req, res, next){
  res.render('projects/alpybus', {title: 'Sea: AlpyBus - Geneva Transfers - Case Study'});
});

router.get('/projects/carve-barbershop', function(req, res, next){
  res.render('projects/carve', {title: 'Sea: Carve Barbershop - The Wellington Barbershop - Case Study'});
});

router.get('/projects/tommys-rentals', function(req, res, next){
  res.render('projects/tommys', {title: 'Sea: Tommys Rentals - Wellington Property Management - Case Study'});
});

router.get('/projects/student-job-search', function(req, res, next){
  res.render('projects/sjs', {title: 'Sea: Student Job Search - New Zealand Student Jobs - Case Study'});
});

router.get('/projects/phil-&-teds', function(req, res, next){
  res.render('projects/philandteds', {title: 'Sea: Phil & Teds - Prams & Buggies - Case Study'});
});

router.get('/projects/pamu', function(req, res, next){
  res.render('projects/pamu', {title: 'Sea: Pamu - New Zealand Organic Powder Milk - Case Study'});
});

router.get('/projects/method-recycling', function(req, res, next){
  res.render('projects/method', {title: 'Sea: Method Recycling - Office Recycling Bins - Case Study'});
});

router.get('/projects/new-zealand-pharmaceutical-society', function(req, res, next){
  res.render('projects/newzealandpharmaceutical', {title: 'Sea: Insurance & Financial Services Ombudsman - Case Study'});
});

router.get('/projects/ifso', function(req, res, next){
  res.render('projects/carve', {title: 'Sea: New Zealand Pharmaceutical Society - Case Study'});
});


router.get('/us', function(req,res, next){
    res.render('us', {title: 'Sea: Us'});
});


router.get('/contact', function(req, res, next){
  res.render('contact', {title: 'Sea: Learn More About Sea & Web Performance', metaDesc: 'This is the content for the Meta Description' });
});

router.get('/test', function(req, res, next){
  res.render('test', {title: 'Sea: Learn More About Sea & Web Performance'});
});

router.get('/success', function( req, res, next){
    res.render('success', {title: 'Sea: Thanks For Getting In Touch'})
})

router.post('/success', function(req, res, next){
    var api_key = 'key-4ae77a5435e4367cd8a4d5086bf42ab6';
    var domain = 'sandbox8cc6737a87204e0ba76e7703c11d1e9f.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
    var data = {
      from: 'Sea Digital Website Enquiry <postmaster@sandbox8cc6737a87204e0ba76e7703c11d1e9f.mailgun.org>',
      to: 'nev@seadigital.co.nz',
      subject: req.body.userName,
      text: req.body.howHelp
    };
 
    mailgun.messages().send(data, function (error, body) {
        if(!error){
            console.log(body);
            res.render('success', { title: 'Sea: Thanks for getting in touch.' })
            const notifier = require('node-notifier');
            // String
            notifier.notify(
              {
                title: 'Sea',
                message: 'Thanks for getting in touch. Expect to hear from us within 12 hours.',
                icon: './public/images/NotificationMark.png', // Absolute path (doesn't work on balloons)
                sound: true, // Only Notification Center or Windows Toasters
                wait: false // Wait with callback, until user action is taken against notification
              },
              function(err, response) {
            
              }
            );
            return;
        } else {
            console.log(error);
            res.render('contact', {title: 'Sea: Learn More About Sea & Web Performance'})
            const notifier = require('node-notifier');
            notifier.notify(
              {
                title: 'Sea',
                message: 'Whoops... looks like you have missed a field.',
                icon: './public/images/NotificationMark.png', // Absolute path (doesn't work on balloons)
                sound: true, // Only Notification Center or Windows Toasters
                wait: false // Wait with callback, until user action is taken against notification
              },
              function(err, response) {
                return;
              }
            );
            return;
        }
    });
})


module.exports = router;
