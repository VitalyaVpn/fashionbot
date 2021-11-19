import {Composer, Markup } from "telegraf";
import {MyContext} from "../types";
import {removeKeyboard} from "telegraf/typings/markup";

export const stepOneHandler = new Composer<MyContext>()

stepOneHandler.hears('Подобрать', async (ctx) => {
    await ctx.reply('Отлично!', Markup.removeKeyboard())
    await ctx.reply('Сколько вам лет?', Markup.inlineKeyboard([
        [
            Markup.button.callback('18-25', '2_1'),
        ],
        [
            Markup.button.callback('26-33', '2_2'),
        ],
        [
            Markup.button.callback('34-40', '2_3'),
        ],
        [
            Markup.button.callback('41-50', '2_4'),
        ],
        [
            Markup.button.callback('51-60', '2_5'),
        ]
    ]))
    return ctx.wizard.next()
})
