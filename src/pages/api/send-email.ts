import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { full_name, email, phone, country, nda, description, services } =
      req.body;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    let mailOptions = {
      from: email,
      to: "nabeelahmad.dev@gmail.com",
      subject: "New Service Request",
      text: `
        Full Name: ${full_name}
        Email: ${email}
        Phone: ${phone}
        Country: ${country}
        NDA: ${nda ? "Yes" : "No"}
        Description: ${description || "No description provided"}
        Services: ${services || "No services selected"}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
