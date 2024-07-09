import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, name, message } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: 'Contato do site Adotar é legAU!',
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (error) {
                if (error) {
                    reject(error);
                } else {
                    resolve("Email enviado com sucesso!");
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}