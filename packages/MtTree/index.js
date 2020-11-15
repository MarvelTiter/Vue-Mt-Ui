import component from './src/MtTree.vue'
component.install = function (Vue) {
    Vue.component(component.name, component);
};

export default component
