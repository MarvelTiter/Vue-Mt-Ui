# 自用 VueUI 组件

## 1. Button 按钮

```html
<mt-button>content</mt-button>
```

### props

|     属性     |                 说明                 |  默认值   |
| :----------: | :----------------------------------: | :-------: |
|     type     | 类型 default / primary / info / text |   info    |
|     size     |      大小 mediun / small / mini      |  normal   |
|     icon     |                                      |           |
| accept-enter |            是否响应 Enter            |   false   |
|  accept-key  |  是否响应某个按钮，优先级低于 Enter  | undefined |

### event

| 事件  |   说明   |   参数    |
| :---: | :------: | :-------: |
| click | 点击事件 | eventArgs |

---

## 2. Card 卡片布局

```html
<mt-card>content</mt-card>
```

### slot

|  名字   |   说明   |
| :-----: | :------: |
| default |   body   |
| header  | 标题显示 |

---

## 3. DatePicker 日期选择器

```html
<mt-date-picker></mt-date-picker>
```

### props

|   属性   |      说明      |   默认值   |
| :------: | :------------: | :--------: |
|  width   |      宽度      |    100%    |
|  label   |    前缀显示    |            |
| disabled |    是否启用    |    true    |
|  format  | 值格式化字符串 | yyyy-MM-dd |

---

## 4. Dialog 模态窗口

```html
<mt-dialog>content</mt-dialog>
```

### props

|  属性   |   说明   | 默认值 |
| :-----: | :------: | :----: |
|  title  |   标题   |        |
|   top   | 顶部距离 |  15vh  |
| center  | 标题位置 | center |
| visible | 是否显示 | false  |
|  width  |   宽度   |  50%   |

### slot

|  名字   |   说明   |
| :-----: | :------: |
| default |   body   |
| header  | 标题显示 |

---

## 5. Dot 悬浮触点

```html
<mt-dot>content</mt-dot>
```

### props

| 属性 |  说明  | 默认值 |
| :--: | :----: | :----: |
| left | 左边距 | 默认值 |
| top  | 上边距 | 默认值 |

### slot

|  名字   | 说明 |
| :-----: | :--: |
| default | body |

---

## 6. ImagePreview 图片查看

```html
<mt-image-preview></mt-image-preview>
```

### props

|    属性     |        说明        | 默认值 |
| :---------: | :----------------: | :----: |
| image-list  |       数据源       |        |
|   visible   |      是否显示      | false  |
| activeIndex |       当前页       |        |
|     src     | 图片路径对应的属性 |        |

### slot

|  名字   |    说明    |
| :-----: | :--------: |
| default | 当前项说明 |

---

## 7. Input 输入框

```html
<mt-input></mt-input>
```

### props

|    属性     |   说明   | 默认值 |
| :---------: | :------: | :----: |
|    label    | 前缀说明 |        |
|   prefix    |   前缀   |        |
|  disabled   | 原生属性 | false  |
|  readonly   | 原生属性 | false  |
|    type     | 原生属性 |        |
| placeholder | 原生属性 |        |
|    width    | 组件宽度 |  100%  |
|  pre-icon   | 前缀图标 |        |
|  suf-icon   | 后缀图标 |        |

### event

| 事件  |   说明   |   参数    |
| :---: | :------: | :-------: |
| input | 输入事件 |   text    |
| focus | 获得焦点 | eventArgs |
| keyup | 键盘输入 | eventArgs |

---

## 8. Loading

```html
<div v-mt-loading="loading"></div>
```

## 9. Message

```JavaScript
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

|    属性    |   说明   | 默认值 |
| :--------: | :------: | :----: |
| page-index |  当前页  |        |
| page-size  | 每页数量 |        |
|   total    | 数据总数 |        |

### event

|     事件      |     说明     |   参数   |
| :-----------: | :----------: | :------: |
| @index-change | 页数变更函数 | newIndex |

---

## 11. Select

```html
<mt-select></mt-select>
```

### props

|    属性     |     说明      | 默认值 |
| :---------: | :-----------: | :----: |
|    label    |   前缀说明    |        |
|    data     |    数据源     |        |
| optionLabel | option 显示值 |  text  |
| optionValue |   option 值   | value  |
|  filtable   |  是否可筛选   | false  |
|    width    |   组件宽度    |  100%  |
|  disabled   |   是否启用    | false  |

---

## 12. Table 组件

```HTML
<mt-table>
    <mt-table-column></mt-table-column>
</mt-table>
```

### table

#### props

|    属性    |        说明         |  默认值  |
| :--------: | :-----------------: | :------: |
|   column   |       列配置        |          |
|   source   |       数据源        |          |
| show-title | 是否显示 title 属性 |  false   |
| empty-text |  空数据时显示内容   | 暂无数据 |
|   stripe   |      隔行变色       |   true   |
|   border   |      显示边框       |   true   |
|  ellipsis  |    内容溢出隐藏     |   true   |

#### event

|      事件      |  说明  |   参数   |
| :------------: | :----: | :------: |
| @select-change | 选择列 | 已选列数 |

### column props

|   属性   |                 说明                  | 默认值 |
| :------: | :-----------------------------------: | :----: |
|   prop   |                列内容                 |        |
|  label   |                列标题                 |        |
|  width   |                列宽度                 |        |
| sortable |              是否可排序               | false  |
|  align   |      内容位置 left/center/right       | center |
|   type   | 列类型 index/selection/extend(未实现) | 默认值 |

### column slot

|  名字   |  说明  |
| :-----: | :----: |
| default | 列模板 |

---

## 13. Tree 组件

```html
<mt-tree></mt-tree>
```

### props

|    属性    |    说明    | 默认值 |
| :--------: | :--------: | :----: |
|   nodes    |    节点    |        |
| left-space | 左缩进宽度 |  10px  |

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

|  属性   | 说明 | 默认值 |
| :-----: | :--: | :----: |
| gutter  | 间隔 |   0    |
| column  | 列数 |   5    |
| rowspan |      |
| colspan |      |

### slot

|  名字   | 说明 |
| :-----: | :--: |
| default | body |

## Upload

```html
<mt-upload> </mt-upload>
```

### props

|     属性     |       说明       |   默认值    |
| :----------: | :--------------: | :---------: |
|    accept    |     接受类型     |     \*      |
|   multiple   |       多选       |    false    |
|  autoUpload  | 选择完成自动上传 |    false    |
|    action    |     上传地址     |             |
|    limit     |   文件数量限制   |      0      |
|   headers    |      请求头      |     []      |
| beforeUpload |  上传前回调函数  | return true |

### event

|    事件     |   说明   |           参数            |
| :---------: | :------: | :-----------------------: |
| on-progress | 上传进度 |    eventArgs (percent)    |
|  on-error   | 错误回调 |         eventArgs         |
| on-success  | 成功回调 | response,rawFile,fileList |

### slot

| 名字 |   说明   |
| :--: | :------: |
| tip  | 上传描述 |

## Checkbox CheckboxGroup

```
<mt-checkbox-group v-model="MutiSelect">
    <mt-checkbox label="1"></mt-checkbox>
    <mt-checkbox label="2"></mt-checkbox>
    <mt-checkbox label="3"></mt-checkbox>
</mt-checkbox-group>
    <mt-checkbox label="是否XXX" :check-value="[1,0]"></mt-checkbox>

```

### CheckboxGroup props

|   属性   |          说明          | 默认值 |
| :------: | :--------------------: | :----: |
| request  | 返回类型(string,array) | string |
| disabled |        是否可用        | false  |

### Cehckbox props

|    属性    |            说明             | 默认值 |
| :--------: | :-------------------------: | :----: |
|   label    |        选项显示内容         |        |
| checkValue | 自定义值，长度为 2 的数组， |        |
|  disabled  |          是否可用           | false  |

## LabelInput

可编辑 label

```
<mt-label-input></mt-label-input>
```

### props

|    属性     |         说明         |  默认值   |
| :---------: | :------------------: | :-------: |
|    field    |       绑定字段       |           |
|    edit     |      是否可编辑      | undefined |
| placeholder |     placeholder      |    ''     |
|   showFix   | label 下是否显示修饰 |   false   |
|   prefix    |         前缀         |           |
|   suffix    |         后缀         |           |

## Radio

```
<mt-radio>
    <mt-radio-item label="选项1" value="1"></mt-radio-item>
    <mt-radio-item label="选项2" value="2"></mt-radio-item>
    <mt-radio-item label="选项3" value="3"></mt-radio-item>
</mt-radio>
```

### Radio props

|   属性   |   说明   | 默认值 |
| :------: | :------: | :----: |
|  title   | 前缀说明 |        |
| disabled | 是否可用 | false  |

### RadioItem props

| 属性  |    说明    | 默认值 |
| :---: | :--------: | :----: |
| label |  选项说明  |        |
| value | 选项选中值 |        |
