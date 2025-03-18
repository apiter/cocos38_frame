import { _decorator, Component, Node } from 'cc';
import RecyclableScrollView from '../../frame/ui/RecyclableScrollView';
const { ccclass, property } = _decorator;

@ccclass('Scene')
export class Scene extends Component {
    @property(RecyclableScrollView)
    scrollView: RecyclableScrollView = null

    start() {
        let data = []
        for (let i = 0; i < 20; ++i) {
            data.push({ title: i.toString() })
        }
        this.scrollView.setData(data)
    }

    update(deltaTime: number) {

    }
}


