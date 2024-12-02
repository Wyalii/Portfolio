import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
export function ContactMe() {
  return (
    <div className="w-3/4  md:w-[500px] bg-blue-600 rounded p-2 flex flex-col gap-6 items-center justify-center h-[350px]">
      <Input
        type="name"
        placeholder="Your Name"
        className="font-GeistMono"
      ></Input>
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
