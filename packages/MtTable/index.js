import MtTable from "./src/MtTable";
import MtTableColumn from "./src/MtTableColumn";
import "./table.scss";

MtTable.install = function(Vue) {
    Vue.component(MtTable.name, MtTable);
};
MtTableColumn.install = function(Vue) {
    Vue.component(MtTableColumn.name, MtTableColumn);
};

export { MtTable, MtTableColumn };
