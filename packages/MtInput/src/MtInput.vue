<template>
  <div class="mt-input" :class="{ 'mt-input-group': IsPrepended }">
    <div class="mt-input__prepend" v-show="IsPrepended">
      {{ prefix }}
    </div>
    <input
      class="mt-input__inner"
      :style="style"
      :placeholder="holder"
      v-model="content"
      @input="valueChanged"
    />
  </div>
</template>

<script>
export default {
  name: "MtInput",
  props: {
    label: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  data: function () {
    return {
      prefix: this.label,
      holder: this.placeholder,
      content: this.value,
    };
  },
  watch: {
    value: function (val) {
      this.content = val;
    },
    label: function (val) {
      this.prefix = val;
    },
  },
  computed: {
    style: function () {
      var s = {};
      if (this.width) {
        if (!isNaN(this.width)) this.width = this.width + "px";
        s.width = this.width;
      }
      return s;
    },
    IsPrepended() {
      if (this.prefix) return true;
      else return false;
    },
  },
  methods: {
    valueChanged: function () {
      this.$emit("input", this.content);
    },
  },
};
</script>

<style scope>
.mt-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
</style>