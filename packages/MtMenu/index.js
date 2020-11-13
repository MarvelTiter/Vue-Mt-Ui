import component from './src/MtMenu.vue'
component.install = function (Vue) {
    Vue.component(component.name, component);
};

export default component
