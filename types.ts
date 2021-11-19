import {Context, Scenes} from "telegraf";

export interface MyWizardSession extends Scenes.WizardSessionData {
    // will be available under `ctx.scene.session.myWizardSessionProp`
    one: number
    two: string
    three: string
    four: string
    five: string
    six: string
    seven: Array<boolean>
}

export interface MySession extends Scenes.WizardSession<MyWizardSession> {
    // will be available under `ctx.session.mySessionProp`
    mySessionProp: number
}

export interface MyContext extends Context {
    myContextProp: string
    session: MySession
    scene: Scenes.SceneContextScene<MyContext, MyWizardSession>
    wizard: Scenes.WizardContextWizard<MyContext>
}