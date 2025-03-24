protobufjs 使用说明
## 客户端
测试了收发消息，并定义了不同消息协议和相关处理
### 1、在项目根目录执行 安装依赖包(remove是为了清除当前环境，没装过可以不管)
npm remove -g protobufjs // 移除全局安装的protobufjs
npm remove -g protobufjs-cli // 移除全局安装的protobufjs-cli
npm remove -g pbjs // 这个pbjs是可以单独安装的，我也不知道为什么。
npm remove --save protobufjs // 移除项目中的
npm remove --save protobufjs-cli // 移除项目中的
npm remove --save pbjs // 移除项目中的

npm install --save protobufjs // 安装到项目中，这会安装最新的protobufjs
npm install --save protobufjs-cli // 安装到项目中，这会安装最新的protobufjs-cli

### 2、新建proto文件

### 3、根据proto文件生成程序用的解析文件
####    1、生成js文件 npx pbjs -t static-module -w commonjs ./proto/*.proto -o ./assets/test/protobuf/proto.js,
####    2、生成.d.ts文件 npx pbts ./assets/test/protobuf/proto.js -o ./assets/test/protobuf/proto.d.ts"
####    可以将这两件命令写入package.json文件

### 4、以上步骤完成后, 就可以使用了
import eproto from "./proto.js"

//编码
let buffer = eproto.proto.login.encode({ uId: 100 }).finish();
//解码
let login = eproto.proto.login.decode(buffer)
console.log(login.uId)

### 参考链接
https://blog.csdn.net/abc126655/article/details/140472571?spm=1001.2014.3001.5501
https://forum.cocos.org/t/topic/154256

## 服务端
将客户端proto生成的关件拷给服务端
根目录下的server_websokcet用VSCode打开，可以F5直接启测试服

## 记得在项目根目录和服务器目录运行npm install