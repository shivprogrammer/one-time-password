const twilio = require('twilio');

const accountSid = 'AC56970f39b17ace79b01496adfe33f25f';
const authToken = 'b97799217cef1639a933057a42e9e3e3';

module.exports = new twilio.Twilio(accountSid, authToken);
