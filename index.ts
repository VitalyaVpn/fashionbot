import { Telegraf, session, Scenes, Markup } from 'telegraf'
import { MyContext } from "./types";
import { stepOneHandler } from "./stepshandlers/stepOneHandler";
import { stepTwoHandler } from "./stepshandlers/stepTwoHandler";
import { stepThreeHandler } from "./stepshandlers/stepThreeHandler";
import { stepFourHandler } from "./stepshandlers/stepFourHandler";
import { stepFiveHandler } from "./stepshandlers/stepFiveHandler";
import { stepSixHandler } from "./stepshandlers/stepSixHandler";
import { stepSevenHandler } from "./stepshandlers/stepSevenHandler";


const superWizard = new Scenes.WizardScene(
    'super-wizard',
    async (ctx) => {
      ctx.scene.session.seven = [false, false, false, false, false, false, false, false]
      await ctx.reply(
        'Привет. Я помогу подобрать для вас крутой образ! Если готовы начать, жмите "Подобрать"',
        Markup.keyboard(['Подобрать'])
            .resize()
      )
      return ctx.wizard.next()
    },
    stepOneHandler,
    stepTwoHandler,
    stepThreeHandler,
    stepFourHandler,
    stepFiveHandler,
    stepSixHandler,
    stepSevenHandler
  )
  

  const bot = new Telegraf<MyContext>('407594915:AAEPjLrzQC00egjzfqyOSFDRmZIac3yUb9E') 
  const stage = new Scenes.Stage<MyContext>([superWizard])
  bot.use(session())
  bot.use((ctx, next) => {
    ctx.myContextProp = ''
    return next()
  })
  bot.use(stage.middleware())
  bot.command('start', ctx => {
     ctx.scene.enter('super-wizard')
  })
  bot.launch()


