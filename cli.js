var request     = require('request')
  , credentials = require('./credentials.json')
  , summary     = process.argv[2];

var params = { method: 'POST', url: credentials.SERVICE_URL, json: true, body: { 
  subject: summary,
  to: credentials.TO_EMAIL,
  from: credentials.FROM_EMAIL
}};

request(params, function (error) {
  if (error) {
    console.log(error);
  }
  
  process.exit();
});
