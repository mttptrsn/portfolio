import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json()
  console.log(body)



    let userEmail = process.env.SENDING_EMAIL;
    let userSecret = process.env.SENDING_SECRET;

    // Create a reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: userEmail,
            pass: userSecret,
        },
    });

    try {
        // Send mail with defined transport object
        let info = await transporter.sendMail({
            from: userEmail, // sender address
            to: userEmail, // list of receivers
            subject: `${body.title} - Portfolio Contact: ${body.subject}`, // Subject line
            text: `Message from: ${body.email}, ${body.message}`, // plain text body
        });

        console.log('Message sent: %s', info.messageId);

      
    } catch (error) {
        console.error('Failed to send the email:', error);
      
    }
}
