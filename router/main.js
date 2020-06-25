module.exports = function(app, fs)
{
  app.get('/',function(req,res){
    res.render('front/main/main');
  });

  app.get('/home',function(req,res){
    res.render('front/main/main');
  });
}