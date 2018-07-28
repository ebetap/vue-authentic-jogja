var request = require('request');

request({
  method: 'POST',
  url: 'https://api-authentic.herokuapp.com/user_token',
  headers: {
    'Content-Type': 'application/json'
  },
  body: "{  'auth': {    'email': 'satu@gmail.com',    'password': 'password'  }}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});