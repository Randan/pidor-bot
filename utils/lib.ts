import { Message } from 'node-telegram-bot-api';

export const webGreetings = () =>
  `<style>body { min-height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column; margin: 0; background-color: #40a5ed; font-family: sans-serif; color: #252324; }</style>
  <h1>Вітаю, я <a href='https://t.me/pidorbot' style='color: #252324;'>pidorBot</a>!</h1>
  <h2>Заходь!</h2>`;

export const botWokeUp = () => 'Вітаю, я прокинувся!';

export const help = (msg: Message): string => {
  if (!msg.from) return '';

  const { first_name } = msg.from;

  return (
    `Вітаю, ${first_name}! Мене звати PidorBot.\n` +
    '\n' +
    'Я працюю тільки в группах.\n' +
    'Додай мене в группу і почнемо турнір.\n' +
    'Не забудь надати меня права адміна.\n' +
    '\n' +
    '/help - Допомога' +
    '/start - Почати турнір' +
    '/stop - Зупинити турнір' +
    '/iwannabeapidor - Прийняти участь у підор-турнірі' +
    '/idontwannabeapidor - Збігти як остання сучка' +
    '/standingsyear - Турнирна таблиця за цей рік' +
    '/standingsall - Турнирна таблиця за весь час'
  );
};

export const userRemoved = (msg: Message): string => {
  if (!msg.from) return '';

  const { first_name } = msg.from;

  return `${first_name} більше не приймає участі у підор-турнірі. Па-па, сучко!`;
};

export const userAdded = (msg: Message): string => {
  if (!msg.from) return '';

  const { first_name } = msg.from;

  return `${first_name} тепер приймає участь у підор-турнірі.`;
};

export const roundWasToday = (): string => 'Йой, сьогодні вже був райнд.';

export const userExists = (): string =>
  'Агов! Двічі за раз підаром бути важко. Ти вже приймаєш участь!';
