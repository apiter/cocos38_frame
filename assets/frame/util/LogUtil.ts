import { _decorator, Component, Node } from 'cc';

export class LogUtil {
    // 工具函数：获取调用日志的源文件和函数名
    static getCallerInfo(): { functionName: string } {
        const error = new Error();
        const stackLines = error.stack?.split('\n') || [];

        // 根据堆栈格式适配不同环境（浏览器/Node.js）
        const callerLine = stackLines[3] || stackLines[2]; // 调整索引适配不同环境
        const match = callerLine.match(/\(?(.+):(\d+):(\d+)\)?/);
        const functionMatch = callerLine.match(/at (\S+)/);

        if (match) {
            // const filePath = match[1];
            const functionName = functionMatch?.[1] || 'anonymous';
            return { functionName };
        }

        return { functionName: 'unknown' };
    }

    // 工具函数：安全格式化参数（处理对象、循环引用等）
    static formatArgs(args: any[]): string {
        try {
            return args
                .map(arg => {
                    if (typeof arg === 'object' && arg !== null) {
                        return JSON.stringify(arg, (_, value) => {
                            // 处理 BigInt 和无法序列化的对象
                            if (typeof value === 'bigint') return `${value}n`;
                            if (value instanceof Error) return `Error: ${value.message}`;
                            return value;
                        }, 2);
                    }
                    return String(arg);
                })
                .join(', ');
        } catch {
            return '[无法序列化参数]';
        }
    }

    // 主日志函数
    static log_with_func(...args: any[]): void {
        const timestamp = new Date().toLocaleString();
        const { functionName } = LogUtil.getCallerInfo();
        const formattedArgs = LogUtil.formatArgs(args);

        console.log(
            `[${timestamp}] [${functionName}] 参数=>`,
            formattedArgs
        );
    }

}


