import nodemailer from 'nodemailer';

export const sendwelcomemail = async (email, name) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "tinycloindia@gmail.com",
      pass: "ovczysymommvnfal", 
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailData = {
    from: 'tinycloindia@gmail.com', // sender address
    to: email, // recipient email
    subject: "Welcome to TinyClo", // Subject line
    text: `Hi ${name},
    Welcome to TinyClo! We're thrilled to have you as part of our community. Explore the latest trends, exclusive collections, and exciting offers on our website.
    
    Feel free to reach out if you need any assistance.
    
    Happy shopping!
    
    Best regards,
    The TinyClo Team`, // plain text body
    html: `<p>Hi <strong>${name}</strong>,</p>
           <p>Welcome to <strong>TinyClo</strong>! We're thrilled to have you as part of our community. Explore the latest trends, exclusive collections, and exciting offers on our <a href="https://yourwebsite.com">website</a>.</p>
           <p>Feel free to reach out if you need any assistance.</p>
           <p>Happy shopping!</p>
           <p>Best regards,<br>The TinyClo Team</p>`,
  };

  try {
    const info = await transporter.sendMail(mailData);
    return info; // Return mail info if sent successfully
  } catch (error) {
    return error; // Return error if sending failed
  }
};
