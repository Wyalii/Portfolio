import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import nodemailer from "nodemailer";
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, message } = body;
    if (!validator.isEmail(email)) {
      return NextResponse.json({ error: "Invalid Email." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    await transporter.verify();

    const mailOptions = {
      from: email,
      to: process.env.MY_EMAIL,
      subject: "new message from your site!",
      text: `you recived message from: ${email}:\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Your Message was sent :)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("error sending email", error);
    return NextResponse.json(
      { error: `Failed to send email: ${error}` },
      { status: 500 }
    );
  }
}
