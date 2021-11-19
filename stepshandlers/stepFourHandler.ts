import {Composer, Markup} from "telegraf";
import {MyContext} from "../types";

export const stepFourHandler = new Composer<MyContext>()

stepFourHandler.action(['4_1', '4_2'], async (ctx) => {
    await ctx.answerCbQuery()
    ctx.deleteMessage()
    ctx.scene.session.four = ctx.match[0]
    await ctx.reply('Куда вы собираетесь?',
        Markup.inlineKeyboard([
            [
                Markup.button.callback('Конференция – слушатель', '5_1'),
                Markup.button.callback('Конференция – спикер', '5_2'),
            ],
            [
                Markup.button.callback('В офис после перерыва', '5_3'),
                Markup.button.callback('Встреча с клиентом', '5_4'),
            ],
            [
                Markup.button.callback('Собеседование', '5_5'),
                Markup.button.callback('Интервью', '5_6'),
            ],
            [
                Markup.button.callback('Ужин с коллегами', '5_7'),
                Markup.button.callback('Торжественное событие', '5_8'),
            ],
            [
                Markup.button.callback('Выходной с детьми', '5_9'),
                Markup.button.callback('Свидание', '5_10'),
            ],
            [
                Markup.button.callback('Торжественное событие', '5_11'),
                Markup.button.callback('Встреча с друзьями', '5_12'),
            ],
            [
                Markup.button.callback('Встреча с родителями', '5_13'),
                Markup.button.callback('Выход в ресторан', '5_14'),
            ],
            [
                Markup.button.callback('Вечеринка в баре', '5_15'),
                Markup.button.callback('Шоппинг', '5_16'),
            ]
        ])
    )
    return ctx.wizard.next()
})