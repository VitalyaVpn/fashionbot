import {Composer, Markup} from "telegraf";
import {MyContext} from "../types";

export const stepSevenHandler = new Composer<MyContext>()

stepSevenHandler.action(['7_1', '7_2', '7_3', '7_4', '7_5', '7_6', '7_7', '7_8'], async (ctx) => {
    await ctx.answerCbQuery()
    const index: number = Number(ctx.match[0].substring(2)) - 1
    ctx.scene.session.seven[index] = !ctx.scene.session.seven[index]
    await ctx.editMessageReplyMarkup({
        inline_keyboard: [
            [
                Markup.button.callback(`${ctx.scene.session.seven[0] ? '✅' : '➖'} Классический`, '7_1'),
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
            [
                Markup.button.callback(`Продолжить`, '7_rd', ctx.scene.session.seven.findIndex(item=> item) === -1)
            ]

        ]
    })
    return ctx.wizard.selectStep(7)
})

stepSevenHandler.action('7_rd', async (ctx) => {

    if (ctx.scene.session.seven.findIndex(item=> item) === -1) {
        await ctx.answerCbQuery('Выберите один или несколько вариантов')
        return ctx.wizard.selectStep(7)
    }
    ctx.deleteMessage()
    await ctx.reply('Мы подобрали для вас несколько образов|||' +
        'Здесь будет общее описание, итог и образы')
    await ctx.reply('Мы помогли решить вашу проблему?', Markup.inlineKeyboard([
        Markup.button.callback('Да, спасибо!', '8_1'),
        Markup.button.callback('Нет, нужна консультация', '8_2'),
    ]))
    return ctx.scene.leave()
})