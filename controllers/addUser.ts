import { UpdateResult } from 'mongodb';
import mongoose from 'mongoose';
import { Message } from 'node-telegram-bot-api';
import bot from '../bot';
import { IGroup, IUser } from '../interfaces';
import { Groups } from '../schemas';
import { dbMongooseUri, lib } from '../utils';

const addUser = async (msg: Message): Promise<void> => {
  if (!msg.from) return;

  const { id: tgGroupId } = msg.chat;
  const { id: tgUserId, first_name, last_name, username } = msg.from;

  const newUser: IUser = {
    tgUserId,
    firstName: first_name,
    lastName: last_name,
    userName: username,
    pidorCount: 0
  };

  try {
    mongoose.connect(dbMongooseUri);

    const group: IGroup | null = await Groups.findOne({ tgGroupId });

    if (!group) {
      return;
    }

    const isUserExist: boolean = !!group.tournamentParticipants.find(
      (user: IUser) => user.tgUserId === tgUserId
    );

    if (isUserExist) {
      bot.sendMessage(tgGroupId, lib.userExists());
      return;
    }

    const updatedGroup = {
      ...group,
      tournamentParticipants: [...group.tournamentParticipants, newUser]
    };

    const groupUpdatedResponse: UpdateResult = await Groups.updateOne(
      { tgGroupId },
      updatedGroup
    );

    if (groupUpdatedResponse) {
      bot.sendMessage(tgGroupId, lib.groupAccepted(msg));
    }
  } catch (err: unknown) {
    console.log(JSON.stringify(err));
  }
};

export default addUser;
