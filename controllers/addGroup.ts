import mongoose from 'mongoose';
import { Message } from 'node-telegram-bot-api';
import bot from '../bot';
import { IGroup } from '../interfaces';
import { Groups } from '../schemas';
import { dbMongooseUri, lib } from '../utils';

const addGroup = async (msg: Message): Promise<void> => {
  if (!msg.from) return;

  const { id } = msg.chat;

  const newGroup: IGroup = {
    tgGroupId: id,
    tournamentParticipants: []
  };

  try {
    mongoose.connect(dbMongooseUri);

    const group: IGroup | null = await Groups.findOne({ tgGroupId: id });

    if (group) {
      return;
    }

    const groupAddedResponse: IGroup = await Groups.create(newGroup);

    if (groupAddedResponse) {
      bot.sendMessage(id, lib.groupAccepted(msg));
    }
  } catch (err: unknown) {
    console.log(JSON.stringify(err));
  }
};

export default addGroup;
