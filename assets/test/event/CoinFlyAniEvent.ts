import { _decorator, Component, Node } from 'cc';
import { EventComponentBase } from '../../frame/event/EventComponentBase';
const { ccclass, property } = _decorator;

@ccclass('CoinFlyAniEvent')
export class CoinFlyAniEvent extends EventComponentBase {
   
    protected _task_start(): void {
        super._task_start()
        console.log('开始金币飞行动画')
    }
}


