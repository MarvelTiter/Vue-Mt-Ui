import component from "./src/labelinput.vue";
component.install = function(Vue) {
    Vue.component(component.name, component);
};

export default component;
