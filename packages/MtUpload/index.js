import component from './src/upload.vue'
component.install = function (Vue) {
    Vue.component(component.name, component);
};

export default component
