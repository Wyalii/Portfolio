import { NextRequest, NextResponse } from "next/server";
import validator from "validator";
import nodemailer from "nodemailer";
import connectToDB from "@/lib/db";
export async function POST(req: NextRequest) {
  try {
    const db = await connectToDB();
    const messagesCollection = db.collection("Messages");

    const body = await req.json();
    const { email, message } = body;
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Invalid Email." },
        { status: 400 }
      );
    }

    if (!message || message.length <= 8) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "please write message with right syntax (more than 8 characters).",
        },
        { status: 400 }
      );
    }

    const lastMessage = await messagesCollection
      .find({ email })
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();

    if (lastMessage.length > 0) {
      const currentTime = new Date();
      const timeDifference =
        (currentTime.getTime() - lastMessage[0].createdAt.getTime()) /
        1000 /
        60;

      if (timeDifference < 30) {
        return NextResponse.json(
          {
            ok: false,
            message: `You can send another message in ${
              30 - Math.floor(timeDifference)
            } minutes.`,
          },
          { status: 400 }
        );
      }
    }

    const newMessage = {
      email,
      createdAt: new Date(),
    };

    await messagesCollection.insertOne(newMessage);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.MY_EMAIL,
      subject: "new message from your site!",
      text: `you recived message from: ${email}:\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { ok: true, message: "Your Message was sent :)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("error sending email", error);
    return NextResponse.json(
      { ok: false, message: `Failed to send email` },
      { status: 500 }
    );
  }
}
