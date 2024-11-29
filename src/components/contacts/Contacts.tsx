import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function Contacts() {
  return (
    <div className="w-full flex flex-col h-auto">
      <Textarea placeholder="Type your message here."></Textarea>
      <Button>Submit</Button>
    </div>
  );
}
