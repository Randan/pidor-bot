import 'dotenv/config';

const appPort: string = process.env.PORT || '';
const dbUrl: string = process.env.DB_URL || '';
const dbLoadingPhrasesCollection: string =
  process.env.DB_LOADING_PHRASES_COLLECTION || '';
const dbGroupsCollection: string = process.env.DB_GROUPS_COLLECTION || '';
const timezone: string = process.env.TIMEZONE || '';
const adminId: string = process.env.ADMIN_TG_ID || '';

const dbMongooseUri: string = dbUrl
  ? dbUrl + '?retryWrites=true&w=majority'
  : '';

export {
  adminId,
  appPort,
  dbGroupsCollection,
  dbMongooseUri,
  dbUrl,
  dbLoadingPhrasesCollection,
  timezone
};
