/*
 |--------------------------------------
//  | Dependencies - None
 |--------------------------------------
 */

module.exports = function(app, config) {

/*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */

  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API works');
  });

};