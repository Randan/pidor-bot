import mongoose, { Schema } from 'mongoose';
import { dbGroupsCollection } from '../utils';
import { IUser } from '../interfaces';

const userSchema = new Schema<IUser>({
  tgUserId: Number,
  firstName: String,
  lastName: {
    type: String,
    default: undefined
  },
  userName: {
    type: String,
    default: undefined
  },
  pidorCount: {
    type: Number,
    default: 0
  }
});

const Users = mongoose.model(dbGroupsCollection, userSchema);

export default Users;
