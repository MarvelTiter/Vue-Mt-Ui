import dpk from './src/MtDatePicker.vue'
dpk.install = function (Vue) {
    Vue.component(dpk.name, dpk);
};

export default dpk