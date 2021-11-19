import {Composer, Markup} from "telegraf";
import {MyContext} from "../types";

export const stepSixHandler = new Composer<MyContext>()

stepSixHandler.action(['6_1', '6_2', '6_3', '6_4'], async (ctx) => {
    await ctx.answerCbQuery()
    ctx.deleteMessage()
    ctx.scene.session.six = ctx.match[0]
    await ctx.reply('Какой стиль вам ближе? Можно выбрать несколько вариантов.',
        Markup.inlineKeyboard([
            [
                Markup.button.callback(`${ctx.scene.session.seven[0] ? '✅' : '➖'} Классически`, '7_1'),
                Markup.button.callback(`${ctx.scene.session.seven[1] ? '✅' : '➖'} Бохо`, '7_2'),
            ],
            [
                Markup.button.callback(`${ctx.scene.session.seven[2] ? '✅' : '➖'} Минимализм`, '7_3'),
                Markup.button.callback(`${ctx.scene.session.seven[3] ? '✅' : '➖'} Кежуал`, '7_4'),
            ],
            [
                Markup.button.callback(`${ctx.scene.session.seven[4] ? '✅' : '➖'} Ретро`, '7_5'),
                Markup.button.callback(`${ctx.scene.session.seven[5] ? '✅' : '➖'} Романтический`, '7_6'),
            ],
            [
                Markup.button.callback(`${ctx.scene.session.seven[6] ? '✅' : '➖'} Секси`, '7_7'),
                Markup.button.callback(`${ctx.scene.session.seven[7] ? '✅' : '➖'} Спортивный`, '7_8'),
            ],
            [Markup.button.callback(`Продолжить`, '7_rd', ctx.scene.session.seven.findIndex(item=> item) === -1)]

        ]))
    return ctx.wizard.next()
})