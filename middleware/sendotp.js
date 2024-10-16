import nodemailer from 'nodemailer';

// Function to send OTP email
export const sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "tinycloindia@gmail.com",
      pass: "ovczysymommvnfal", // Ensure to use environment variables in production
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailData = {
    from: 'tinycloindia@gmail.com', // Sender address 
    to: email, // Recipient email
    subject: "Your OTP Code", // Subject line
    text: `Your OTP for verifying your account is: ${otp}

Please use this code to complete your verification process.

If you did not request this OTP, please ignore this email.

Best regards,
The TinyClo Team`, // Plain text body
    html: `<p>Your OTP for verifying your account is: <strong>${otp}</strong></p>
           <p>Please use this code to complete your verification process.</p>
           <p>If you did not request this OTP, please ignore this email.</p>
           <p>Best regards,<br>The TinyClo Team</p>`, // HTML body
  };

  try {
    const info = await transporter.sendMail(mailData);
    return info; // Return info if email sent successfully
  } catch (error) {
    return error; // Return error if something went wrong
  }
};
