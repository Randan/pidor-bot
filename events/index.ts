import { Message } from 'node-telegram-bot-api';
import bot from '../bot';
import {
  addGroup,
  addUser,
  getAllStandings,
  getYearStandings,
  help,
  removeGroup,
  removeUser,
  startRound
} from '../controllers';

const events: Record<string, RegExp> = {
  help: /\/help/,
  start: /\/start/,
  stop: /\/stop/,
  iwannabeapidor: /\/iwannabeapidor/,
  idontwannabeapidor: /\/idontwannabeapidor/,
  startround: /\/startround/,
  standingsyear: /\/standingsyear/,
  standingsall: /\/standingsall/
};

bot.onText(events.help, (msg: Message): void => help(msg));

bot.onText(events.start, (msg: Message): Promise<void> => addGroup(msg));

bot.onText(events.stop, (msg: Message): Promise<void> => removeGroup(msg));

bot.onText(events.iwannabeapidor, (msg: Message): Promise<void> => addUser(msg));

bot.onText(events.idontwannabeapidor, (msg: Message): Promise<void> => removeUser(msg));

bot.onText(events.startround, (msg: Message): Promise<void> => startRound(msg));

bot.onText(events.standingsyear, (msg: Message): Promise<void> => getYearStandings(msg));

bot.onText(events.standingsall, (msg: Message): Promise<void> => getAllStandings(msg));
