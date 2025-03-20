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
    @property({ type: [Enum(EventEnum)], visible() { return this.triggerType_e == TriggerType.WaitEvent }})
    triggerEvents: EventEnum[] = [];
    @property({ visible() { return this.triggerType_e == TriggerType.WaitEvent } })
    重复任务 = true;
    @property({ type: CCEventEnum })
    taskDoneEmitEvent: EventEnum = CCEventEnum["None"];

    private _doneEventCnt = 0;

    protected onLoad(): void {
        this._log_event_info()
    }

    protected start(): void {
        switch (this.triggerType_e) {
            case TriggerType.WaitEvent:
                this._listen_event()
                break;
            case TriggerType.OnStart:
                this.延迟执行时间 == 0 ? this._task_start() : this.scheduleOnce(this._task_start, this.延迟执行时间)
                break;
        }
    }

    protected onDestroy(): void {
        this.triggerEvents.forEach(event => {
            EventCenter.off(event, this._task_start, this)
        })
    }

    private _listen_event(): void {
        this.triggerEvents.forEach(event => {
            EventCenter.once(event, this._event_callback, this);
        })
    }

    protected _task_start(): void {
        LogUtil.log_with_func()
    }

    private _event_callback(): void {
        this._doneEventCnt++
        if (this._doneEventCnt >= this.triggerEvents.length) {
            this.延迟执行时间 > 0 ? this.scheduleOnce(this._task_start, this.延迟执行时间) : this._task_start()
        }
    }

    protected _task_done(): void {
        if (this.taskDoneEmitEvent != EventEnum.None) {
            EventCenter.emit(this.taskDoneEmitEvent)
        }
        if (this.重复任务) {
            this._doneEventCnt = 0
            this._listen_event()
        }
        console.log(`节点:${this.node.getPathInHierarchy()} ${this.constructor.name} 任务完成`)
    }

    private _log_event_info(): void {
        let info = `组件:${this.constructor.name} 触发类型:${TriggerType[this.triggerType_e]} 监听事件：${this.triggerEvents.join(";")} 延长时间:${this.延迟执行时间} 一次性事件:${this.重复任务} 任务完成事件:${EventEnum[this.taskDoneEmitEvent]}`
        let node_path = this.node.getPathInHierarchy()
        console.log(`事件信息  节点:${node_path} ${info}`)
    }
}


