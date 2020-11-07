import component from './src/MtDot.vue'
component.install = function (Vue) {
    Vue.component(component.name, component);
};

export default component