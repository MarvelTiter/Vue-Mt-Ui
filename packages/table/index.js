/**
 * <Table :data="tableData">
 <Column label="title" prop="title"></akColumn>
 </Table>
 * */
import VTable from './table'
import VColumn from './column'

VTable.install = function(Vue){
    Vue.component(VTable.name,VTable);
}
VColumn.install = function(Vue){
    Vue.component(VColumn.name,VColumn);
}

export {VTable, VColumn}
