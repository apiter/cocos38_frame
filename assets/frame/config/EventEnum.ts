import { _decorator, Component, Enum, Node } from 'cc';
const { ccclass, property } = _decorator;

export enum EventEnum {
    "None" = "None",
    "点击开始按钮" = "点击开始按钮",
    "转动完成" = "转动完成"
}

export const CCEventEnum = Enum(EventEnum);

