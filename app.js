const Telegraf = require("telegraf");
const config = require("./config");

const { Extra, Markup, Stage, session } = Telegraf;

const bot = new Telegraf(config.token);
const SceneGenerator = require("./Scenes");

const createScene = new SceneGenerator();
const magicBall = createScene.MagicBall();

bot.use(Telegraf.log());
const stage = new Stage([magicBall]);

bot.use(session());
bot.use(stage.middleware());

const keyboard = Markup.inlineKeyboard([
  Markup.callbackButton("Play Magic Ball Game", "ball"),
]);

bot.start((ctx) =>
  ctx.reply(`👋 Привет ${ctx.message.from.username}! `, Extra.markup(keyboard))
);
bot.on("sticker", (ctx) =>
  ctx.reply(`${ctx.message.from.username} 👍`, Extra.markup(keyboard))
);

bot.action("ball", async (ctx) => {
  ctx.scene.enter("ball");
});

bot.launch();
