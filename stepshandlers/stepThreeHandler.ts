import {Composer, Markup} from "telegraf";
import {MyContext} from "../types";

export const stepThreeHandler = new Composer<MyContext>()

stepThreeHandler.action(['3_1', '3_2'], async (ctx) => {
    await ctx.answerCbQuery()
    ctx.deleteMessage()
    ctx.scene.session.three = ctx.match[0]
    await ctx.reply('Какое событие вам предстоит', Markup.inlineKeyboard([
        Markup.button.callback('Деловое', '4_1'),
        Markup.button.callback('Неформальное', '4_2'),
    ]))
    return ctx.wizard.next()
})