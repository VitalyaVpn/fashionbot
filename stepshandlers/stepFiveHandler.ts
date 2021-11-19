import {Composer, Markup} from "telegraf";
import {MyContext} from "../types";

export const stepFiveHandler = new Composer<MyContext>()

stepFiveHandler.action(['5_1', '5_2', '5_3', '5_4', '5_5', '5_6', '5_7', '5_8', '5_9', '5_10', '5_11', '5_12', '5_13', '5_14', '5_15', '5_16'], async (ctx) => {
    await ctx.answerCbQuery()
    ctx.deleteMessage()
    ctx.scene.session.five = ctx.match[0]
    await ctx.reply('Предполагается ли дресс-код?', Markup.inlineKeyboard([
        [
            Markup.button.callback('White tie', '6_1'),
            Markup.button.callback('Black tie', '6_2'),
        ],
        [
            Markup.button.callback('Коктейль', '6_3'),
            Markup.button.callback('Без дресс-кода', '6_4'),
        ]
    ]))
    return ctx.wizard.next()
})