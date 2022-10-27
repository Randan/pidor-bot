import mongoose, { Schema } from 'mongoose';
import { dbLoadingPhrasesCollection } from '../utils';
import { ILoadingPhrases } from '../interfaces';

const loadingPhrasesSchema = new Schema<ILoadingPhrases>({
  value: [String]
});

const LoadingPhrases = mongoose.model(dbLoadingPhrasesCollection, loadingPhrasesSchema);

export default LoadingPhrases;
