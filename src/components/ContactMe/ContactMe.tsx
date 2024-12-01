import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
export function ContactMe() {
  return (
    <div className="w-full  md:w-[500px] bg-purple-600 rounded p-2 flex flex-col gap-3 items-center">
      <h1 className="text-white font-GeistMono">Send me an email.</h1>
      <Input
        type="email"
        placeholder="your email"
        className="font-GeistMono"
      ></Input>
      <Textarea
        placeholder="Type your message here."
        className="font-GeistMono"
      ></Textarea>
      <Button size={"md"} className="h-11 w-full font-GeistMono">
        Submit
      </Button>
    </div>
  );
}
