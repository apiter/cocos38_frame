import { _decorator, CCFloat, Component, Enum, Node } from 'cc';
import EventCenter from './EventCenter';
import { CCEventEnum, EventEnum } from '../config/EventEnum';
import { LogUtil } from '../util/LogUtil';
const { ccclass, property } = _decorator;

enum TriggerType {
    OnStart = "OnStart",
    WaitEvent = "WaitEvent",
}

@ccclass('EventComponentBase')
export class EventComponentBase extends Component {
    @property({ type: Enum(TriggerType) })
    triggerType_e: TriggerType = TriggerType.OnStart
    @property(CCFloat)
    延迟执行时间 = 0;
    @property({ type: CCEventEnum, visible() { return this.triggerType_e == TriggerType.WaitEvent } })
    triggerEvent: EventEnum = CCEventEnum["None"];
    @property({ visible() { return this.triggerType_e == TriggerType.WaitEvent } })
    一次性事件 = true;
    @property({ type: CCEventEnum })
    taskDoneEmitEvent: EventEnum = CCEventEnum["None"];

    protected onLoad(): void {
        this._log_event_info()
    }

    protected start(): void {
        switch (this.triggerType_e) {
            case TriggerType.WaitEvent:
                this._listen_event()
                break;
            case TriggerType.OnStart:
                this._task_start()
                break;
        }
    }

    protected onDestroy(): void {
        EventCenter.off(this.triggerEvent, this.start, this)
    }

    private _listen_event(): void {
        this.一次性事件 ? EventCenter.once(this.triggerEvent, () => {
            this.延迟执行时间 > 0 ? this.scheduleOnce(this._task_start, this.延迟执行时间) : this._task_start()
        }, this) : EventCenter.on(this.triggerEvent, () => {
            this.延迟执行时间 > 0 ? this.scheduleOnce(this._task_start, this.延迟执行时间) : this._task_start()
        }, this);

    }

    protected _task_start(): void {
        LogUtil.log_with_func()
    }

    protected _task_done(): void {
        if (this.taskDoneEmitEvent != EventEnum.None) {
            EventCenter.emit(this.taskDoneEmitEvent)
        }
    }

    private _log_event_info(): void {
        let info = `组件:${this.constructor.name} 触发类型:${TriggerType[this.triggerType_e]} 监听事件：${EventEnum[this.triggerEvent]} 延长时间:${this.延迟执行时间} 一次性事件:${this.一次性事件} 任务完成事件:${EventEnum[this.taskDoneEmitEvent]}`
        let node_path = this.node.getPathInHierarchy()
        console.log(`节点:${node_path} ${info}`)
    }
}


