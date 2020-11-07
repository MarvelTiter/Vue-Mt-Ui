import dialog from './src/MtDialog.vue'
dialog.install = function (Vue) {
    Vue.component(dialog.name, dialog);
};

export default dialog