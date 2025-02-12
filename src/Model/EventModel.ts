import { Schema, model, models } from "mongoose";

export interface eventInterface {
  start: Date;
  end: Date
  num: string;
  title: string;
  description: string;
  carousel: string[];
  coverImage: string;
}

const Event_Schema = new Schema<eventInterface>({
  start: {
    type: Date,
    required: true,
  },
  num: {
    type: String,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  carousel: {
    type: [String],
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
});

const EVENT =
  models.Event_Schema || model<eventInterface>("Event_Schema", Event_Schema);

export default EVENT;
