import { CallbackFunc, IHogeEventProvider } from "@/interfaces/IHogeEventProvider"
import { IHogeEvent } from "@/interfaces/eventSchemas/IHogeEvent"
import { injectable } from "inversify";
import { Emitter, createNanoEvents } from "nanoevents"
import 'reflect-metadata'

@injectable()
export class HogeEventProvider implements IHogeEventProvider {
    private emitter: Emitter<IHogeEvent>;

    constructor(){
        this.emitter = createNanoEvents<IHogeEvent>();
    }

    public publish(push: boolean) {
        this.emitter.emit('push',push);
    }

    public subscribe(cbFunc: CallbackFunc) {
        this.emitter.on('push',push => {
            cbFunc(push);
        })
    }

}