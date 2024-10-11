import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import axios from 'axios';
import { ContactDTO } from '@/dtos/ContactDTO';

export async function POST(req: NextRequest) {
  try {
    const reqData = await req.json();
    const contactData = new ContactDTO(reqData);

    const captchaSecret = process.env.RECAPTCHA_SECRET_KEY as string;

    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: captchaSecret,
          response: contactData.captchaToken,
        },
      }
    );

    if (!recaptchaResponse.data.success) {
      return NextResponse.json({ error: 'Invalid CAPTCHA. Please try again.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST as string,
      port: parseInt(process.env.EMAIL_PORT as string, 10),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    const mailOptions = {
      from: `"${contactData.name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER as string,
      replyTo: contactData.email,
      subject: 'New Contact Form Submission',
      text: `
      You have a new contact form submission:

        Name: ${contactData.name}
        Email: ${contactData.email}
        Phone: ${contactData.phone}
        Message: ${contactData.message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);

    if (error instanceof Error && error.message === 'Missing required fields') {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json({ error: 'CAPTCHA verification failed. Please try again.' }, { status: 400 });
    }

    return NextResponse.json({ error: 'An error occurred while sending the message. Please try again.' }, { status: 500 });
  }
}
