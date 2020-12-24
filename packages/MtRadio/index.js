import MtRadio from "./src/Radio";
import MtRadioItem from "./src/RadioItem";

MtRadio.install = function(Vue) {
    Vue.component(MtRadio.name, MtRadio);
};
MtRadioItem.install = function(Vue) {
    Vue.component(MtRadioItem.name, MtRadioItem);
};

export { MtRadio, MtRadioItem };
