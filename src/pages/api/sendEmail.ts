  import nodemailer from "nodemailer";

  import type { NextApiRequest, NextApiResponse } from "next"; 
  import * as handlebars from "handlebars";

  // import { welcomeTemplate } from '../../lib/templates/welcome';

  // const compileWelcomeTemplate = (name: string, url: string) => {
  //   const template = handlebars.compile(welcomeTemplate);
  //   return template({ name, url });
  // };

  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
      const { from, subject , body } = req.body;
      const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    
      console.log("Request body:", req.body);

      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: SMTP_EMAIL,
          pass: SMTP_PASSWORD,
        },
      });

      try {
        await transport.verify();

        const sendResult = await transport.sendMail({
          from: from,
          to: from,
          subject,
          html: body,
        });

        console.log(sendResult);
        return res.status(200).json({ message: "Email sent successfully" });
      } catch (error: any) {
        console.error("Error sending email:", error);
        return res
          .status(500)
          .json({ message: "Failed to send email", error: error.message });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
