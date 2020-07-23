require("dotenv").config();

const Telegraf = require("telegraf");
const { session } = Telegraf;

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.use(Telegraf.log());
bot.use(session());

bot.start((ctx) => ctx.reply("Hey dawg! Send me a sticker!"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply(`${ctx.message.from.username} 👍`));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));

bot.launch();
