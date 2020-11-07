import select from './src/MtSelect.vue'
select.install = function (Vue) {
    Vue.component(select.name, select);
};

export default select