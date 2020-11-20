import component from "./src/button.vue";
component.install = function(Vue) {
    Vue.component(component.name, component);
};

export default component;
