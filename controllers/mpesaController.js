require('dotenv').config();
const datetime = require('node-datetime');
const passkey = process.env.PASSKEY;
const shortcode = process.env.SHORTCODE;
const consumerKey = process.env.CONSUMERKEY;
const consumerSecret = process.env.CONSUMERSECRET;

const newPassword = () => {
  const dt = datetime.create();
  const formartted = dt.format('YmdHMS');

  const passString = shortcode + passkey + formartted;
  const base64EncodedPassword = Buffer.from(passString).toString('base64');

  return base64EncodedPassword;
};

exports.mpesaPassword = (req, res) => {
  res.send(newPassword());
};
