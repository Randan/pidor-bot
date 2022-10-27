import mongoose, { Schema } from 'mongoose';
import { dbGroupsCollection } from '../utils';
import { IGroup } from '../interfaces';
import Users from './user.schema';

const groupSchema = new Schema<IGroup>({
  tgGroupId: Number,
  tournamentParticipants: {
    type: [Users],
    default: []
  },
  lastRoundDate: {
    type: Date,
    default: undefined
  }
});

const Groups = mongoose.model(dbGroupsCollection, groupSchema);

export default Groups;
