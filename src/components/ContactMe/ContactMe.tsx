import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "react-toastify";

export function ContactMe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const SendEmail = async () => {
    try {
      setLoading(true);
      const request = await fetch("/api/SendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const response = await request.json();
      if (response.ok) {
        toast.success(response.message);
        setLoading(false);
      } else {
        toast.error(response.message);
        setLoading(false);
      }
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  return (
    <div className="w-3/4  md:w-[500px] rounded p-2 flex flex-col gap-6 items-center justify-center h-[350px]">
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
      {loading ? (
        <div className="text-white text-3xl font-GeistMono">Sending...</div>
      ) : null}
    </div>
  );
}
