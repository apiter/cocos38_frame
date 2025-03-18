import { _decorator, Component, Label, Node } from 'cc';
import { RecyclableScrollViewItem } from '../../frame/ui/RecyclableScrollView';
const { ccclass, property } = _decorator;

@ccclass('Scroll_item')
export class Scroll_item extends RecyclableScrollViewItem {
    updateItem(data: any) {
        // 示例：更新Label内容
        const label = this.getComponentInChildren(Label);
        if (label) label.string = ` ${data.title}`;
    }
}


