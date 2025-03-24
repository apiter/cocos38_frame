/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.Login = (function() {

        /**
         * Properties of a Login.
         * @memberof proto
         * @interface ILogin
         * @property {number|null} [uId] Login uId
         */

        /**
         * Constructs a new Login.
         * @memberof proto
         * @classdesc Represents a Login.
         * @implements ILogin
         * @constructor
         * @param {proto.ILogin=} [properties] Properties to set
         */
        function Login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Login uId.
         * @member {number} uId
         * @memberof proto.Login
         * @instance
         */
        Login.prototype.uId = 0;

        /**
         * Creates a new Login instance using the specified properties.
         * @function create
         * @memberof proto.Login
         * @static
         * @param {proto.ILogin=} [properties] Properties to set
         * @returns {proto.Login} Login instance
         */
        Login.create = function create(properties) {
            return new Login(properties);
        };

        /**
         * Encodes the specified Login message. Does not implicitly {@link proto.Login.verify|verify} messages.
         * @function encode
         * @memberof proto.Login
         * @static
         * @param {proto.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uId != null && Object.hasOwnProperty.call(message, "uId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uId);
            return writer;
        };

        /**
         * Encodes the specified Login message, length delimited. Does not implicitly {@link proto.Login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Login
         * @static
         * @param {proto.ILogin} message Login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Login message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Login} Login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Login message.
         * @function verify
         * @memberof proto.Login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uId != null && message.hasOwnProperty("uId"))
                if (!$util.isInteger(message.uId))
                    return "uId: integer expected";
            return null;
        };

        /**
         * Creates a Login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Login} Login
         */
        Login.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Login)
                return object;
            var message = new $root.proto.Login();
            if (object.uId != null)
                message.uId = object.uId | 0;
            return message;
        };

        /**
         * Creates a plain object from a Login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Login
         * @static
         * @param {proto.Login} message Login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uId = 0;
            if (message.uId != null && message.hasOwnProperty("uId"))
                object.uId = message.uId;
            return object;
        };

        /**
         * Converts this Login to JSON.
         * @function toJSON
         * @memberof proto.Login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Login
         * @function getTypeUrl
         * @memberof proto.Login
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Login.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Login";
        };

        return Login;
    })();

    proto.Start = (function() {

        /**
         * Properties of a Start.
         * @memberof proto
         * @interface IStart
         * @property {number|null} [uId] Start uId
         * @property {string|null} [username] Start username
         */

        /**
         * Constructs a new Start.
         * @memberof proto
         * @classdesc Represents a Start.
         * @implements IStart
         * @constructor
         * @param {proto.IStart=} [properties] Properties to set
         */
        function Start(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Start uId.
         * @member {number} uId
         * @memberof proto.Start
         * @instance
         */
        Start.prototype.uId = 0;

        /**
         * Start username.
         * @member {string} username
         * @memberof proto.Start
         * @instance
         */
        Start.prototype.username = "";

        /**
         * Creates a new Start instance using the specified properties.
         * @function create
         * @memberof proto.Start
         * @static
         * @param {proto.IStart=} [properties] Properties to set
         * @returns {proto.Start} Start instance
         */
        Start.create = function create(properties) {
            return new Start(properties);
        };

        /**
         * Encodes the specified Start message. Does not implicitly {@link proto.Start.verify|verify} messages.
         * @function encode
         * @memberof proto.Start
         * @static
         * @param {proto.IStart} message Start message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Start.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uId != null && Object.hasOwnProperty.call(message, "uId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified Start message, length delimited. Does not implicitly {@link proto.Start.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.Start
         * @static
         * @param {proto.IStart} message Start message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Start.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Start message from the specified reader or buffer.
         * @function decode
         * @memberof proto.Start
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.Start} Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Start.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Start();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uId = reader.int32();
                        break;
                    }
                case 2: {
                        message.username = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Start message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.Start
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.Start} Start
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Start.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Start message.
         * @function verify
         * @memberof proto.Start
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Start.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uId != null && message.hasOwnProperty("uId"))
                if (!$util.isInteger(message.uId))
                    return "uId: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a Start message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.Start
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.Start} Start
         */
        Start.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.Start)
                return object;
            var message = new $root.proto.Start();
            if (object.uId != null)
                message.uId = object.uId | 0;
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a Start message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.Start
         * @static
         * @param {proto.Start} message Start
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Start.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uId = 0;
                object.username = "";
            }
            if (message.uId != null && message.hasOwnProperty("uId"))
                object.uId = message.uId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this Start to JSON.
         * @function toJSON
         * @memberof proto.Start
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Start.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Start
         * @function getTypeUrl
         * @memberof proto.Start
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Start.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.Start";
        };

        return Start;
    })();

    proto.BaseMessage = (function() {

        /**
         * Properties of a BaseMessage.
         * @memberof proto
         * @interface IBaseMessage
         * @property {proto.BaseMessage.MessageType|null} [type] BaseMessage type
         * @property {proto.ILogin|null} [login] BaseMessage login
         * @property {proto.IStart|null} [start] BaseMessage start
         */

        /**
         * Constructs a new BaseMessage.
         * @memberof proto
         * @classdesc Represents a BaseMessage.
         * @implements IBaseMessage
         * @constructor
         * @param {proto.IBaseMessage=} [properties] Properties to set
         */
        function BaseMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseMessage type.
         * @member {proto.BaseMessage.MessageType} type
         * @memberof proto.BaseMessage
         * @instance
         */
        BaseMessage.prototype.type = 0;

        /**
         * BaseMessage login.
         * @member {proto.ILogin|null|undefined} login
         * @memberof proto.BaseMessage
         * @instance
         */
        BaseMessage.prototype.login = null;

        /**
         * BaseMessage start.
         * @member {proto.IStart|null|undefined} start
         * @memberof proto.BaseMessage
         * @instance
         */
        BaseMessage.prototype.start = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * BaseMessage payload.
         * @member {"login"|"start"|undefined} payload
         * @memberof proto.BaseMessage
         * @instance
         */
        Object.defineProperty(BaseMessage.prototype, "payload", {
            get: $util.oneOfGetter($oneOfFields = ["login", "start"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BaseMessage instance using the specified properties.
         * @function create
         * @memberof proto.BaseMessage
         * @static
         * @param {proto.IBaseMessage=} [properties] Properties to set
         * @returns {proto.BaseMessage} BaseMessage instance
         */
        BaseMessage.create = function create(properties) {
            return new BaseMessage(properties);
        };

        /**
         * Encodes the specified BaseMessage message. Does not implicitly {@link proto.BaseMessage.verify|verify} messages.
         * @function encode
         * @memberof proto.BaseMessage
         * @static
         * @param {proto.IBaseMessage} message BaseMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.login != null && Object.hasOwnProperty.call(message, "login"))
                $root.proto.Login.encode(message.login, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                $root.proto.Start.encode(message.start, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BaseMessage message, length delimited. Does not implicitly {@link proto.BaseMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.BaseMessage
         * @static
         * @param {proto.IBaseMessage} message BaseMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseMessage message from the specified reader or buffer.
         * @function decode
         * @memberof proto.BaseMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.BaseMessage} BaseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.BaseMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.login = $root.proto.Login.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.start = $root.proto.Start.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.BaseMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.BaseMessage} BaseMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseMessage message.
         * @function verify
         * @memberof proto.BaseMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.login != null && message.hasOwnProperty("login")) {
                properties.payload = 1;
                {
                    var error = $root.proto.Login.verify(message.login);
                    if (error)
                        return "login." + error;
                }
            }
            if (message.start != null && message.hasOwnProperty("start")) {
                if (properties.payload === 1)
                    return "payload: multiple values";
                properties.payload = 1;
                {
                    var error = $root.proto.Start.verify(message.start);
                    if (error)
                        return "start." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BaseMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.BaseMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.BaseMessage} BaseMessage
         */
        BaseMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.BaseMessage)
                return object;
            var message = new $root.proto.BaseMessage();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "LOGIN":
            case 1:
                message.type = 1;
                break;
            case "START":
            case 2:
                message.type = 2;
                break;
            }
            if (object.login != null) {
                if (typeof object.login !== "object")
                    throw TypeError(".proto.BaseMessage.login: object expected");
                message.login = $root.proto.Login.fromObject(object.login);
            }
            if (object.start != null) {
                if (typeof object.start !== "object")
                    throw TypeError(".proto.BaseMessage.start: object expected");
                message.start = $root.proto.Start.fromObject(object.start);
            }
            return message;
        };

        /**
         * Creates a plain object from a BaseMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.BaseMessage
         * @static
         * @param {proto.BaseMessage} message BaseMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = options.enums === String ? "UNKNOWN" : 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.proto.BaseMessage.MessageType[message.type] === undefined ? message.type : $root.proto.BaseMessage.MessageType[message.type] : message.type;
            if (message.login != null && message.hasOwnProperty("login")) {
                object.login = $root.proto.Login.toObject(message.login, options);
                if (options.oneofs)
                    object.payload = "login";
            }
            if (message.start != null && message.hasOwnProperty("start")) {
                object.start = $root.proto.Start.toObject(message.start, options);
                if (options.oneofs)
                    object.payload = "start";
            }
            return object;
        };

        /**
         * Converts this BaseMessage to JSON.
         * @function toJSON
         * @memberof proto.BaseMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseMessage
         * @function getTypeUrl
         * @memberof proto.BaseMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.BaseMessage";
        };

        /**
         * MessageType enum.
         * @name proto.BaseMessage.MessageType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} LOGIN=1 LOGIN value
         * @property {number} START=2 START value
         */
        BaseMessage.MessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "LOGIN"] = 1;
            values[valuesById[2] = "START"] = 2;
            return values;
        })();

        return BaseMessage;
    })();

    return proto;
})();

module.exports = $root;
