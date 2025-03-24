import { _decorator, Component, Node } from 'cc';
import eproto from "./proto.js"
const proto = eproto.proto
const { ccclass, property } = _decorator;

@ccclass('ProtoBufTest')
export class ProtoBufTest extends Component {

    private ws: WebSocket | null = null;
    start() {
        this.ws = new WebSocket("ws://localhost:8888");
        this.ws.binaryType = "arraybuffer";
        this.ws.onopen = () => {
            console.log('WebSocket 已连接');
            // this.sendMessage("Hello from Cocos Creator");

            let buf = proto.BaseMessage.encode({ type: proto.BaseMessage.MessageType.START, start: { uId: 1000, username: "smith2" } }).finish()
            this.sendMessage(buf)
        };

        this.ws.onmessage = async (event) => {
            try {
                let buffer: Uint8Array;

                if (event.data instanceof Blob) {
                    // 如果是 Blob，则读取成 ArrayBuffer
                    const arrayBuffer = await event.data.arrayBuffer();
                    buffer = new Uint8Array(arrayBuffer);
                } else {
                    // 直接是 ArrayBuffer
                    buffer = new Uint8Array(event.data);
                }

                // 确保 BaseMessage 存在
                if (!proto.BaseMessage) {
                    console.error("Protobuf 定义未加载");
                    return;
                }

                // 解析消息
                const decoded = proto.BaseMessage.decode(buffer);
                console.log(`收到服务器消息: ${JSON.stringify(decoded)}`);
                switch (decoded.type) {
                    case proto.BaseMessage.MessageType.START:
                        console.log(`Start消息: ${decoded.start?.username} uid:${decoded.start?.uId}`);
                        break;

                    case proto.BaseMessage.MessageType.LOGIN:
                        console.log(`登陆消息: ${decoded.login?.uId}`);
                        break;

                    default:
                        console.log("收到未知消息");
                }
            } catch (error) {
                console.error("Protobuf 解码错误:", error);
            }
        };

        this.ws.onclose = () => {
            console.log('WebSocket 连接关闭');
        };

        this.ws.onerror = (error) => {
            console.error('WebSocket 错误:', error);
        };

        // let buffer = eproto.proto.login.encode({ uId: 100 }).finish();

        // let login = eproto.proto.login.decode(buffer)
        // console.log(login.uId)
    }

    sendMessage(message: string | Uint8Array) {
        if (this.ws && this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(message);
            console.log(`发送消息: ${message}`);
        } else {
            console.warn('WebSocket 未连接，无法发送消息');
        }
    }

    onDestroy() {
        if (this.ws) {
            this.ws.close();
        }
    }
}


