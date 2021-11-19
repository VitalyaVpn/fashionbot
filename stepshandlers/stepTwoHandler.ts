import {Composer, Markup} from "telegraf";
import {MyContext} from "../types";

export const stepTwoHandler = new Composer<MyContext>()


stepTwoHandler.action(['2_1', '2_2', '2_3', '2_4', '2_5'], async (ctx) => {
    await ctx.answerCbQuery()
    ctx.deleteMessage()
    ctx.scene.session.two = ctx.match[0]
    await ctx.reply('Укажите ваш пол', Markup.inlineKeyboard([
        Markup.button.callback('Женский', '3_1'),
        Markup.button.callback('Мужской', '3_2'),
    ]))
    return ctx.wizard.next()
})