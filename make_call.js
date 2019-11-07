// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const secrets = require('./secrets');
const client = require('twilio')(secrets.accountSid, secrets.authToken);
console.log(secrets);

client.calls
  .create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: '+16308818436',
    from: '+12024101949'
  })
  .then(call => console.log(call.sid));
