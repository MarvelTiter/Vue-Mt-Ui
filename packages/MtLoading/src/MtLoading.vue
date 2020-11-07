<template>
  <div class="mt-loading-mask" v-show="visible">
    <div class="mt-loading-spinner">
      <svg viewBox="25 25 50 50" class="circular">
        <circle class="path" cx="50" cy="50" r="20" fill="none" />
      </svg>
    </div>
    <p v-if="text" class="mt-loading-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      text: null,
      visible: false,
    };
  },
  methods: {
    setText: function (text) {
      this.text = text;
    },
  },
};
</script>

<style>
.mt-loading-mask {
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.mt-loading-spinner {
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}

.mt-loading-spinner .circular {
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;
}
.mt-loading-spinner .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
}

.mt-loading-text {
  font-size: 18px;
  color: #409eff;
  font-weight: bold;
  padding: 0;
  margin: 0;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
}

@keyframes loading-rotate {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}

.mt-loading-parent--relative {
  position: relative !important;
}
</style>