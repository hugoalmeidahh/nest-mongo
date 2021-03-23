import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  active: { type: Boolean, required: true },
});

export interface IUser extends Document{
  id: string;
  name: string;
  age: number;
  active: boolean;
}