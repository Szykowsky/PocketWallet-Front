<template>
  <div class="tooltip1">
    <slot></slot>
    <span class="tooltiptext1">{{ content }}</span>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    content: String,
  },
});
</script>
<style lang="scss" scoped>
.tooltip1 {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip1 .tooltiptext1 {
  visibility: hidden;
  min-width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip1:hover .tooltiptext1 {
  visibility: visible;
}
</style>