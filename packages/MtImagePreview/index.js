import component from './src/MtImagePreview.vue'
component.install = function (Vue) {
    Vue.component(component.name, component);
};

export default component