import { _decorator, Component, Node } from 'cc';
import { EventComponentBase } from '../../frame/event/EventComponentBase';
const { ccclass, property } = _decorator;

@ccclass('SpindDoneEvent')
export class SpindDoneEvent extends EventComponentBase {
    protected _task_start(): void {
        super._task_start()
        this.scheduleOnce(this._task_done, 2)
    }
}


