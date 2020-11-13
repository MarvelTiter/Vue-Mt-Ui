<template>
  <div
    id="app"
    v-mt-loading="loading"
    style="background: rgba(0, 46, 85, 0.7); height: 500px"
  >
    <mt-uniform-grid :column="7" :gutter="10">
      <mt-date-picker
        label="开始日期"
        v-model="queryObject.StartTime"
        format="yyyy-MM-dd"
      ></mt-date-picker>
      <mt-date-picker
        label="结束日期"
        v-model="queryObject.EndTime"
        format="yyyy-MM-dd"
      ></mt-date-picker>
      <mt-input label="号牌号码" v-model="queryObject.HPHM"></mt-input>
      <mt-input
        :label="
          queryObject.JYZL == 'cy' || queryObject.JYZL == 'fs'
            ? '查验流水号'
            : '检测流水号'
        "
        v-model="queryObject.LSH"
      ></mt-input>
      <mt-input
        :label="
          queryObject.JYZL == 'cy' || queryObject.JYZL == 'fs'
            ? '查验次数'
            : '检验次数'
        "
        v-model="queryObject.JYCS"
      ></mt-input>
      <mt-select
        label="视频齐全"
        v-model="queryObject.IS_SPQQ"
        :data="[
          { display: '全选', value: -1 },
          { display: '是', value: 1 },
          { display: '否', value: 0 },
        ]"
        display="display"
        value="value"
      ></mt-select>
      <mt-select
        :label="
          queryObject.JYZL == 'cy' || queryObject.JYZL == 'fs'
            ? '查验状态'
            : '检验状态'
        "
        v-model="queryObject.ZYZT"
        :data="[
          { display: '全选', value: -1 },
          { display: '已登录未完成', value: 31 },
          { display: '取消', value: 39 },
          { display: '已提交', value: 40 },
        ]"
        display="display"
        value="value"
      ></mt-select>
      <mt-select
        label="检验种类"
        v-model="queryObject.JYZL"
        :data="[
          { display: '检验', value: 'jy' },
          { display: '查验', value: 'cy' },
          { display: '分所', value: 'fs' },
          { display: '报废', value: 'bf' },
        ]"
        display="display"
        value="value"
      ></mt-select>
      <mt-select
        label="机构名称"
        :data="responseObject.JYJGList"
        display="text"
        value="value"
        v-model="queryObject.JYJG"
      ></mt-select>
      <mt-select
        label="号牌种类"
        :data="responseObject.HPZLList"
        v-model="queryObject.HPZL"
        display="text"
        value="value"
      ></mt-select>
      <mt-input label="车辆车架号" v-model="queryObject.CLSBDH"></mt-input>
      <mt-select
        label="车辆类型"
        :data="responseObject.CLLXList"
        display="text"
        value="value"
        v-model="queryObject.CLLX"
      ></mt-select>
      <div v-show="queryObject.JYZL == 'cy' || queryObject.JYZL == 'fs'">
        <mt-select
          label="查验人员"
          :data="responseObject.CYYList"
          display="text"
          value="value"
          v-model="queryObject.CYYXM"
        ></mt-select>
      </div>
    </mt-uniform-grid>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      loading: false,
      queryObject: {
        JYZL: "jy",
      },
      responseObject: {},
      menu: [
        {
          icon: "",
          path: "",
          title: "哈师大是1",
          children: [
            {
              icon: "",
              path: "",
              title: "哈师大是2",
              children: [
                {
                  icon: "",
                  path: "",
                  title: "哈师大是3",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    nav(p) {
      console.log(p);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
