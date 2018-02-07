var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sea: Get Closer' });
});

router.get('/services', function(req,res, next){
    res.render('services/services', {title: 'Sea: Services'});
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
  res.render('contact', {title: 'Sea: Test Contact'});
});


module.exports = router;
