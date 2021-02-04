import MtCheckBoxGroup from "./src/CheckBoxGroup";
import MtCheckBox from "./src/CheckBox";

MtCheckBoxGroup.install = function(Vue) {
    Vue.component(MtCheckBoxGroup.name, MtCheckBoxGroup);
};
MtCheckBox.install = function(Vue) {
    Vue.component(MtCheckBox.name, MtCheckBox);
};

export { MtCheckBoxGroup, MtCheckBox };
