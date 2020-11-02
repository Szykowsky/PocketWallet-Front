<template>
  <div class="row">
    <div class="col-sm-2 col-md-3"></div>
    <div class="col-xs-12 col-sm-8 col-md-6">
      <h3 class="header-slot">
        <slot name="header"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Form"
});
</script>

<style scoped>
.header-slot {
  margin-bottom: 20px;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
</style>