<template>
  <div class="vue-fixed-ratio" :style="{ paddingBottom: `${ratio}%` }">
    <div class="vue-fixed-ratio__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ratio() {
      return (this.height / this.width) * 100
    },
  },
}

</script>

<style>
.vue-fixed-ratio {
  display: block;
  position: relative;
  height: 0;
  overflow: hidden;
}

.vue-fixed-ratio__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: inherit;
}
</style>
