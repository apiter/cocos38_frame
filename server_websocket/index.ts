import WebSocket, { WebSocketServer } from 'ws';
import protobuf from 'protobufjs';
import eproto from "./proto.js"
const proto = eproto.proto;

// 创建 WebSocket 服务器，监听 8888 端口
const wss = new WebSocketServer({ port: 8888 });

console.log("WebSocket 服务器启动，监听端口 8888");

wss.on('connection', (ws) => {
    console.log('新的客户端连接');

    // 监听客户端发送的消息
    ws.on('message', (message) => {

        const buffer = message instanceof Buffer ? new Uint8Array(message) : message;
        //@ts-ignore
        const decoded = proto.BaseMessage.decode(buffer);
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

        // 发送回复
        
        let responseMessage = proto.BaseMessage.encode({ type: proto.BaseMessage.MessageType.LOGIN, login: { uId: 10200 } }).finish()
        ws.send(responseMessage);

    });

    // 监听客户端关闭连接
    ws.on('close', () => {
        console.log('客户端断开连接');
    });

    // 监听错误
    ws.on('error', (error) => {
        console.error('WebSocket 错误:', error);
    });
});