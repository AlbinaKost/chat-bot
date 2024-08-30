const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "7326522774:AAHhWC197_zLAtrByHwo7YBeEqZK4RrWkDE";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on ('message', (msg) => {
 console.log(msg);
 bot.sendMessage(msg.chat.id, 'Hello, ' + msg.from.first_name);
}
  )