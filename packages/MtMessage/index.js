import Message from "./src/main";
Message.install = function(Vue) {
    Vue.prototype["$tips"] = Message;
};
export default Message;
