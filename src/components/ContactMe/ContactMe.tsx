import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
export function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SendEmail = async () => {
    try {
      const resposne = await fetch("/api/SendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });
    } catch (error) {}
  };

  return (
    <div className="w-3/4  md:w-[500px] bg-blue-600 rounded p-2 flex flex-col gap-6 items-center justify-center h-[350px]">
      <Input
        type="name"
        placeholder="Your Name"
        className="font-GeistMono"
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        type="email"
        placeholder="your email"
        className="font-GeistMono"
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Textarea
        placeholder="Type your message here."
        className="font-GeistMono"
        onChange={(e) => setMessage(e.target.value)}
      ></Textarea>
      <Button
        size={"md"}
        className="h-11 w-full font-GeistMono"
        onClick={SendEmail}
      >
        Submit
      </Button>
    </div>
  );
}
