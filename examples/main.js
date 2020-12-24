import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./../packages/assets/base.scss";
import "./../packages/assets/iconfont.css";
import MtInput from "./../packages/MtInput";
import MtSelect from "./../packages/MtSelect";
import MtDateTimePicker from "./../packages/MtDateTimePicker";
import MtPagination from "./../packages/MtPagination";
import MtLoading from "./../packages/MtLoading";
import MtIcon from "./../packages/MtIcon";
import MtTree from "./../packages/MtTree";
import MtMenu from "./../packages/MtMenu";
import MtDot from "./../packages/MtDot";
import MtDialog from "./../packages/MtDialog";
import MtUniformGrid from "./../packages/MtUniformGrid";
import MtMessage from "./../packages/MtMessage";
import MtCard from "./../packages/MtCard";
import { MtTable, MtTableColumn } from "./../packages/MtTable";
import MtUpload from './../packages/MtUpload';
import MtImagePreview from './../packages/MtImagePreview';
import MtLabelInput from './../packages/MtLabelInput';

Vue.use(MtInput);
Vue.use(MtCard);
Vue.use(MtSelect);
Vue.use(MtDateTimePicker);
Vue.use(MtPagination);
Vue.use(MtLoading);
Vue.use(MtIcon);
Vue.use(MtTree);
Vue.use(MtDot);
Vue.use(MtDialog);
Vue.use(MtUniformGrid);
Vue.use(MtTable);
Vue.use(MtTableColumn);
Vue.use(MtUpload);
Vue.use(MtImagePreview);
Vue.use(MtMenu);
Vue.use(MtLabelInput);
Vue.config.productionTip = false;
Vue.$message = MtMessage;
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
