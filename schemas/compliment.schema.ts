import mongoose, { Schema } from 'mongoose';
import { dbLoadingPhrasesCollection } from '../utils';
import { ICompliment } from '../interfaces';

const complimentSchema = new Schema<ICompliment>({
  value: String
});

const Compliments = mongoose.model(dbLoadingPhrasesCollection, complimentSchema);

export default Compliments;
