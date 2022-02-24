import mongoose, { Schema } from "mongoose";

const ConversationSchema: Schema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Conversation", ConversationSchema);
