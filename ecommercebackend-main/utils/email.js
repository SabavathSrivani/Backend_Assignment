const nodemailer = require('nodemailer');

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password' // Replace with an app password if 2FA is enabled
  }
});

// Send verification email
const sendVerificationEmail = (email, verificationToken) => {
  const verificationLink = `http://localhost:3000/verify-email/${verificationToken}`;
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Email Verification',
    html: `<p>Please verify your email by clicking on the link: <a href="${verificationLink}">Verify Email</a></p>`
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendVerificationEmail };
