<template>
  <div class="mt-dot-popup-wrapper" :style="style">
    <div class="mt-dot" @click="show = !show" :class="{ open: show }">
      <div class="mt-dot-cross-row"></div>
      <div class="mt-dot-cross-column"></div>
    </div>
    <div class="mt-dot-popup" :class="{ open: show }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MtDot",
  props: ["left", "top"],
  data: function () {
    return {
      show: false,
    };
  },
  computed: {
    style: function () {
      var s = {};
      if (this.left) {
        if (!isNaN(this.left)) this.left = this.left + "px";
        s.left = this.left;
      }
      if (this.top) {
        if (!isNaN(this.top)) this.top = this.top + "px";
        s.top = this.top;
      }
      return s;
    },
  },
};
</script>

<style scope>
.mt-dot-popup-wrapper {
  position: fixed;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  -ms-flex-align: center;
}

.mt-dot-popup-wrapper.right {
  flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
}

.mt-dot {
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  background-color: #fff;
}

.mt-dot:hover {
  cursor: pointer;
}

.mt-dot-cross-row {
  box-sizing: border-box;
  width: 30px;
  border-top: 4px solid #dcdfe6;
  transition: all 0.2s;
  transform: rotate(0deg);
  position: relative;
  left: 2px;
}

.mt-dot-cross-column {
  box-sizing: border-box;
  height: 30px;
  border-left: 4px solid #dcdfe6;
  position: relative;
  left: 23px;
  transition: all 0.2s;
  transform: rotate(0deg);
  position: relative;
  left: -15px;
}

.mt-dot:hover .mt-dot-cross-row {
  transform: rotate(45deg);
}

.mt-dot:hover .mt-dot-cross-column {
  transform: rotate(45deg);
}

.mt-dot.open .mt-dot-cross-row {
  transform: rotate(45deg);
}

.mt-dot.open .mt-dot-cross-column {
  transform: rotate(45deg);
}

.mt-dot-popup {
  /* padding: 8px;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  margin: 10px;
  transition: all 0.2s;
  transform-origin: 0vw;
  transform: scaleX(0);
}

.mt-dot-popup.open {
  transform: scaleX(1);
}
</style>