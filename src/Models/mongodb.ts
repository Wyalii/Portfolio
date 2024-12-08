import mongoose, { Document, Schema } from "mongoose";

interface IMessage extends Document {
  email: string;
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Message =
  mongoose.models.Message || mongoose.model<IMessage>("Message", messageSchema);

export default Message;
