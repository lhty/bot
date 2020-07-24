const Scene = require("telegraf/scenes/base");

const options = [
  "Это точно 👌",
  "Это решительно так ☝️",
  "Без сомнения 🤗",
  "Определенно да 👍",
  "Вы можете на это расчитывать 👐",
  "Как я понимаю, да 😃",
  "Наверняка 🧐",
  "Выглядит убедительно 😎",
  "Да 🤞",
  "Знаки указывают на да 🤏",
  "Не рассчитывай на это 🤲",
  "Мой ответ - нет ☝️",
  "Мои источники говорят нет 🤳",
  "Перспектива не очень хорошая 😐",
  "Очень сомнительно 🙄",
  "Ответить туманно, попробуйте еще раз 🥴",
  "Спроси позже 🤙",
  "Лучше не говорить тебе сейчас 🤐",
  "Не могу предсказать сейчас 😵",
  "Сконцентрируйся и спроси снова 😑",
];

class SceneGenerator {
  MagicBall() {
    const ball = new Scene("ball");
    ball.enter(async (ctx) => {
      await ctx.reply("Задай мне любой вопрос 🧐 🎱");
    });
    ball.on("text", async (ctx) => {
      const msg = ctx.message.text;
      const answer = options[Math.floor(options.length * Math.random())];

      if (msg.includes("?") && msg.length > 2 && /[А-я]/g.test(msg)) {
        await ctx.reply(`📣   ${answer}`);
        ctx.scene.leave();
      } else {
        await ctx.reply(
          /[А-я]/g.test(msg)
            ? "🤔   Это не похоже на вопрос"
            : "🇷🇺   Я понимаю только русский"
        );
        ctx.scene.reenter();
      }
    });
    return ball;
  }
}

module.exports = SceneGenerator;
