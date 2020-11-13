import component from './src/MtIcon.vue'
component.install = function (Vue) {
    Vue.component(component.name, component);
};

export default component
