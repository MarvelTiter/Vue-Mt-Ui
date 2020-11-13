import './assets/base.css'
import './assets/iconfont.css'
import MtCard from './MtCard'
import MtDateTimePicker from './MtDateTimePicker'
import MtDialog from './MtDialog'
import MtDot from './MtDot'
import MtImagePreview from './MtImagePreview'
import MtInput from './MtInput'
import MtPagination from './MtPagination'
import MtSelect from './MtSelect'
import MtLoading from './MtLoading'
import MtIcon from './MtIcon'
import MtMenu from './MtMenu'
import MtUniformGrid from './MtUniformGrid'
const components = [MtCard, MtDateTimePicker, MtDialog, MtDot, MtSelect, MtInput, MtImagePreview, MtPagination, MtLoading,MtIcon,MtMenu,MtUniformGrid]
const install = function (Vue) {
    if (install.installed) return
    components.map(c => {
        Vue.use(c)
    })
}

if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
    install(window.Vue)
}
export default {
    install,
    MtCard, MtDateTimePicker, MtDialog, MtDot, MtSelect, MtInput, MtImagePreview, MtPagination, MtLoading,MtIcon,MtMenu,MtUniformGrid
}
