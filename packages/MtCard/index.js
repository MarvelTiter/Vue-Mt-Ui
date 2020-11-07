import component from './src/MtCard.vue'
component.install = function (Vue) {
    Vue.component(component.name, component);
};

export default component