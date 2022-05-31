import nodemailer from "nodemailer";

export const sendMail = async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user testAccount.user
      pass: process.env.EMAIL_PASSWORD, // generated ethereal password testAccount.pass
    },
  });

  // send mail with defined transport object
  let info = await transporter
    .sendMail({
      from: `${process.env.APP_NAME} 💧 ${process.env.EMAIL_USER}`, // sender address
      to: req.body.to, // list of receivers , baz@example.com
      subject: req.body.subject, // Subject line
      text: req.body.text, // plain text body
      html: req.body.html, // html body
    })
    .then((info) => res.status(200).json({ info, status: "done" }))
    .catch((err) => res.status(401).json({ err, status: "failed" }));

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
