import "./assets/base.scss";
import "./assets/_table.scss";
import "./assets/iconfont.css";
import MtCard from "./MtCard";
import MtDateTimePicker from "./MtDateTimePicker";
import MtDialog from "./MtDialog";
import MtDot from "./MtDot";
import MtImagePreview from "./MtImagePreview";
import MtInput from "./MtInput";
import MtPagination from "./MtPagination";
import MtSelect from "./MtSelect";
import MtLoading from "./MtLoading";
import MtIcon from "./MtIcon";
import MtTree from "./MtTree";
import MtMenu from "./MtMenu";
import MtUniformGrid from "./MtUniformGrid";
import MtMessage from "./MtMessage";
import MtButton from "./MtButton";
import { MtTable, MtTableColumn } from "./MtTable";
import { MtRadio, MtRadioItem } from "./MtRadio";
import { MtCheckBoxGroup, MtCheckBox } from "./MtCheckBox";
import MtUpload from "./MtUpload";
import MtLabelInput from "./MtLabelInput";
const components = [
    MtCard,
    MtDateTimePicker,
    MtDialog,
    MtDot,
    MtSelect,
    MtInput,
    MtImagePreview,
    MtPagination,
    MtLoading,
    MtIcon,
    MtTree,
    MtUniformGrid,
    MtMessage,
    MtTable,
    MtTableColumn,
    MtButton,
    MtUpload,
    MtMenu,
    MtRadio,
    MtRadioItem,
    MtLabelInput,
    MtCheckBoxGroup,
    MtCheckBox
];
const install = function(Vue) {
    if (install.installed) return;
    components.map(c => {
        Vue.use(c);
    });
};

if (typeof window !== "undefined" && typeof window.Vue !== "undefined") {
    install(window.Vue);
}
export default {
    install,
    MtCard,
    MtDateTimePicker,
    MtDialog,
    MtDot,
    MtSelect,
    MtInput,
    MtImagePreview,
    MtPagination,
    MtLoading,
    MtIcon,
    MtTree,
    MtUniformGrid,
    MtMessage,
    MtTable,
    MtTableColumn,
    MtButton,
    MtUpload,
    MtMenu,
    MtRadio,
    MtRadioItem,
    MtLabelInput,
    MtCheckBoxGroup,
    MtCheckBox
};
