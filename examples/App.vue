<template>
  <div
    id="app"
    v-mt-loading="loading"
    style="background: rgba(0, 46, 85, 0.7); height: 500px"
  >
    <mt-tree :nodes="menu"></mt-tree>
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
