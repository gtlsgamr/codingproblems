const { EMAIL } = process.env;
const { PASSWORD } = process.env;

const querystring = require("querystring");
var nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  const params = querystring.parse(event.body);
  //const name = params.comment || "World";
  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: { EMAIL },
    pass: { PASSWORD }
  }
});

var mailOptions = {
  from: 'hittarththummarcoc@gmail.com',
  to: 'hittarththummarcoc@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `That was easy! ${a}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
  

  return {
    statusCode: 200,
    body: info.response,
  };
};


