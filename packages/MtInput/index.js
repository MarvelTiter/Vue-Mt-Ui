import component from './src/MtInput.vue'
component.install = function (Vue) {
    Vue.component(component.name, component);
};

export default component