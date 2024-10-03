import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import axios from 'axios';
import { ContactDTO } from '@/dtos/ContactDTO';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  };

  try {
    const contactData = new ContactDTO(req.body);

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
      return res.status(400).json({ error: 'Invalid CAPTCHA. Please try again.' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string
      }
    });

    const mailOptions = {
      from: `"${contactData.name}" <${contactData.email}>`,
      to: process.env.EMAIL_USER as string,
      subject: 'New Contact Form Submission',
      text: `
      You have a new contact form submission:

        Name: ${contactData.name}
        Email: ${contactData.email}
        Phone: ${contactData.phone}
        Message: ${contactData.message}
      `
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error:', error);

    if (error instanceof Error && error.message === 'Missing required fields') {
      return res.status(400).json({ error: error.message });
    }

    if (axios.isAxiosError(error) && error.response) {
      return res.status(400).json({ error: 'CAPTCHA verification failed. Please try again.' });
    }

    return res.status(500).json({ error: 'An error occurred while sending the message. Please try again.' });
  };
};