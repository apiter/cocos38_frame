import { _decorator, Component, Node, Prefab, ScrollView, UITransform, Label, instantiate, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

export class RecyclableScrollViewItem extends Component {
    updateItem(data: any) { }
}

@ccclass
export default class RecyclableScrollView extends Component {
    @property(Prefab) itemTemplate: Prefab = null; // 列表项预制体
    @property bufferSize: number = 2;              // 缓冲数量
    @property spacing: number = 5;                 // 项间距
    @property top: number = 5;                      // 顶部间距
    @property bottom: number = 5;                   // 底部间距  


    private _content: Node = null;                // 滚动内容容器
    private _items: Node[] = [];                  // 活动节点池
    private _data: any[] = [];                    // 数据源
    private _itemHeight: number = 0;              // 项高度（含间距）
    private _itemAnchorY: number = 0
    private _visibleCount: number = 0;            // 可视区域最大项数
    private _currentIndex: number = 0; // 当前可见区域起始索引
    protected onLoad(): void {
        this._currentIndex = 0
        this.initializeComponents();
        this.setupEventListeners();
    }

    start() {
    }

    // 初始化组件和尺寸
    private initializeComponents() {
        const viewNode = this.node.getChildByName('view');
        this._content = viewNode.getChildByName('content');

        const templateNode = instantiate(this.itemTemplate);
        const uiTransform = templateNode.getComponent(UITransform);
        this._itemHeight = uiTransform.height + this.spacing;
        this._itemAnchorY = uiTransform.anchorY
        templateNode.destroy();

        const viewTransform = viewNode.getComponent(UITransform);
        const viewHeight = viewTransform.height;
        this._visibleCount = Math.ceil(viewHeight / this._itemHeight) + this.bufferSize * 2;

        this.createPoolItems();
    }

    // 创建节点池
    private createPoolItems() {
        for (let i = 0; i < this._visibleCount; i++) {
            const item = instantiate(this.itemTemplate);
            this._content.addChild(item);
            this._items.push(item);
            item.active = false; // 初始隐藏
        }
    }

    // 设置数据源
    public setData(data: any[]) {
        this._data = data;
        const contentTransform = this._content.getComponent(UITransform);
        contentTransform.height = this._data.length * this._itemHeight + this.top + this.bottom;
        this.updateAllItems();
    }

    // 更新所有可见项

    private updateAllItems() {
        const scrollPos = this._content.position.y;
        this._currentIndex = Math.max(0, Math.floor(-scrollPos / this._itemHeight));
        this.recycleItems();
    }

    // 滚动事件监听
    private setupEventListeners() {
        const scrollView = this.node.getComponent(ScrollView);
        scrollView.node.on(ScrollView.EventType.SCROLLING, this.onScrolling, this);
    }

    private onScrolling() {
        // 新增位置计算逻辑
        const scrollView = this.node.getComponent(ScrollView);
        const offsetY = scrollView.getScrollOffset().y;
        this._currentIndex = Math.floor(offsetY / this._itemHeight);
        this.recycleItems();
    }

    // 核心回收逻辑
    private recycleItems() {
        if (!this._content || this._items.length === 0) return; // 防止空指针

        const startIndex = Math.max(0, this._currentIndex - this.bufferSize);
        const endIndex = Math.min(this._data.length, startIndex + this._visibleCount);
        console.log(`start:${startIndex}, end:${endIndex}`)

        // 添加索引范围保护
        if (startIndex >= this._data.length) return;
        this._items.forEach((item, poolIndex) => {
            const dataIndex = startIndex + poolIndex;

            if (dataIndex < endIndex) {
                this.updateItem(item, this._data[dataIndex], dataIndex);
                let yPos = -dataIndex * this._itemHeight - (this._itemHeight * (1 - this._itemAnchorY)) - this.top
                item.setPosition(0, yPos);
                item.active = true;
            } else {
                item.active = false;
            }
        });
    }

    // 单项更新方法（需自定义实现）
    private updateItem(item: Node, data: any, index: number) {
        let comp = item.getComponent(RecyclableScrollViewItem)
        comp?.updateItem(data)
    }

    // 销毁时移除监听
    onDestroy() {
        const scrollView = this.node.getComponent(ScrollView);
        scrollView.node.off(ScrollView.EventType.SCROLLING, this.onScrolling, this);
    }
}