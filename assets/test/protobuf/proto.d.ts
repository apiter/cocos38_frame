import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of a Login. */
    interface ILogin {

        /** Login uId */
        uId?: (number|null);
    }

    /** Represents a Login. */
    class Login implements ILogin {

        /**
         * Constructs a new Login.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILogin);

        /** Login uId. */
        public uId: number;

        /**
         * Creates a new Login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Login instance
         */
        public static create(properties?: proto.ILogin): proto.Login;

        /**
         * Encodes the specified Login message. Does not implicitly {@link proto.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link proto.Login.verify|verify} messages.
         * @param message Login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Login;

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Login;

        /**
         * Verifies a Login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Login
         */
        public static fromObject(object: { [k: string]: any }): proto.Login;

        /**
         * Creates a plain object from a Login message. Also converts values to other types if specified.
         * @param message Login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Login
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Start. */
    interface IStart {

        /** Start uId */
        uId?: (number|null);

        /** Start username */
        username?: (string|null);
    }

    /** Represents a Start. */
    class Start implements IStart {

        /**
         * Constructs a new Start.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IStart);

        /** Start uId. */
        public uId: number;

        /** Start username. */
        public username: string;

        /**
         * Creates a new Start instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Start instance
         */
        public static create(properties?: proto.IStart): proto.Start;

        /**
         * Encodes the specified Start message. Does not implicitly {@link proto.Start.verify|verify} messages.
         * @param message Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Start message, length delimited. Does not implicitly {@link proto.Start.verify|verify} messages.
         * @param message Start message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Start message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Start;

        /**
         * Decodes a Start message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Start;

        /**
         * Verifies a Start message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Start message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Start
         */
        public static fromObject(object: { [k: string]: any }): proto.Start;

        /**
         * Creates a plain object from a Start message. Also converts values to other types if specified.
         * @param message Start
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Start, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Start to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Start
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BaseMessage. */
    interface IBaseMessage {

        /** BaseMessage type */
        type?: (proto.BaseMessage.MessageType|null);

        /** BaseMessage login */
        login?: (proto.ILogin|null);

        /** BaseMessage start */
        start?: (proto.IStart|null);
    }

    /** Represents a BaseMessage. */
    class BaseMessage implements IBaseMessage {

        /**
         * Constructs a new BaseMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IBaseMessage);

        /** BaseMessage type. */
        public type: proto.BaseMessage.MessageType;

        /** BaseMessage login. */
        public login?: (proto.ILogin|null);

        /** BaseMessage start. */
        public start?: (proto.IStart|null);

        /** BaseMessage payload. */
        public payload?: ("login"|"start");

        /**
         * Creates a new BaseMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BaseMessage instance
         */
        public static create(properties?: proto.IBaseMessage): proto.BaseMessage;

        /**
         * Encodes the specified BaseMessage message. Does not implicitly {@link proto.BaseMessage.verify|verify} messages.
         * @param message BaseMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IBaseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BaseMessage message, length delimited. Does not implicitly {@link proto.BaseMessage.verify|verify} messages.
         * @param message BaseMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IBaseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BaseMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BaseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.BaseMessage;

        /**
         * Decodes a BaseMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BaseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.BaseMessage;

        /**
         * Verifies a BaseMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BaseMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BaseMessage
         */
        public static fromObject(object: { [k: string]: any }): proto.BaseMessage;

        /**
         * Creates a plain object from a BaseMessage message. Also converts values to other types if specified.
         * @param message BaseMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.BaseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BaseMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BaseMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace BaseMessage {

        /** MessageType enum. */
        enum MessageType {
            UNKNOWN = 0,
            LOGIN = 1,
            START = 2
        }
    }
}
