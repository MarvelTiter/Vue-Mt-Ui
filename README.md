# 自用VueUI组件

## 1. Button 按钮
```html
<mt-button>content</mt-button>
```
### props
1. type: default / primary / info / text
2. size: mediun / small / mini
3. icon
4. accept-enter (是否响应Enter)
5. accept-key (是否响应某个按钮，优先级低于Enter)

## 2. Card 卡片布局
```html
<mt-card>content</mt-card>
```

## 3. DatePicker 日期选择器
```html
<mt-date-picker></mt-date-picker>
```
### props
1. width 组件宽度
2. label 前置label显示
3. disabled 是否启用
4. format 值格式化字符串 (yyyy-MM-dd)

## 4. Dialog 模态窗口
```html
<mt-dialog>content</mt-dialog>
```
### props
1. title 标题
2. top 顶部距离 (15vh)
3. center 标题位置(默认居中)
4. visible 是否显示
5. width dialog宽度(默认50%)

## 5. Dot 悬浮触点
```html
<mt-dot>content</mt-dot>
```
### props
1. left 左边距
2. top 上边距

## 6. ImagePreview 图片查看
```html
<mt-image-preview></mt-image-preview>
```
### props
1. image-list 数据源
2. visible 是否显示
3. activeIndex 当前页
4. src 图片路径对应的属性

## 7. Input 输入框
```html
<mt-input></mt-input>
```
### props
1. label 前置label
2. prefix 前缀
3. disabled 原生属性
4. readonly 原生属性
5. type 原生属性
6. placeholder 原生属性
7. width 组件宽度

## 8. Loading
```html
<div v-mt-loading="loading"></div>
```

## 9. Message
``` JavaScript
this.$tips.success(msg)

this.$tips.error(msg)

this.$tips({
    type:success/error,
    message:msg,
    duration:3000
})
```

## 10. Pagination 分页组件
```html
<mt-pagination></mt-pagination>
```
### props
1. page-index
2. page-size
3. total
### event
1. index-change

## 11. Select
```html
<mt-select></mt-select>
```
### props
1. label 前置label
2. data 数据源
3. optionLabel option显示值
4. optionValue option值
5. filtable 是否可筛选(默认false)
6. width 组件宽度
7. disabled 是否启用

## 12. Table 组件
``` HTML
<mt-table>
    <mt-table-column></mt-table-column>
</mt-table>
```
### table props
1. column 列配置(优先级高于Template描述)
2. source 数据源
3. show-title 是否显示title属性(默认false)
4. empty-text 空数据时显示内容(默认'暂无数据')
5. stripe 隔行变色(默认true)
6. border 显示边框(默认true)
7. ellipsis 内容溢出隐藏(默认true)

### column props
1. prop 列内容
2. label 列标题
3. width 列宽度
4. sortable 是否可排序
5. align 内容位置(left/center/right,默认center)
6. type 列类型(index/selection/extend(未实现))

## 13. Tree 组件
```html
<mt-tree></mt-tree>
```
### props
1. nodes 节点
2. left-space 左顶格宽度

## 14. UniformGrid
```HTML
<mt-uniform-grid :column="6">
    <mt-uniform-grid :column="2" :colspan="4">
        <mt-input></mt-input>
        <mt-input></mt-input>
        <mt-input></mt-input>
        <mt-input></mt-input>
        <mt-input></mt-input>
    </mt-uniform-grid>
    <mt-uniform-grid :column="1" :colspan="2">
        <mt-button></mt-button>
        <mt-button></mt-button>
        <mt-button></mt-button>
        <mt-button></mt-button>
    </mt-uniform-grid>
</mt-uniform-grid>
```

### props
1. gutter 间隔 默认0
2. column 列数 默认5
3. rowspan
4. colspan
