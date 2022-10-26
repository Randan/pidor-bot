import { Message } from 'node-telegram-bot-api';
import bot from '../bot';
import { lib } from '../utils';

const help = (msg: Message): void => {
  if (!msg.from) return;

  const { id } = msg.chat;

  bot.sendMessage(
    id,
    lib.help(msg)
  );
};

export default help;
