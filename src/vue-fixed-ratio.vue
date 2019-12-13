<template>
  <div class="vue-fixed-ratio" :style="{ paddingBottom: `${ratio}%`, ...containerStyles }">
    <div class="vue-fixed-ratio__content" :style="contentStyles">
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
  data() {
    return {
      containerStyles: Object.freeze({
        display: 'block',
        position: 'relative',
        height: '0',
        overflow: 'hidden',
      }),
      contentStyles: Object.freeze({
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        maxWidht: 'inherit',
      }),
    }
  },
  computed: {
    ratio() {
      return (this.height / this.width) * 100
    },
  },
}
</script>
